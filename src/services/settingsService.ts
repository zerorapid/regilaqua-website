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

export interface SiteSettings {
  email: string;
  whatsappNumber: string;
  address: string;
  productCategories: string[];
  heroBanners: HeroBanner[];
  testimonials: Testimonial[];
  faqs: FAQ[];
}

const STORAGE_KEY = 'regilaqua_site_settings';

const DEFAULT_SETTINGS: SiteSettings = {
  email: 'info@regilaqua.in',
  whatsappNumber: '919000000000',
  address: 'RegilAqua Industrial Zone, Guntur, Andhra Pradesh',
  productCategories: ['Domestic', 'Commercial', 'Industrial', 'Water ATM', 'Components'],
  heroBanners: [
    {
      id: '1',
      title: "The Pure Standard.",
      subtitle: "Imported technology. Locally perfected. We deliver the most advanced RO and Water ATM systems in Andhra Pradesh.",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=2000"
    }
  ],
  testimonials: [
    { id: '1', name: "Ramakrishna V.", role: "Plant Operator (Guntur)", content: "The Water ATM systems from RegilAqua are rugged. The card sync is perfect and local service is just a phone call away.", rating: 5 },
    { id: '2', name: "Anjali Devi", role: "School Administrator", content: "We installed the 50 LPH system for our primary wing. Water taste is excellent and maintenance is very low compared to our old unit.", rating: 5 },
    { id: '3', name: "Prasad Rao", role: "Industrial Manager", content: "The 500 LPH RO plant has been running 12 hours a day for a year. Not a single breakdown. Excellent component quality.", rating: 5 }
  ],
  faqs: [
    { id: '1', question: "What capacity RO plant do I need for a 100-person office?", answer: "For an office of 100 people, we typically recommend a 25 LPH or 50 LPH system with a storage tank of at least 50-100 liters to handle peak hours." },
    { id: '2', question: "Do you provide installation in rural Andhra Pradesh?", answer: "Yes, RegilAqua has a dedicated network of technicians across all districts of AP, including rural areas and industrial zones." }
  ]
};

export const settingsService = {
  getSettings: (): SiteSettings => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_SETTINGS;
    try {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings: async (settings: SiteSettings): Promise<void> => {
    // Save to localStorage for sync access
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));

    // Save to Supabase
    const { error } = await supabase
      .from('settings')
      .upsert({ key: 'site_settings', value: settings });
    
    if (error) throw error;
  },

  fetchSettings: async (): Promise<SiteSettings> => {
    const { data, error } = await supabase
      .from('settings')
      .select('value')
      .eq('key', 'site_settings')
      .single();
    
    if (error) {
      console.warn('Error fetching site settings from Supabase, using local:', error);
      return settingsService.getSettings();
    }

    if (data?.value) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.value));
      return data.value;
    }

    return settingsService.getSettings();
  },

  getSEO: async (): Promise<SEOSettings> => {
    const { data, error } = await supabase
      .from('settings')
      .select('value')
      .eq('key', 'seo')
      .single();
    
    if (error) {
      console.error('Error fetching SEO settings:', error);
      return {
        title: 'RegilAqua | Advanced Water Solutions',
        description: 'High-end water purification systems.',
        keywords: 'water, purifier, RO',
        ogImage: ''
      };
    }
    return data.value;
  },

  updateSEO: async (seo: SEOSettings): Promise<void> => {
    const { error } = await supabase
      .from('settings')
      .upsert({ key: 'seo', value: seo });
    
    if (error) throw error;
  }
};
