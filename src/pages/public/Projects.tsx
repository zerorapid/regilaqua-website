import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, CheckCircle2, ArrowRight, ExternalLink, Activity } from 'lucide-react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function Projects() {
  const cases = [
    {
      title: 'Community Water ATM Network',
      location: 'Guntur District',
      year: '2025',
      impact: '15,000+ People Served Daily',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800',
      desc: 'Deployment of 12 GSM-monitored Water ATMs across 8 villages to provide safe drinking water at ₹0.20/litre.'
    },
    {
      title: '5000 LPH Industrial RO Plant',
      location: 'Visakhapatnam SEZ',
      year: '2024',
      impact: 'Zero Process Water Downtime',
      image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=800',
      desc: 'High-capacity purification system for a major food processing unit, meeting international hygiene standards.'
    },
    {
      title: 'School Drinking Water Initiative',
      location: 'Vijayawada',
      year: '2025',
      impact: '2,500 Students & Staff',
      image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?auto=format&fit=crop&q=80&w=800',
      desc: 'Installation of high-flow commercial units across a 3-campus educational institution with centralized AMC.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO title="Project Portfolio & Case Studies" description="View RegilAqua's successful installations of RO plants and Water ATM networks across Andhra Pradesh." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-regil-blue font-black uppercase tracking-widest text-[10px] mb-4 inline-block">Impact & Results</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">Proven performance <br/>in the field.</h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            From rural villages to high-tech industrial zones, our systems deliver pure water day after day.
          </p>
        </div>

        <div className="space-y-32">
          {cases.map((project, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-regil-blue/5 scale-95 group-hover:scale-100 transition-transform -z-10" />
                  <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover shadow-2xl rounded-none" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-6 py-3 shadow-xl">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Impact</div>
                    <div className="text-regil-blue font-black text-lg tracking-tight">{project.impact}</div>
                  </div>
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <MapPin className="w-3 h-3 mr-2 text-regil-blue" />
                    {project.location}
                  </div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full" />
                  <div className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Calendar className="w-3 h-3 mr-2 text-regil-blue" />
                    {project.year}
                  </div>
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{project.title}</h2>
                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">{project.desc}</p>
                
                <div className="space-y-4 mb-10">
                  {['Site Assessment Done', 'Custom Engineering', 'On-site Deployment', 'Active Maintenance'].map((step) => (
                    <div key={step} className="flex items-center space-x-3 text-slate-900 font-black text-xs uppercase tracking-tight">
                      <CheckCircle2 className="w-4 h-4 text-regil-green" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="inline-flex items-center space-x-3 text-regil-blue font-black uppercase tracking-widest text-xs hover:translate-x-2 transition-transform">
                  <span>Inquire about similar setup</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 bg-slate-900 p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <Activity className="w-full h-full scale-150" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">Have a project in mind?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium">Let our engineers design the perfect water purification solution for your specific site requirements.</p>
            <Link to="/contact" className="bg-regil-blue text-white px-12 py-5 font-black uppercase tracking-widest text-sm hover:bg-regil-sky transition-colors shadow-2xl shadow-regil-blue/20">
              Start Project Discussion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
