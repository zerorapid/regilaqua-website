import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from '../../components/ProductCard';
import ContactForm from '../../components/ContactForm';
import { productService } from '../../services/productService';
import { settingsService } from '../../services/settingsService';
import { Category, Product } from '../../types';
import { cn } from '../../lib/utils';
import { Search, SlidersHorizontal } from 'lucide-react';
import SEO from '../../components/SEO';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = (searchParams.get('category') as Category) || 'All';
  const [searchTerm, setSearchTerm] = React.useState('');
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await productService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };
    loadProducts();
  }, []);

  const { settings } = useSettings();
  const categories: Category[] = ['All', ...settings.productCategories];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <SEO 
        title={`${activeCategory} Products`}
        description={`Browse our premium selection of ${activeCategory === 'All' ? 'water purification products' : activeCategory + ' systems'}. High quality parts, high performance machines.`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our Catalog</h1>
            <p className="text-slate-500 text-lg">
              Explore our range of imported, high-performance water purification 
              solutions labeled for reliability.
            </p>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="flex items-center space-x-2 text-slate-500 mr-2 border-r border-slate-200 pr-4">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Filter</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchParams({ category: cat })}
              className={cn(
                "px-5 py-2 rounded-none text-xs font-black uppercase tracking-wider transition-all",
                activeCategory === cat 
                  ? "bg-regil-blue text-white shadow-lg shadow-regil-blue/20" 
                  : "bg-white text-slate-600 hover:bg-regil-sky/10 hover:text-regil-blue border border-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32 bg-white rounded-none border border-dashed border-slate-300">
            <div className="text-slate-300 mb-4 flex justify-center">
              <Search className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
            <p className="text-slate-500 max-w-xs mx-auto">
              We couldn't find any products matching your current filters or search term.
            </p>
            <button
              onClick={() => {
                setSearchParams({});
                setSearchTerm('');
              }}
              className="mt-6 text-regil-blue font-black hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
