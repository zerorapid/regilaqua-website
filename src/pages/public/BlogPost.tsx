import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { blogService } from '../../services/blogService';
import SEO from '../../components/SEO';
import { Blog } from '../../types';
import Markdown from 'react-markdown';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = React.useState<Blog | null>(null);

  React.useEffect(() => {
    if (id) {
      const b = blogService.getBlogById(id);
      if (b) setBlog(b);
      else navigate('/blog');
    }
  }, [id, navigate]);

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO 
        title={blog.title} 
        description={blog.excerpt}
        image={blog.image}
        type="article"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center space-x-2 text-slate-500 hover:text-regil-blue font-black mb-10 transition-colors uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map(tag => (
                <span key={tag} className="text-[10px] font-black text-regil-blue bg-regil-sky/10 px-3 py-1 rounded-none uppercase tracking-widest">{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center justify-between py-6 border-y border-slate-100 mb-10">
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-xs font-black text-slate-400 uppercase tracking-widest">
                  <Calendar className="w-4 h-4 mr-2 text-regil-blue" />
                  {new Date(blog.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-xs font-black text-slate-400 uppercase tracking-widest">
                  <User className="w-4 h-4 mr-2 text-regil-blue" />
                  {blog.author}
                </div>
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }}
                className="text-slate-400 hover:text-regil-blue transition-colors"
                title="Share Article"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </header>

          <div className="aspect-video rounded-none overflow-hidden mb-12 shadow-2xl">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg max-w-none prose-slate prose-headings:font-black prose-a:text-regil-blue font-medium text-slate-700 leading-relaxed">
            <Markdown>{blog.content}</Markdown>
          </div>
          
          <footer className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap gap-4 items-center">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center">
              <Tag className="w-4 h-4 mr-2" /> Tagged under:
            </span>
            {blog.tags.map(tag => (
              <span key={tag} className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-none">#{tag}</span>
            ))}
          </footer>
        </article>

        {/* CTA */}
        <div className="mt-20 bg-regil-indigo p-12 rounded-none text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-regil-blue rounded-full opacity-20 blur-2xl" />
          <h3 className="text-3xl font-black mb-4">Need expert guidance?</h3>
          <p className="text-slate-300 font-medium mb-8">Discuss your water purification requirements with our technical specialists today.</p>
          <Link to="/products" className="inline-block bg-white text-regil-blue px-10 py-4 rounded-none font-black shadow-xl hover:scale-105 transition-all">
            Consult Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
}
