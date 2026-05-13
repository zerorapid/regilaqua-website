import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Tool, Clock, Activity, CheckCircle2, ArrowRight, Zap, Droplets } from 'lucide-react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function Services() {
  const plans = [
    {
      name: 'Basic AMC',
      price: 'Starting at ₹4,500/year',
      desc: 'Essential maintenance for domestic and small commercial units.',
      features: ['2 Preventive Visits', 'TDS & Pressure Audit', 'Emergency Support (48h)', 'Pre-filter Replacement'],
      color: 'slate'
    },
    {
      name: 'Comprehensive',
      price: 'Starting at ₹12,000/year',
      desc: 'The gold standard for industrial plants and Water ATMs.',
      features: ['Quarterly Visits', 'All Spares Included', 'Emergency Support (24h)', 'Membrane Chemical Wash', 'Electrical Health Check'],
      color: 'regil-blue',
      popular: true
    },
    {
      name: 'Premium 24/7',
      price: 'Custom Pricing',
      desc: 'Zero-downtime mission critical support for manufacturing.',
      features: ['Monthly Health Check', 'Real-time GSM Monitoring', 'Guaranteed 4h Response', 'Operator Training', 'On-site Buffer Stock'],
      color: 'regil-indigo'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO title="Technical Services & AMC Plans" description="Explore RegilAqua's professional maintenance services, AMC tiers, and technical support for RO plants across Andhra Pradesh." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-regil-blue font-black uppercase tracking-widest text-[10px] mb-4 inline-block">Support Ecosystem</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">Service without <br/>compromise.</h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            A water plant is only as good as the service behind it. We provide Andhra Pradesh's most responsive technical network.
          </p>
        </div>

        {/* Plan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-10 border ${plan.popular ? 'border-regil-blue bg-slate-50 shadow-2xl' : 'border-slate-200'} rounded-none flex flex-col`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-regil-blue text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                  Most Recommended
                </div>
              )}
              <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-regil-blue font-black text-sm mb-6">{plan.price}</p>
              <p className="text-slate-500 text-sm mb-8 font-medium">{plan.desc}</p>
              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start space-x-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-regil-green shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className={`w-full py-4 font-black uppercase tracking-widest text-xs text-center transition-all ${plan.popular ? 'bg-regil-blue text-white' : 'bg-slate-900 text-white hover:bg-regil-blue'}`}>
                Choose This Plan
              </Link>
            </div>
          ))}
        </div>

        {/* Technical Capabilities */}
        <div className="bg-slate-900 p-12 md:p-20 text-white rounded-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-regil-blue opacity-10 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 tracking-tight">On-Site Technical Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Droplets />, title: 'Water Analysis', desc: 'Full TDS, PH and chemical testing.' },
                  { icon: <Tool />, title: 'Retrofitting', desc: 'Upgrade your old RO plants.' },
                  { icon: <Zap />, title: 'Automation', desc: 'GSM and PLC integration.' },
                  { icon: <Clock />, title: '24h Support', desc: 'Dedicated emergency response.' }
                ].map((cap, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-regil-sky">{cap.icon}</div>
                    <h4 className="font-black uppercase tracking-widest text-xs">{cap.title}</h4>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-l border-white/10 pl-0 lg:pl-12">
              <h3 className="text-xl font-black mb-6">Need a custom service?</h3>
              <p className="text-slate-400 mb-8 font-medium">We design custom maintenance workflows for multi-site installations and government projects.</p>
              <Link to="/contact" className="inline-flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-regil-sky transition-colors">
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
