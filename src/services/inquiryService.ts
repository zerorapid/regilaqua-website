export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  productName?: string;
  createdAt: string;
  status: 'new' | 'read' | 'contacted';
}

const STORAGE_KEY = 'regilaqua_inquiries';

export const inquiryService = {
  getInquiries: (): Inquiry[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },
  
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): void => {
    const inquiries = inquiryService.getInquiries();
    const newInquiry: Inquiry = {
      ...inquiry,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newInquiry, ...inquiries]));
  },

  updateStatus: (id: string, status: Inquiry['status']): void => {
    const inquiries = inquiryService.getInquiries();
    const updated = inquiries.map(i => i.id === id ? { ...i, status } : i);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  },

  deleteInquiry: (id: string): void => {
    const inquiries = inquiryService.getInquiries();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries.filter(i => i.id !== id)));
  }
};
