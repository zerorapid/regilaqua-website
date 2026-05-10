import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Settings, 
  Activity, 
  Database,
  Smartphone as WhatsApp,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ClipboardList
} from 'lucide-react';
import { productService } from '../../services/productService';
import { settingsService } from '../../services/settingsService';
import { Product } from '../../types';
import { cn } from '../../lib/utils';
import SEO from '../../components/SEO';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const settings = settingsService.getSettings();

  React.useEffect(() => {
    if (id) {
      const p = productService.getProductById(id);
      if (p) {
        setProduct(p);
        setCurrentImageIndex(0);
      } else {
        navigate('/products');
      }
    }
  }, [id, navigate]);

  if (!product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const whatsappUrl = `https://wa.me/${settings.whatsappNumber}?text=Hi, I'm interested in the ${product.name}. Please share more details.`;

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO 
        title={product.name} 
        description={product.description}
        image={product.image}
        type="product"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/products" 
          className="inline-flex items-center space-x-2 text-slate-500 hover:text-regil-blue font-black mb-8 transition-colors uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Catalog</span>
        </Link>

        <div className="bg-white rounded-none shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="p-8 lg:p-12 bg-slate-100/50">
              <div className="relative aspect-square rounded-none overflow-hidden bg-white shadow-inner mb-6 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-contain p-8"
                  />
                </AnimatePresence>
                
                {images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                      className="bg-white/80 backdrop-blur shadow-xl p-3 rounded-none hover:bg-white"
                    >
                      <ChevronLeft className="w-6 h-6 text-slate-900" />
                    </button>
                    <button 
                      onClick={() => setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))}
                      className="bg-white/80 backdrop-blur shadow-xl p-3 rounded-none hover:bg-white"
                    >
                      <ChevronRight className="w-6 h-6 text-slate-900" />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-5 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={cn(
                      "aspect-square rounded-none overflow-hidden border-2 transition-all",
                      currentImageIndex === idx ? "border-regil-blue" : "border-transparent opacity-50 hover:opacity-100"
                    )}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-16 border-l border-slate-100">
              <span className="inline-block px-3 py-1 bg-regil-sky/10 text-regil-blue rounded-none text-[10px] font-black uppercase tracking-widest mb-6">
                RegilAqua {product.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                {product.name}
              </h1>
              <p className="text-lg text-slate-600 mb-10 font-medium leading-relaxed">
                {product.description}
              </p>

              {(product.features && product.features.length > 0) && (
                <div className="grid grid-cols-2 gap-4 mb-10 bg-slate-50 p-6 rounded-none border border-slate-100">
                  {product.features.map((feat, i) => (
                    <div key={i}>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{feat.label}</p>
                      <p className="font-black text-slate-900">{feat.value}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={product.amazonUrl || "https://www.amazon.in"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-[#FF9900] text-white px-8 py-4 rounded-none font-black flex items-center justify-center space-x-3 shadow-xl shadow-[#FF9900]/20 hover:scale-[1.02] transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>View on Amazon</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-regil-green text-white px-8 py-4 rounded-none font-black flex items-center justify-center space-x-3 shadow-xl shadow-regil-green/20 hover:scale-[1.02] transition-all"
                >
                  <WhatsApp className="w-5 h-5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center">
                  <ClipboardList className="w-5 h-5 mr-2 text-regil-blue" /> Machine Specs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-regil-green mt-0.5" />
                      <span className="text-sm font-bold text-slate-600">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-none border border-slate-200 flex items-center space-x-6 group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-regil-sky/10 rounded-none flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-8 h-8 text-regil-blue" />
            </div>
            <div>
              <h4 className="font-black text-slate-900">2 Year Warranty</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Full Support</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-none border border-slate-200 flex items-center space-x-6 group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-regil-sky/10 rounded-none flex items-center justify-center group-hover:scale-110 transition-transform">
              <Settings className="w-8 h-8 text-regil-blue" />
            </div>
            <div>
              <h4 className="font-black text-slate-900">Maintenance kit</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Free for 1st Year</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-none border border-slate-200 flex items-center space-x-6 group hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-regil-sky/10 rounded-none flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-8 h-8 text-regil-blue" />
            </div>
            <div>
              <h4 className="font-black text-slate-900">Fast Deploy</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">48-Hour Setup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
