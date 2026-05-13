import React from 'react';
import { ShoppingCart, Smartphone as WhatsApp, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { cn } from '../lib/utils';

import { useSettings } from '../context/SettingsContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { settings } = useSettings();
  const whatsappUrl = `https://wa.me/${settings.whatsappNumber}?text=Hi, I'm interested in the ${product.name} (${product.category})`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-none border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-slate-50 cursor-pointer">
        <img
          src={product.image || 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800';
          }}
        />
        <div className="absolute top-4 left-4">
          <span className={cn(
            "px-3 py-1 rounded-none text-[10px] font-black uppercase tracking-wider",
            "bg-regil-indigo text-white shadow-lg"
          )}>
            {product.category}
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`} className="text-lg font-black text-slate-900 group-hover:text-regil-blue transition-colors cursor-pointer">
            {product.name}
          </Link>
          <div className="flex items-center space-x-1">
            {product.inStock ? (
              <CheckCircle className="w-4 h-4 text-regil-green" />
            ) : (
              <XCircle className="w-4 h-4 text-red-400" />
            )}
          </div>
        </div>

        <p className="text-slate-500 text-sm line-clamp-2 mb-4 font-medium">
          {product.description}
        </p>

        <Link to={`/product/${product.id}`} className="inline-flex items-center text-xs font-black text-regil-blue hover:translate-x-1 transition-transform mb-6 uppercase tracking-widest">
          View Details <ArrowRight className="w-3 h-3 ml-1" />
        </Link>

        <div className="mt-auto pt-6 border-t border-slate-50 grid grid-cols-2 gap-3">
          <a
            href={product.amazonUrl || "https://www.amazon.in"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center space-x-2 bg-[#FF9900] text-white px-3 py-2.5 rounded-none text-xs font-black hover:bg-[#FFAD33] transition-all shadow-md shadow-[#FF9900]/10"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Amazon</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center space-x-2 bg-regil-green text-white px-3 py-2.5 rounded-none text-xs font-black hover:bg-regil-green/90 transition-all shadow-md shadow-regil-green/10"
          >
            <WhatsApp className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

