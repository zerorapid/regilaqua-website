import { Blog } from '../types';

const STORAGE_KEY = 'regilaqua_blogs';

const DEFAULT_BLOGS: Blog[] = [
  {
    id: '1',
    title: 'Why TDS Levels Matter for Your Health',
    excerpt: 'Understanding the mineral content in your water can help you choose the right purification system.',
    content: 'Total Dissolved Solids (TDS) represent the combined content of all inorganic and organic substances contained in a liquid. While some minerals are essential, high levels of lead or arsenic can be dangerous. In Andhra Pradesh, coastal areas often see TDS levels exceeding 2000 ppm, necessitating specialized industrial RO membranes...',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=1200',
    date: new Date().toISOString(),
    author: 'RegilAqua Technical Team',
    tags: ['Education', 'Health', 'TDS']
  }
];

export const blogService = {
  getBlogs: (): Blog[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_BLOGS));
      return DEFAULT_BLOGS;
    }
    return JSON.parse(stored);
  },

  getBlogById: (id: string): Blog | undefined => {
    return blogService.getBlogs().find(b => b.id === id);
  },

  saveBlog: (blog: Omit<Blog, 'id' | 'date'> & { id?: string }): void => {
    const blogs = blogService.getBlogs();
    if (blog.id) {
      const index = blogs.findIndex(b => b.id === blog.id);
      if (index !== -1) {
        blogs[index] = { ...blogs[index], ...blog };
      }
    } else {
      const newBlog: Blog = {
        ...blog,
        id: Math.random().toString(36).substring(2, 9),
        date: new Date().toISOString()
      };
      blogs.unshift(newBlog);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  },

  deleteBlog: (id: string): void => {
    const blogs = blogService.getBlogs().filter(b => b.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  }
};
