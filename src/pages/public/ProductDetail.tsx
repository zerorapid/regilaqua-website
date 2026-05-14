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
import { Product } from '../../types';
import { cn } from '../../lib/utils';
import SEO from '../../components/SEO';
import { useSettings } from '../../context/SettingsContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const { settings } = useSettings();

  React.useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      if (id) {
        try {
          const p = await productService.getProductById(id);
          if (p) {
            setProduct(p);
            setCurrentImageIndex(0);
          } else {
            console.warn('Product not found, redirecting...');
            navigate('/products');
          }
        } catch (error) {
          console.error('Error loading product:', error);
          navigate('/products');
        } finally {
          setLoading(false);
        }
      }
    };
    loadProduct();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-regil-blue border-t-transparent animate-spin rounded-full" />
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Loading Quality...</p>
        </div>
      </div>
    );
  }

  if (!product) return null;

  const images = (product.images && product.images.length > 0) ? product.images : [product.image];
  const specs = product.specs || [];
  const features = product.features || [];
  const whatsappUrl = `https://wa.me/${settings?.whatsappNumber || ''}?text=Hi, I'm interested in the ${product.name}. Please share more details.`;

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <SEO 
        title={product.name} 
        description={product.description || ''}
        image={product.image || ''}
        type="product"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] mb-12 text-slate-400">
          <Link to="/" className="hover:text-regil-blue transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-regil-blue transition-colors">Catalog</Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Left: Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-square bg-slate-50 border border-slate-100 rounded-none overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-contain p-12"
                />
              </AnimatePresence>
              
              {images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="bg-white shadow-2xl p-4 rounded-none hover:bg-regil-blue hover:text-white transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="bg-white shadow-2xl p-4 rounded-none hover:bg-regil-blue hover:text-white transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={cn(
                      "w-24 aspect-square shrink-0 rounded-none overflow-hidden border-2 transition-all p-2 bg-slate-50",
                      currentImageIndex === idx ? "border-regil-blue ring-4 ring-regil-blue/10" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-regil-sky/10 text-regil-blue text-[10px] font-black uppercase tracking-widest mb-4 border border-regil-sky/20">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-2 text-regil-green font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified RigelAqua Genuine Product</span>
                </div>
              </div>

              <div className="mb-10 p-8 bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Estimated Market Price</p>
                <div className="text-4xl font-black text-slate-900 mb-2">{product.price || 'Contact for Price'}</div>
                <p className="text-xs text-slate-500 font-medium">*Prices may vary based on site requirements and TDS levels.</p>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex flex-col gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-regil-green text-white py-5 rounded-none font-black flex items-center justify-center space-x-3 shadow-xl shadow-regil-green/20 hover:bg-regil-green/90 transition-all text-sm uppercase tracking-widest"
                  >
                    <WhatsApp className="w-5 h-5" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                  <a
                    href={product.amazonUrl || "https://www.amazon.in"}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-slate-900 text-white py-5 rounded-none font-black flex items-center justify-center space-x-3 shadow-xl hover:bg-regil-blue transition-all text-sm uppercase tracking-widest"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>View on Marketplace</span>
                  </a>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Product Description</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {features.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Features</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {features.map((feat, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <Zap className="w-4 h-4 text-regil-orange mt-0.5" />
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{feat.label}</p>
                            <p className="text-sm font-black text-slate-800">{feat.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        {specs.length > 0 && (
          <div className="border-t border-slate-100 pt-20">
            <h3 className="text-2xl font-black text-slate-900 mb-12 tracking-tight flex items-center">
              <Settings className="w-6 h-6 mr-3 text-regil-blue" />
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
              {specs.map((spec, i) => (
                <div key={i} className="flex justify-between py-4 border-b border-slate-50 items-center group">
                  <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">{spec.split(' ')[0]}</span>
                  <span className="text-slate-900 font-black text-sm group-hover:text-regil-blue transition-colors text-right">
                    {spec.split(' ').slice(1).join(' ') || spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

    </div>
  );
}
