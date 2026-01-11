import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="container h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="GDK Global" className="h-12 w-auto object-contain" />
          <span className="text-xl font-bold font-heading text-text-primary tracking-tight">
            GDK Global<span className="text-accent-primary">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#capabilities" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Capabilities
          </a>
          <Link to="/about" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Company
          </Link>
          <a href="#contact" className="px-5 py-2.5 text-sm font-semibold text-white bg-accent-primary rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-text-primary">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container py-8 flex flex-col gap-6">
              <a href="/#capabilities" onClick={() => setIsOpen(false)} className="text-xl font-medium text-text-primary">
                Capabilities
              </a>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-medium text-text-primary">
                Company
              </Link>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-medium text-text-primary">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
