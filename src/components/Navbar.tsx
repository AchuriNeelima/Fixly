import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavbarScroll } from '../hooks';

export default function Navbar() {
  const scrolled = useNavbarScroll();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Demo', href: '#demo' },
    { label: 'Why now', href: '#why-now' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-fixly-light-border shadow-sm'
          : 'bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-fixly-accent mr-2"></span>
              <span className="text-xl font-bold text-fixly-text-primary">Fixly</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-fixly-text-secondary hover:text-fixly-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#demo"
              onClick={(e) => handleLinkClick(e, '#demo')}
              className="text-sm font-medium bg-fixly-dark text-white px-5 py-2.5 rounded-lg hover:bg-fixly-dark/90 transition-colors"
            >
              Try Fixly
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-fixly-text-primary hover:text-fixly-text-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-fixly-light-border shadow-lg lg:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block py-3 text-base font-medium text-fixly-text-secondary hover:text-fixly-text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-fixly-light-border">
                <a
                  href="#demo"
                  onClick={(e) => handleLinkClick(e, '#demo')}
                  className="block w-full text-center text-base font-medium bg-fixly-dark text-white px-5 py-3 rounded-lg hover:bg-fixly-dark/90 transition-colors"
                >
                  Try Fixly
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
