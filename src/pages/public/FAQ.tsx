import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import { useSettings } from '../../context/SettingsContext';

export default function FAQ() {
  const { settings } = useSettings();
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  const defaultFaqs = [
    { 
      question: "What is the typical lifespan of an RO membrane?", 
      answer: "In our industrial plants, Dow membranes typically last 2-3 years depending on input water quality and maintenance frequency. Regular chemical washing can extend this." 
    },
    { 
      question: "How much power does a 500 LPH plant consume?", 
      answer: "A standard 500 LPH RO plant consumes approximately 2.5kW to 3kW per hour of operation. Our plants are optimized with energy-efficient pumps." 
    },
    { 
      question: "Do you offer UPI integration for Water ATMs?", 
      answer: "Yes, our latest Smart Water ATMs support UPI (QR Code) payments, RFID cards, and traditional coin operation." 
    },
    { 
      question: "What districts in Andhra Pradesh do you cover?", 
      answer: "We cover all 26 districts of Andhra Pradesh with dedicated service technicians based in key hubs like Guntur, Vizag, Vijayawada, and Nellore." 
    }
  ];

  const faqs = settings.faqs.length > 0 ? settings.faqs : defaultFaqs;

  const filteredFaqs = faqs.filter(f => 
    f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 pt-32 pb-20">
      <SEO title="Frequently Asked Questions" description="Answers to common questions about RO plant maintenance, Water ATM technology, and RegilAqua services." />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-regil-blue mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">Support Center</h1>
          <p className="text-slate-500 font-medium">Find quick answers to common technical and service questions.</p>
        </div>

        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search for a topic (e.g. membrane, power, districts)..."
            className="w-full bg-white border border-slate-200 py-6 pl-16 pr-6 font-medium focus:border-regil-blue outline-none transition-all shadow-xl shadow-slate-200/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 overflow-hidden transition-all hover:shadow-lg">
              <button 
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <span className="font-black text-slate-900 group-hover:text-regil-blue transition-colors uppercase tracking-tight">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed border-t border-slate-50 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-20 text-slate-400 font-medium italic">
              No matching questions found. Try a different keyword.
            </div>
          )}
        </div>

        {/* Still Have Questions */}
        <div className="mt-20 p-10 bg-regil-indigo text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-none border border-white/20">
              <MessageSquare className="w-8 h-8 text-regil-sky" />
            </div>
            <div>
              <h3 className="text-xl font-black mb-1">Still have questions?</h3>
              <p className="text-regil-light text-sm font-medium">Our technical support is ready to help.</p>
            </div>
          </div>
          <a href={`https://wa.me/${settings.whatsappNumber}`} className="bg-white text-regil-indigo px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-regil-sky hover:text-white transition-all">
            Chat with Support
          </a>
        </div>
      </div>
    </div>
  );
}
