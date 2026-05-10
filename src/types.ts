export type Category = string;

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price?: string;
  image: string;
  images?: string[];
  amazonUrl?: string;
  specs: string[];
  features?: { label: string; value: string }[];
  inStock: boolean;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}
