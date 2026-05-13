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
  ClipboardList,
  Star,
  Truck,
  ShieldAlert
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-regil-blue border-t-transparent animate-spin rounded-full" />
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fetching Technical Data...</p>
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
    <div className="min-h-screen bg-white pt-24 pb-20">
      <SEO 
        title={`${product.name} - RegilAqua Professional`} 
        description={product.description || ''}
        image={product.image || ''}
        type="product"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 border-b border-slate-100 pb-4">
          <Link to="/" className="hover:text-regil-blue transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-regil-blue transition-colors">Catalog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900">{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          {/* Left: Gallery (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="sticky top-32 space-y-6">
              <div className="relative aspect-square bg-slate-50 border border-slate-100 group overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-105"
                  />
                </AnimatePresence>
                
                {images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-all">
                    <button 
                      onClick={() => setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                      className="bg-white shadow-2xl p-4 rounded-none hover:bg-regil-blue hover:text-white transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={() => setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))}
                      className="bg-white shadow-2xl p-4 rounded-none hover:bg-regil-blue hover:text-white transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-6 gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={cn(
                      "aspect-square border-2 p-2 bg-slate-50 transition-all",
                      currentImageIndex === idx ? "border-regil-blue bg-white shadow-lg" : "border-transparent opacity-50 hover:opacity-100"
                    )}
                  >
                    <img src={img} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Product Info (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-regil-orange">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Industrial Grade Certified</span>
              </div>
              
              <h1 className="text-4xl xl:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
                {product.name}
              </h1>

              <div className="flex items-baseline space-x-4 mb-8 border-b border-slate-100 pb-8">
                <span className="text-4xl font-black text-slate-900 tracking-tight">
                  {product.price || 'Contact for Quote'}
                </span>
                <span className="text-regil-green text-[10px] font-black uppercase tracking-widest flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Ready to Ship
                </span>
              </div>

              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                {product.description}
              </p>

              {/* Action Hub */}
              <div className="space-y-4 mb-12">
                <a
                  href={product.amazonUrl || "https://www.amazon.in"}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#FF9900] text-white px-8 py-5 font-black flex items-center justify-center space-x-4 shadow-xl shadow-[#FF9900]/20 hover:scale-[1.01] transition-all uppercase tracking-widest text-xs"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Buy on Amazon India</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white border-2 border-slate-900 text-slate-900 px-8 py-5 font-black flex items-center justify-center space-x-4 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-xs"
                >
                  <WhatsApp className="w-5 h-5" />
                  <span>Technical Consultation</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-none overflow-hidden mb-12">
                {[
                  { icon: <Truck />, label: 'Delivery', val: 'Pan-AP Support' },
                  { icon: <ShieldCheck />, label: 'Warranty', val: '2-Year Direct' },
                  { icon: <Zap />, label: 'Installation', val: 'Certified Setup' },
                  { icon: <Activity />, label: 'Monitoring', val: 'IoT Enabled' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5 flex items-center space-x-4">
                    <div className="text-regil-blue shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-[10px] font-black text-slate-900 uppercase">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Specs Table */}
              <div className="space-y-6">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] flex items-center border-b border-slate-900 pb-3">
                  <ClipboardList className="w-4 h-4 mr-2" />
                  Technical Parameters
                </h4>
                <div className="space-y-3">
                  {specs.map((spec, i) => {
                    const [key, ...valParts] = spec.split(' ');
                    return (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{key}</span>
                        <span className="text-slate-900 font-black tracking-tight">{valParts.join(' ')}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Engineering Grid */}
        <div className="mt-32 pt-20 border-t border-slate-100">
           <div className="mb-16">
              <span className="text-regil-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block text-center">Engineering Excellence</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter text-center italic">Inside the System.</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feat, i) => (
                <div key={i} className="p-10 bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="w-12 h-12 bg-white flex items-center justify-center mb-8 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-regil-blue" />
                  </div>
                  <h4 className="text-[10px] font-black text-regil-blue uppercase tracking-widest mb-4">{feat.label}</h4>
                  <p className="text-xl font-black text-slate-900 tracking-tight leading-tight">{feat.value}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Security / Quality Disclaimer */}
        <div className="mt-32 p-12 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="flex items-center space-x-6">
              <ShieldAlert className="w-12 h-12 text-regil-orange animate-pulse" />
              <div>
                <h3 className="text-xl font-black mb-1 italic">Quality Assurance Guarantee</h3>
                <p className="text-slate-400 text-sm font-medium max-w-md">Every unit undergoes a 48-hour pressure and TDS calibration test before dispatch to ensure zero-defect installation at your site.</p>
              </div>
           </div>
           <Link to="/contact" className="bg-white text-slate-900 px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-regil-sky hover:text-white transition-all shadow-2xl">
              Download Technical Sheet
           </Link>
        </div>
      </div>
    </div>
  );
}
