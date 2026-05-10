import { Product } from '../types';

const STORAGE_KEY = 'regilaqua_products';

const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Aqua V Pure Massive Pro',
    category: 'Domestic',
    description: '7-Stage purification with true digital display, alkaline cartridge and 9L storage.',
    price: '12,999',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800',
    specs: ['9L Storage', 'Digital Display', 'Alkaline Cartridge', 'Pest Resistant Design'],
    inStock: true
  },
  {
    id: '2',
    name: 'Aqua Asian Commercial RO',
    category: 'Commercial',
    description: 'High-capacity systems for schools, offices, and factories. 25 LPH capacity.',
    price: '13,499',
    image: 'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?auto=format&fit=crop&q=80&w=800',
    specs: ['25 LPH Capacity', 'Multi-stage Filtration', 'Stainless Steel Body', 'Automatic Control'],
    inStock: true
  },
  {
    id: '3',
    name: 'Smart Coin Box System',
    category: 'Water ATM',
    description: 'RFID Card and Coin-operated machine for community water plants.',
    price: '8,500',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    specs: ['Coin & Card Support', 'LCD Status Display', 'Rugged Waterproof Design', 'Easy Integration'],
    inStock: true
  },
  {
    id: '4',
    name: 'Coala Carbon Cylinder',
    category: 'Spares',
    description: 'High-grade carbon media vessels critical for initial filtration stages.',
    price: '4,200',
    image: 'https://images.unsplash.com/photo-1585837509811-362bb20d663b?auto=format&fit=crop&q=80&w=800',
    specs: ['High Adsorption Capacity', 'FRP Vessel', 'Uniform Particle size', 'Longer Life'],
    inStock: true
  },
  {
    id: '5',
    name: 'RegilAqua Industrial RO-50K',
    category: 'Commercial',
    description: 'A massive 50,000 LPH industrial RO plant designed for 24/7 heavy-duty operations. Engineered with Japanese membranes and Italian high-pressure pumps.',
    price: 'Consultation Required',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=1200',
    specs: [
      '50,000 LPH Capacity',
      'Japanese TFC Membranes',
      'Italian High-Pressure Pump',
      'PLC-Based Control Panel',
      'VFD Energy Saver',
      'Real-time TDS Monitoring'
    ],
    inStock: true
  }
];

export const productService = {
  getProducts: (): Product[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
      return INITIAL_PRODUCTS;
    }
    return JSON.parse(stored);
  },

  getProductById: (id: string): Product | undefined => {
    return productService.getProducts().find(p => p.id === id);
  },

  saveProduct: (product: Omit<Product, 'id'> & { id?: string }): void => {
    const products = productService.getProducts();
    if (product.id) {
      const idx = products.findIndex(p => p.id === product.id);
      if (idx !== -1) {
        products[idx] = { ...product, id: product.id } as Product;
      }
    } else {
      const newProduct = {
        ...product,
        id: Math.random().toString(36).substr(2, 9)
      } as Product;
      products.push(newProduct);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  },

  deleteProduct: (id: string): void => {
    const products = productService.getProducts().filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }
};
