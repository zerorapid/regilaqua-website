import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Droplets } from 'lucide-react';
import SEO from '../../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 text-center overflow-hidden relative">
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-regil-blue opacity-10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-regil-indigo opacity-10 blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 max-w-lg">
        <div className="w-24 h-24 bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-12 animate-pulse">
           <Droplets className="w-12 h-12 text-regil-sky" />
        </div>
        
        <h1 className="text-8xl md:text-9xl font-black text-white mb-6 tracking-tighter opacity-20">404</h1>
        <h2 className="text-3xl font-black text-white mb-6 tracking-tight">The drop is lost.</h2>
        <p className="text-slate-400 font-medium mb-12 text-lg">
          The page you are looking for has been moved, deleted, or never existed in our ecosystem.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/" 
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-regil-blue text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-regil-sky transition-all shadow-2xl shadow-regil-blue/20"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
