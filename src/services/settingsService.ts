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

export interface SiteSettings {
  contactNumber: string;
  whatsappNumber: string;
  email: string;
  address: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  productCategories: string[];
  heroBanners: HeroBanner[];
  testimonials: Testimonial[];
  faqs: FAQ[];
}

const STORAGE_KEY = 'regilaqua_settings';

const DEFAULT_SETTINGS: SiteSettings = {
  contactNumber: '+91 99999 00000',
  whatsappNumber: '919999900000',
  email: 'sales@regilaqua.com',
  address: 'Plot No. 45, Industrial Area, Vijayawada, Andhra Pradesh, 520001',
  facebookUrl: '#',
  instagramUrl: '#',
  linkedinUrl: '#',
  twitterUrl: '#',
  productCategories: ['Domestic', 'Commercial', 'Water ATM', 'Spares'],
  heroBanners: [
    {
      id: '1',
      title: 'Global Purity. Local Excellence.',
      subtitle: 'Imported technology. Locally perfected. Delivering advanced RO systems in Andhra Pradesh.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000'
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Ramesh Kumar',
      role: 'CEO, Krishna Beverages',
      content: 'The 50,000 LPH plant from RegilAqua has been running flawlessly for 2 years. Their service is top-notch.',
      rating: 5
    }
  ],
  faqs: [
    { id: '1', question: "What capacity RO plant do I need for a 100-person office?", answer: "For an office of 100 people, we typically recommend a 25 LPH or 50 LPH system." },
    { id: '2', question: "How often should I change filters?", answer: "Domestic RO filters should be changed every 6-9 months, while industrial cartridges require monthly inspection." }
  ]
};

export const settingsService = {
  getSettings: (): SiteSettings => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_SETTINGS;
  },
  saveSettings: (settings: SiteSettings): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }
};
