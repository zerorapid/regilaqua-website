import { supabase } from '../lib/supabase';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  product_name?: string;
  created_at: string;
  status: 'new' | 'read' | 'contacted';
}

export const inquiryService = {
  getInquiries: async (): Promise<Inquiry[]> => {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },
  
  addInquiry: async (inquiry: Omit<Inquiry, 'id' | 'created_at' | 'status'>): Promise<void> => {
    const { error } = await supabase
      .from('inquiries')
      .insert([{
        ...inquiry,
        status: 'new'
      }]);
    if (error) throw error;
  },

  updateStatus: async (id: string, status: Inquiry['status']): Promise<void> => {
    const { error } = await supabase
      .from('inquiries')
      .update({ status })
      .eq('id', id);
    if (error) throw error;
  },

  deleteInquiry: async (id: string): Promise<void> => {
    const { error } = await supabase
      .from('inquiries')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
