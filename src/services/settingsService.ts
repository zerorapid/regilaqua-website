import { supabase } from '../lib/supabase';

export interface SEOSettings {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

export const settingsService = {
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
