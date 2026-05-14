import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Smartphone as WhatsApp, Clock, Send } from 'lucide-react';
import { useSettings } from '../../context/SettingsContext';
import SEO from '../../components/SEO';

export default function Contact() {
  const { settings } = useSettings();

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO 
        title="Contact Our Technical Team" 
        description="Get in touch with RegilAqua for industrial RO plant installations, water ATM setups, or service inquiries across Andhra Pradesh."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-regil-blue font-black uppercase tracking-widest text-[10px] mb-4 inline-block">Connect With Us</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">Contact Us</h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Our technical consultants are available across Andhra Pradesh for site visits and water quality assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-none">
              <Phone className="w-8 h-8 text-regil-blue mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">Call Support</h3>
              <p className="text-slate-600 font-medium">{settings.whatsappNumber}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2">Mon - Sat, 9am - 6pm</p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-none">
              <Mail className="w-8 h-8 text-regil-blue mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">Email Inquiry</h3>
              <p className="text-slate-600 font-medium">{settings.email}</p>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-none">
              <MapPin className="w-8 h-8 text-regil-blue mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">Main Facility</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{settings.address}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-slate-900 p-10 md:p-16 rounded-none relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-regil-blue opacity-10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-white mb-10 tracking-tight">Send an Inquiry</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-medium focus:border-regil-sky outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <input className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-medium focus:border-regil-sky outline-none transition-colors" placeholder="+91 00000 00000" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Requirements (RO Plant / ATM / Service)</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-medium focus:border-regil-sky outline-none transition-colors" placeholder="Describe your needs..." />
                </div>
                <button type="submit" className="md:col-span-2 bg-regil-blue text-white py-5 font-black uppercase tracking-widest shadow-xl shadow-regil-blue/20 hover:bg-regil-sky transition-colors flex items-center justify-center space-x-3 group">
                  <span>Submit Requirement</span>
                  <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
