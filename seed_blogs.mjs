import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://zpcgghxxsianbsuucpxa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY2dnaHh4c2lhbmJzdXVjcHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0Mjc3ODgsImV4cCI6MjA5NDAwMzc4OH0.0szuuszvW_YEXL9zDoEICrq4pOE1U9LLAIJ_cD7qvxY'
);

const blogs = [
  {
    title: "How to Choose the Right RO Plant Capacity for Your Business",
    excerpt: "Selecting the correct litres-per-hour rating is the single most important decision when investing in a commercial RO plant. Here's a straightforward guide.",
    content: `<h2>Why Capacity Matters</h2>
<p>An undersized plant runs 24/7 and burns out membranes faster. An oversized one sits idle and creates stagnant water issues. The sweet spot depends on three variables: peak consumption, operational hours, and recovery ratio.</p>

<h2>Step 1: Calculate Your Peak Daily Demand</h2>
<p>For a school of 500 students, assume 4 litres per person per day = 2,000 litres/day. Add 30% buffer for wastage and cleaning cycles → 2,600 litres/day target.</p>

<h2>Step 2: Factor in Operating Hours</h2>
<p>If the plant runs 10 hours/day: 2,600 ÷ 10 = 260 LPH. Always round up to the next standard size — in this case, a 300 LPH plant.</p>

<h2>Step 3: Account for Recovery Ratio</h2>
<p>Standard RO plants recover 50–75% of feed water. A 300 LPH plant at 65% recovery needs ~460 LPH of raw water input. Ensure your bore well or municipal supply can sustain this.</p>

<h2>Common Capacity Reference Table</h2>
<ul>
  <li><strong>50 LPH</strong> — Small offices, clinics, restaurants (up to 50 people)</li>
  <li><strong>250 LPH</strong> — Schools, factories, mid-size hostels</li>
  <li><strong>500 LPH</strong> — Large factories, apartment complexes</li>
  <li><strong>1000 LPH+</strong> — Industrial units, water bottling, large institutions</li>
</ul>

<p>At RigelAqua, every installation begins with a free water quality test and demand analysis. Contact our team to get a precise recommendation for your site.</p>`,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    author: "RigelAqua Engineering Team",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["RO Plant", "Capacity Planning", "Commercial", "Buying Guide"]
  },
  {
    title: "Water ATM Ecosystems: Transforming Rural Andhra Pradesh",
    excerpt: "Smart Water ATMs powered by UPI, RFID, and IoT monitoring are redefining safe water access across 580+ villages in AP. Here's how the technology works.",
    content: `<h2>The Rural Water Crisis in Numbers</h2>
<p>Over 40% of Andhra Pradesh's rural population still relies on unprotected wells or rivers for drinking water. Waterborne diseases account for ₹3,200 crore in lost productivity annually in the state alone.</p>

<h2>What Is a Smart Water ATM?</h2>
<p>A Water ATM is an automated kiosk that dispenses purified RO water at a subsidised cost — typically ₹0.25 to ₹0.50 per litre — using digital payment methods or pre-loaded RFID cards. The machine runs continuously and requires minimal human supervision.</p>

<h2>Technology Stack Inside a RigelAqua Water ATM</h2>
<ul>
  <li><strong>RO Purification</strong> — 7-stage treatment reducing TDS below 100 ppm</li>
  <li><strong>IoT Telemetry</strong> — Real-time flow rate, membrane health, and tank levels sent to a cloud dashboard</li>
  <li><strong>Payment Gateway</strong> — UPI QR, RFID smart card, and coin operation</li>
  <li><strong>Solar Hybrid Option</strong> — Reduce operating cost by 60% in sunny AP regions</li>
</ul>

<h2>Case Study: Nellore District Deployment</h2>
<p>In 2024, 18 Water ATMs were installed across Nellore district under a public-private partnership. Within 90 days, over 12,000 families switched from contaminated well water to ATM-purified water. Diarrhoea cases in the catchment area dropped by 67% according to local PHC records.</p>

<h2>ROI for Operators</h2>
<p>A standard Water ATM kiosk serving 300 families/day generates ₹4,500–₹6,000/month in revenue. With a capital cost of ₹1.8L–₹2.5L per unit, most operators break even in 12–18 months.</p>`,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    author: "RigelAqua Field Operations",
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["Water ATM", "Rural AP", "IoT", "UPI", "Safe Water"]
  },
  {
    title: "5 Signs Your RO Membrane Needs Replacement Right Now",
    excerpt: "Ignoring a failing membrane costs far more than replacing it. Learn the five unmistakable warning signs every plant operator must know.",
    content: `<h2>Why Membranes Fail</h2>
<p>RO membranes are semi-permeable films that remove 95–99% of dissolved solids. Over time, scaling, biofouling, and physical degradation reduce their rejection rate — and contaminated water passes through undetected unless you know what to look for.</p>

<h2>Sign 1: TDS Output Rising Despite Normal Input</h2>
<p>If your treated water TDS has crept up by 20% or more from baseline without a change in feed water quality, the membrane's rejection capacity is degrading. Test weekly with a pocket TDS meter.</p>

<h2>Sign 2: Sharp Drop in Production Flow Rate</h2>
<p>A healthy membrane produces a consistent flow. A 15–20% reduction in LPH output (without pressure changes) signals severe scaling or biofouling inside the vessel.</p>

<h2>Sign 3: Abnormal Salt Passage During CIP</h2>
<p>During your Chemical-In-Place cleaning cycle, if NaOH or citric acid flushes are not restoring flow to within 10% of original, the membrane fibres are physically damaged — no chemical can fix that.</p>

<h2>Sign 4: Pressure Drop Across the Vessel</h2>
<p>A differential pressure (ΔP) greater than 15 psi across a single element indicates catastrophic fouling. If CIP doesn't resolve this within two cycles, replacement is mandatory.</p>

<h2>Sign 5: Customer Complaints About Taste or Odour</h2>
<p>A passing membrane produces flat, odour-free water. If customers report "salty" or "musty" water, your membrane may have developed physical tears allowing bypass.</p>

<h2>RigelAqua Membrane Supply</h2>
<p>We stock original Dow FilmTec, Hydranautics, and Toray membranes with test certificates. Same-day dispatch available for Vijayawada, Guntur, and Vizag. Call us before your next CIP cycle.</p>`,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    author: "RigelAqua Service Division",
    date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["Maintenance", "RO Membrane", "Service", "Dow FilmTec", "AMC"]
  },
  {
    title: "Understanding TDS: What's the Right Level for Drinking Water?",
    excerpt: "TDS — Total Dissolved Solids — is the most misunderstood parameter in water quality. Here's the science, the myths, and what your RO plant should actually deliver.",
    content: `<h2>What Is TDS?</h2>
<p>TDS measures the total concentration of dissolved substances in water — calcium, magnesium, sodium, potassium, bicarbonates, chlorides, and sulphates. It's expressed in milligrams per litre (mg/L) or parts per million (ppm).</p>

<h2>BIS and WHO Standards</h2>
<ul>
  <li><strong>BIS IS:10500</strong> — Desirable limit: 500 ppm. Permissible limit: 2000 ppm.</li>
  <li><strong>WHO Guideline</strong> — No health-based guideline, but palatability is affected above 600 ppm.</li>
  <li><strong>RigelAqua Target</strong> — We set our plants to deliver 50–150 ppm for the best balance of taste and mineral content.</li>
</ul>

<h2>The "Zero TDS" Myth</h2>
<p>Many consumers believe lower TDS is always better. This is incorrect. Water at 0–20 ppm is "aggressive" — it leaches minerals from the body and tastes flat. A well-designed RO system with a mineraliser stage brings water back to 75–100 ppm, which is the global sweet spot.</p>

<h2>High TDS Zones in Andhra Pradesh</h2>
<p>Coastal AP districts (Guntur, Krishna, Nellore) frequently show groundwater TDS between 800–4000 ppm due to seawater intrusion. Industrial zones around Visakhapatnam often exceed 1500 ppm. These areas require high-rejection membranes and pre-treatment systems.</p>

<h2>How Often Should You Test?</h2>
<p>Weekly TDS testing takes 30 seconds with a pocket meter. We recommend logging readings in a maintenance register to track membrane degradation over time. A spike of more than 50 ppm from your baseline warrants a full service call.</p>`,
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    author: "RigelAqua Technical Team",
    date: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["TDS", "Water Quality", "BIS Standards", "RO", "Drinking Water"]
  },
  {
    title: "Annual Maintenance Contracts: Why Every RO Plant Needs One",
    excerpt: "A breakdown at 2 AM costs 10x more than a scheduled service visit. Here's why an AMC is the single smartest investment for any RO plant owner in AP.",
    content: `<h2>The Real Cost of Reactive Maintenance</h2>
<p>When an industrial RO plant fails without a maintenance contract, the typical outcome is: 2–4 days of downtime, emergency technician call-out charges (often 3x normal rate), and replacement parts at retail price. For a factory running on treated water, 4 days of downtime can cost ₹5–₹15 lakhs in lost production.</p>

<h2>What a RigelAqua AMC Covers</h2>
<ul>
  <li>✅ 4 preventive maintenance visits per year</li>
  <li>✅ Pre-filter cartridge replacement (included)</li>
  <li>✅ Chemical cleaning (CIP) of membranes</li>
  <li>✅ Calibration of pressure gauges and flow meters</li>
  <li>✅ Priority emergency response — 4-hour SLA in Vijayawada, 8-hour for Tier 2 towns</li>
  <li>✅ Free TDS and water quality testing at each visit</li>
  <li>✅ 15% discount on all spare parts</li>
</ul>

<h2>AMC Pricing Tiers</h2>
<ul>
  <li><strong>Basic (up to 100 LPH)</strong> — ₹6,000/year</li>
  <li><strong>Standard (100–500 LPH)</strong> — ₹12,000/year</li>
  <li><strong>Premium (500 LPH+)</strong> — ₹22,000/year</li>
  <li><strong>Water ATM Fleet (per unit)</strong> — ₹4,500/year with IoT monitoring</li>
</ul>

<h2>What's Not Covered</h2>
<p>Membrane replacement, major pump overhauls, and damage due to power surges are billed separately at discounted AMC rates. We always provide a written estimate before proceeding.</p>

<h2>Start Your AMC Today</h2>
<p>Contact RigelAqua to schedule a free plant health audit. We'll assess your current system and recommend the right tier before you commit to anything.</p>`,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    author: "RigelAqua Service Division",
    date: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["AMC", "Maintenance", "Service Contract", "RO Plant", "Andhra Pradesh"]
  }
];

async function seedBlogs() {
  console.log(`Seeding ${blogs.length} blog posts...`);
  
  for (const blog of blogs) {
    const { data, error } = await supabase
      .from('blogs')
      .insert([blog])
      .select('id, title');
    
    if (error) {
      console.error(`  ❌ Failed: "${blog.title.slice(0,40)}..." — ${error.message}`);
    } else {
      console.log(`  ✅ Added: "${blog.title.slice(0,50)}..."`);
    }
  }

  // Final count
  const { data: all } = await supabase.from('blogs').select('id, title');
  console.log(`\n📊 Total blogs in DB: ${all?.length || 0}`);
  all?.forEach(b => console.log(`   - ${b.title.slice(0,60)}`));
}

seedBlogs().catch(console.error);
