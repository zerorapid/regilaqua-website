import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://zpcgghxxsianbsuucpxa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY2dnaHh4c2lhbmJzdXVjcHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0Mjc3ODgsImV4cCI6MjA5NDAwMzc4OH0.0szuuszvW_YEXL9zDoEICrq4pOE1U9LLAIJ_cD7qvxY'
);

const blogs = [
  {
    title: 'Choosing RO Plant Capacity for Your Business',
    excerpt: 'Learn how to calculate the exact LPH capacity your factory or office needs.',
    content: '## Guide to Capacity\nUndersized plants run dry. Oversized waste power. For a 50-person office, 25 LPH is ideal. For a factory of 200, go for 100 LPH.',
    image: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?auto=format&fit=crop&q=80&w=1200',
    date: new Date().toISOString(),
    author: 'RegilAqua Technical Team',
    tags: ['RO Plant', 'Guide']
  },
  {
    title: 'Water ATM Ecosystems in Rural AP',
    excerpt: 'How Water ATMs are transforming access to safe drinking water in remote villages.',
    content: '## Rural Impact\nWater ATMs provide 24/7 access at ₹0.20/litre. Our GSM-enabled units allow panchayats to monitor quality and sales remotely.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=1200',
    date: new Date().toISOString(),
    author: 'Project Manager',
    tags: ['Water ATM', 'Rural Development']
  }
];

const products = [
  {
    name: 'Industrial RO - 500 LPH',
    category: 'Industrial',
    description: 'Heavy-duty 500 Litres Per Hour RO plant with SS304 frame and digital control panel.',
    price: '₹1,25,000',
    image: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?auto=format&fit=crop&q=80&w=800',
    specs: ['500 LPH Capacity', 'SS304 Construction', 'Auto-Flush System'],
    inStock: true
  },
  {
    name: 'Smart Water ATM Kiosk',
    category: 'Water ATM',
    description: 'RFID and Coin operated water vending machine with GSM remote monitoring.',
    price: '₹85,000',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800',
    specs: ['RFID/Coin/UPI', '24/7 Operation', 'Stainless Steel Body'],
    inStock: true
  }
];

async function seed() {
  console.log('🚀 Seeding core content...');
  
  for (const b of blogs) {
    const { error } = await supabase.from('blogs').insert([b]);
    if (error) console.error('Blog fail:', b.title, error.message);
    else console.log('✅ Blog added:', b.title);
  }

  for (const p of products) {
    const { error } = await supabase.from('products').insert([p]);
    if (error) console.error('Product fail:', p.name, error.message);
    else console.log('✅ Product added:', p.name);
  }
  
  console.log('✨ Core seeding complete.');
}

seed();
