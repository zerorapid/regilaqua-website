import { supabase } from '../lib/supabase';

export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SEOSettings {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

export interface FeaturedCollection {
  id: string;
  title: string;
  badge: string;
  desc: string;
  image: string;
}

export interface SiteSettings {
  email: string;
  whatsappNumber: string;
  address: string;
  productCategories: string[];
  heroBanners: HeroBanner[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  bentoImage: string;
  featuredCollections: FeaturedCollection[];
}

// ─── Default fallback (shown only when Supabase is unreachable) ─────────────
export const DEFAULT_SETTINGS: SiteSettings = {
  email: 'info@rigelaqua.in',
  whatsappNumber: '919000000000',
  address: 'RigelAqua Industrial Zone, Guntur, Andhra Pradesh',
  productCategories: ['Domestic', 'Commercial', 'Industrial', 'Water ATM', 'Components'],
  bentoImage: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=1200',
  featuredCollections: [
    { id: '1', title: 'Water ATM Ecosystem', badge: 'Hot Seller', desc: 'Automated vending with RFID and Coin support.', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800' },
    { id: '2', title: 'Industrial RO Series', badge: 'Expert Choice', desc: '250 LPH to 1000 LPH High-pressure systems.', image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=800' },
    { id: '3', title: 'Genuine Components', badge: 'In Stock', desc: 'Membranes, Filters, and Media for all brands.', image: 'https://images.unsplash.com/photo-1585837509811-362bb20d663b?auto=format&fit=crop&q=80&w=800' },
  ],
  heroBanners: [
    {
      id: '1',
      title: "The Pure Standard.",
      subtitle: "Imported technology. Locally perfected. We deliver the most advanced RO and Water ATM systems in Andhra Pradesh.",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=2000"
    }
  ],
  testimonials: [
    { id: '1', name: "Ramakrishna V.", role: "Plant Operator (Guntur)", content: "The Water ATM systems from RigelAqua are rugged. The card sync is perfect and local service is just a phone call away.", rating: 5 },
    { id: '2', name: "Anjali Devi", role: "School Administrator", content: "We installed the 50 LPH system for our primary wing. Water taste is excellent and maintenance is very low compared to our old unit.", rating: 5 },
    { id: '3', name: "Prasad Rao", role: "Industrial Manager", content: "The 500 LPH RO plant has been running 12 hours a day for a year. Not a single breakdown. Excellent component quality.", rating: 5 }
  ],
  faqs: [
    { id: '1', question: "What capacity RO plant do I need for a 100-person office?", answer: "For an office of 100 people, we typically recommend a 25 LPH or 50 LPH system with a storage tank of at least 50-100 liters to handle peak hours." },
    { id: '2', question: "Do you provide installation in rural Andhra Pradesh?", answer: "Yes, RigelAqua has a dedicated network of technicians across all districts of AP, including rural areas and industrial zones." }
  ]
};

// ─── All reads/writes go directly to Supabase — NO localStorage ────────────
export const settingsService = {
  // Exposed so SettingsContext can use as initial state before fetch completes
  DEFAULT_SETTINGS,

  // Fetch site settings from Supabase (single source of truth)
  fetchSettings: async (): Promise<SiteSettings> => {
    const { data, error } = await supabase
      .from('settings')
      .select('value')
      .eq('key', 'site_settings')
      .single();

    if (error || !data?.value) {
      console.warn('Settings not found in Supabase, using defaults.');
      return DEFAULT_SETTINGS;
    }

    // Merge with defaults so new fields always exist even if DB row is old
    return { ...DEFAULT_SETTINGS, ...data.value };
  },

  // Save site settings to Supabase only
  saveSettings: async (settings: SiteSettings): Promise<void> => {
    const { error } = await supabase
      .from('settings')
      .upsert({ key: 'site_settings', value: settings });

    if (error) throw error;
  },

  // Fetch SEO settings from Supabase
  getSEO: async (): Promise<SEOSettings> => {
    const { data, error } = await supabase
      .from('settings')
      .select('value')
      .eq('key', 'seo')
      .single();

    if (error || !data?.value) {
      return {
        title: 'RigelAqua | Advanced Water Solutions',
        description: 'High-end water purification systems for domestic, commercial, and industrial use.',
        keywords: 'water purifier, RO plant, industrial water, RigelAqua',
        ogImage: ''
      };
    }
    return data.value;
  },

  // Save SEO settings to Supabase only
  updateSEO: async (seo: SEOSettings): Promise<void> => {
    const { error } = await supabase
      .from('settings')
      .upsert({ key: 'seo', value: seo });

    if (error) throw error;
  }
};
