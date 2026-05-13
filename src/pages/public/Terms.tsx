import React from 'react';
import SEO from '../../components/SEO';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO title="Terms of Service" description="Terms and conditions for RegilAqua products and services." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tighter">Terms of Service</h1>
        <div className="prose prose-slate prose-lg max-w-none font-medium text-slate-600 leading-relaxed">
          <p className="text-xl font-bold text-slate-900 mb-8">Effective Date: May 2026</p>
          
          <h2>1. Product Warranty</h2>
          <p>All RegilAqua industrial RO plants and Water ATMs are covered by a limited manufacturer warranty on components. Wear-and-tear parts like filters and membranes are covered under specific maintenance schedules.</p>

          <h2>2. Installation & Site Readiness</h2>
          <p>Customers are responsible for providing power and raw water input as per the technical specifications provided by our engineers before installation can proceed.</p>

          <h2>3. Payment Terms</h2>
          <p>Standard payment terms for industrial projects involve a 50% advance payment, 40% upon delivery of equipment, and 10% post-successful installation and testing.</p>

          <h2>4. Maintenance Contracts (AMC)</h2>
          <p>Annual Maintenance Contracts are separate from initial purchase agreements and are governed by the specific tier (Basic, Comprehensive, or Premium) chosen by the client.</p>

          <h2>5. Limitation of Liability</h2>
          <p>RegilAqua shall not be liable for system downtime caused by improper operator handling or input water quality falling outside the agreed-upon design parameters.</p>
        </div>
      </div>
    </div>
  );
}
