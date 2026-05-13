import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Products from './pages/public/Products';
import ProductDetail from './pages/public/ProductDetail';
import BlogList from './pages/public/BlogList';
import BlogPost from './pages/public/BlogPost';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { SettingsProvider } from './context/SettingsContext';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function WebsiteApp() {
  return (
    <SettingsProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700">
        <Navbar />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageWrapper>
        <Footer />
      </div>
    </SettingsProvider>
  );
}
