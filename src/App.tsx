/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Products from './pages/public/Products';
import ProductDetail from './pages/public/ProductDetail';
import BlogList from './pages/public/BlogList';
import BlogPost from './pages/public/BlogPost';
import Admin from './pages/admin/Admin';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

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

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700">
          <Routes>
          {/* Main Layout Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <PageWrapper>
                  <Home />
                </PageWrapper>
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <PageWrapper>
                  <About />
                </PageWrapper>
                <Footer />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Navbar />
                <PageWrapper>
                  <Products />
                </PageWrapper>
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Navbar />
                <PageWrapper>
                  <ProductDetail />
                </PageWrapper>
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Navbar />
                <PageWrapper>
                  <BlogList />
                </PageWrapper>
                <Footer />
              </>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <>
                <Navbar />
                <PageWrapper>
                  <BlogPost />
                </PageWrapper>
                <Footer />
              </>
            }
          />

          {/* Admin Route (No generic Layout) */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  </HelmetProvider>
  );
}

