import React from 'react';
import SEO from '../../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO title="Privacy Policy" description="Privacy policy and data protection guidelines for RegilAqua." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tighter">Privacy Policy</h1>
        <div className="prose prose-slate prose-lg max-w-none font-medium text-slate-600 leading-relaxed">
          <p className="text-xl font-bold text-slate-900 mb-8">Last Updated: May 2026</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you request a quote, make an inquiry about our RO plants or Water ATMs, or contact our technical support. This may include your name, phone number, email address, and physical site location.</p>

          <h2>2. How We Use Your Information</h2>
          <p>Your information is used strictly for technical consultations, product installations, and AMC (Annual Maintenance Contract) management. We do not sell your personal data to third parties.</p>

          <h2>3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your site data and contact information. Our Supabase-backed systems ensure that your inquiries are stored securely.</p>

          <h2>4. Your Rights</h2>
          <p>You have the right to request a copy of the data we hold about your business or to request its deletion from our records at any time.</p>

          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@rigelaqua.in.</p>
        </div>
      </div>
    </div>
  );
}
