import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ activePage, onPageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to style the header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'AI & Innovation', id: 'ai-innovation' },
    { name: 'Industries', id: 'industries' },
    { name: 'About Us', id: 'about' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      onPageChange(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            id="nav-logo"
            className="flex items-center space-x-2 group cursor-pointer focus:outline-none"
          >
            <div className="bg-blue-600 text-white w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center font-display font-extrabold text-lg sm:text-xl shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              S
            </div>
            <span className="font-display font-extrabold text-base sm:text-xl tracking-tight text-gray-900">
              SAINI <span className="text-blue-600">COLLECTION</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-7">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans font-semibold text-sm transition-colors py-1 cursor-pointer focus:outline-none relative ${
                  activePage === item.id ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span>{item.name}</span>
                {activePage === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              id="desktop-get-started-btn"
              className="inline-flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-sans font-semibold text-sm shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none"
            >
              <span>Get Proposal</span>
              <Rocket className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left block px-3 py-2.5 rounded-lg text-base font-bold transition-colors cursor-pointer ${
                    activePage === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 px-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  id="mobile-get-started-btn"
                  className="w-full text-center inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-sans font-bold text-base shadow-sm transition-colors cursor-pointer"
                >
                  <span>Get Proposal</span>
                  <Rocket className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
