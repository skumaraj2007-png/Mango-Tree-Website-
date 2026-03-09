import { useState, useEffect } from 'react';
import { Leaf, Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Vibe', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Tips', href: '#essentials' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fafaf9]/80 backdrop-blur-md border-b border-stone-200 h-16' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Leaf className="text-green-700 group-hover:rotate-12 transition-transform duration-500" size={24} />
          <span className="text-2xl font-heritage font-bold tracking-wide text-stone-800 group-hover:text-green-700 transition-colors">MANGO TREE</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-green-700 transition-colors tracking-wide">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#location" className="text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors">Find Us</a>
          <a 
            href="https://wa.me/918088379983" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-stone-900 text-stone-50 px-6 py-3 rounded-full hover:bg-green-800 transition-all shadow-lg hover:shadow-green-900/20"
          >
            <span>Reserve</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-stone-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-stone-200 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-stone-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-stone-100" />
              <div className="flex flex-col gap-4">
                <a href="#location" className="text-sm font-bold uppercase tracking-wider text-stone-500">Find Us</a>
                <a 
                  href="https://wa.me/918088379983" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider bg-stone-900 text-stone-50 px-6 py-4 rounded-full"
                >
                  <span>Reserve</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
