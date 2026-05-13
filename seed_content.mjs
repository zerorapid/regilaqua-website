import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://zpcgghxxsianbsuucpxa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY2dnaHh4c2lhbmJzdXVjcHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0Mjc3ODgsImV4cCI6MjA5NDAwMzc4OH0.0szuuszvW_YEXL9zDoEICrq4pOE1U9LLAIJ_cD7qvxY'
);

const products = [
  {
    name: 'AquaPure Pro Domestic RO',
    category: 'Domestic',
    description: 'Ultra-sleek wall-mounted purifier with 7-stage alkaline filtration and UV sterilization. Designed for the modern Indian kitchen.',
    price: '₹18,500',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    specs: ['15 LPH Capacity', '8L Storage Tank', 'Alkaline Mineralizer'],
    features: [{label: 'Filter Life', value: '6000 Litres'}, {label: 'Input TDS', value: 'Up to 2500 ppm'}],
    inStock: true
  },
  {
    name: 'RegilAqua Commercial 50',
    category: 'Commercial',
    description: 'High-performance 50 LPH unit in a complete SS cabinet. Ideal for clinics, offices, and small schools.',
    price: '₹35,000',
    image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?auto=format&fit=crop&q=80&w=800',
    specs: ['50 LPH Flow Rate', 'Full SS304 Body', 'Imported High-Pressure Pump'],
    features: [{label: 'Power', value: '250W'}, {label: 'Weight', value: '45kg'}],
    inStock: true
  },
  {
    name: 'Industrial RO Plant - 250 LPH',
    category: 'Industrial',
    description: 'Precision-engineered industrial plant for small factories and large apartment complexes.',
    price: '₹85,000',
    image: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?auto=format&fit=crop&q=80&w=800',
    specs: ['250 LPH Capacity', 'Automatic Control Panel', 'Multi-Port Valve'],
    features: [{label: 'Membrane', value: 'Dow FilmTec (USA)'}, {label: 'Pre-treatment', value: 'Sand & Carbon'}],
    inStock: true
  },
  {
    name: 'Industrial RO Plant - 1000 LPH',
    category: 'Industrial',
    description: 'Heavy-duty high-volume plant for large scale manufacturing and community water supply.',
    price: '₹2,45,000',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=800',
    specs: ['1000 LPH Capacity', 'Grundfos VFD Pump', 'Online TDS Monitoring'],
    features: [{label: 'Automation', value: 'Fully Programmable PLC'}, {label: 'Recovery', value: 'Up to 75%'}],
    inStock: true
  },
  {
    name: 'Smart Water ATM Kiosk',
    category: 'Water ATM',
    description: 'RFID and Coin operated automated vending with GSM monitoring and daily sales reports.',
    price: '₹95,000',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800',
    specs: ['24/7 Operation', 'RFID/Coin/UPI Support', 'GSM Telemetry'],
    features: [{label: 'Dispense Accuracy', value: '±5ml'}, {label: 'Daily Cap', value: '2500 Litres'}],
    inStock: true
  },
  {
    name: 'Integrated Softener System',
    category: 'Components',
    description: 'Automatic water softener for hard water scaling prevention in boilers and residential lines.',
    price: '₹42,000',
    image: 'https://images.unsplash.com/photo-1585837509811-362bb20d663b?auto=format&fit=crop&q=80&w=800',
    specs: ['2000 LPH Flow', 'Automatic Regeneration', 'Food-Grade Resin'],
    features: [{label: 'Valve', value: 'Runxin Digital'}, {label: 'Salt Tank', value: '70L included'}],
    inStock: true
  },
  {
    name: 'Dow FilmTec BW30-4040',
    category: 'Components',
    description: 'Original industrial RO membrane for brackish water treatment. The industry standard for reliability.',
    price: '₹14,500',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    specs: ['2400 GPD Output', '99.5% Salt Rejection', 'High Fouling Resistance'],
    features: [{label: 'Origin', value: 'USA'}, {label: 'Standard', value: '4" x 40"'}],
    inStock: true
  },
  {
    name: 'High-Pressure RO Pump 2.0HP',
    category: 'Components',
    description: 'Vertical multi-stage stainless steel pump for high-pressure industrial RO applications.',
    price: '₹22,000',
    image: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?auto=format&fit=crop&q=80&w=800',
    specs: ['2.0 HP Rating', 'SS316 Impeller', 'Continuous Duty'],
    features: [{label: 'Max Head', value: '180m'}, {label: 'Suction', value: '1.25"'}],
    inStock: true
  }
];

async function seed() {
  console.log('🚀 MASTER SEED: Populating Product Catalog...');
  
  // Clear old mockup data to avoid duplicates
  await supabase.from('products').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  for (const p of products) {
    const { error } = await supabase.from('products').insert([p]);
    if (error) console.error('Product fail:', p.name, error.message);
    else console.log('✅ Product live:', p.name);
  }
  
  console.log('✨ Catalog seeding complete. Site is now production-ready.');
}

seed();
