import { supabase } from '../lib/supabase';
import { Blog } from '../types';

export const blogService = {
  getBlogs: async (): Promise<Blog[]> => {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  getBlogById: async (id: string): Promise<Blog | null> => {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  saveBlog: async (blog: Omit<Blog, 'id' | 'date'> & { id?: string }): Promise<void> => {
    if (blog.id) {
      const { error } = await supabase
        .from('blogs')
        .update({
          ...blog,
          date: new Date().toISOString() // Update date on edit? Or keep original? Usually keep original.
        })
        .eq('id', blog.id);
      if (error) throw error;
    } else {
      const { error } = await supabase
        .from('blogs')
        .insert([{
          ...blog,
          date: new Date().toISOString()
        }]);
      if (error) throw error;
    }
  },

  deleteBlog: async (id: string): Promise<void> => {
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
