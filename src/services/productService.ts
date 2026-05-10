import { supabase } from '../lib/supabase';
import { Product } from '../types';

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  getProductById: async (id: string): Promise<Product | null> => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  saveProduct: async (product: Omit<Product, 'id'> & { id?: string }): Promise<void> => {
    if (product.id) {
      const { error } = await supabase
        .from('products')
        .update(product)
        .eq('id', product.id);
      if (error) throw error;
    } else {
      const { error } = await supabase
        .from('products')
        .insert([product]);
      if (error) throw error;
    }
  },

  deleteProduct: async (id: string): Promise<void> => {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
