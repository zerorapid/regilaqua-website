import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogService } from '../../services/blogService';
import SEO from '../../components/SEO';
import { Blog } from '../../types';

export default function BlogList() {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);

  React.useEffect(() => {
    setBlogs(blogService.getBlogs());
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO 
        title="Water Wisdom Blog" 
        description="Expert insights, technical tips, and the latest updates on water purification technology in Andhra Pradesh."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
            Water Wisdom <span className="text-regil-blue">Blog</span>
          </h1>
          <p className="text-lg text-slate-500 font-bold uppercase tracking-widest">
            Updates, Tips & Technical Insights from RegilAqua
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-none overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <Link to={`/blog/${blog.id}`} className="block aspect-video overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1 text-regil-blue" />
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center border-l border-slate-200 pl-4">
                    <User className="w-3 h-3 mr-1 text-regil-blue" />
                    {blog.author}
                  </div>
                </div>

                <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-regil-blue transition-colors tracking-tight leading-tight">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h2>
                
                <p className="text-slate-600 font-medium text-sm line-clamp-3 mb-8">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-black text-regil-blue bg-regil-sky/10 px-2 py-0.5 rounded-none uppercase">{tag}</span>
                    ))}
                  </div>
                  <Link 
                    to={`/blog/${blog.id}`} 
                    className="text-xs font-black text-regil-blue flex items-center group-hover:translate-x-1 transition-transform uppercase tracking-widest"
                  >
                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
