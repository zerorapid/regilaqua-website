import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Smartphone as WhatsApp } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { useSettings } from '../context/SettingsContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { settings } = useSettings();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-regil-sky/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <Logo className="h-10 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-bold transition-colors hover:text-regil-blue",
                    isActive ? "text-regil-blue" : "text-slate-600"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href={`https://wa.me/${settings.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-regil-green text-white px-5 py-2.5 rounded-none text-sm font-black hover:scale-105 transition-all shadow-lg shadow-regil-green/20"
            >
              <WhatsApp className="w-4 h-4" />
              <span>Inquiry</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-blue-50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-3 rounded-none text-base font-black transition-colors",
                      isActive ? "bg-regil-sky/10 text-regil-blue" : "text-slate-600 hover:bg-slate-50"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href={`https://wa.me/${settings.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-regil-green text-white px-5 py-3 rounded-none text-base font-black shadow-lg shadow-regil-green/20"
              >
                <WhatsApp className="w-5 h-5" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
