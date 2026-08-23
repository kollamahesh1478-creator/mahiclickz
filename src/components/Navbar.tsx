import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Send } from 'lucide-react';
import { MahiClickzLogo } from './MahiClickzLogo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenEnquiry: (servicePrefill?: string) => void;
  onOpenInquiriesLog?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenEnquiry,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Color Lab', href: '#color-lab' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Packages', href: '#packages' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#enquiry' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#08090A]/92 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-black/80'
            : 'bg-white/92 backdrop-blur-xl border-b border-amber-500/20 shadow-lg shadow-amber-500/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Rich Typography */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3.5 group py-1"
          >
            {/* Custom Mahi Clickz 3D Gold Camera Insignia Logo */}
            <div className="relative">
              <MahiClickzLogo variant="icon" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-rich font-black tracking-widest text-lg sm:text-xl uppercase gold-text-gradient drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
                  MAHI CLICKZ
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/10 text-amber-400 border border-amber-500/30 tracking-wider uppercase hidden xs:inline-block">
                  CREATIVES
                </span>
              </div>
              <span className={`text-[10px] tracking-wider uppercase font-semibold hidden sm:block ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Where every frame tells a captivating story
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest">
            {navLinks.map((link) => (
              <button
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className={`py-1.5 transition-all duration-200 cursor-pointer hover:scale-105 ${
                  darkMode
                    ? 'text-slate-300 hover:text-amber-400'
                    : 'text-slate-700 hover:text-amber-600'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-amber-500/40'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button: Book Enquiry */}
            <button
              id="navbar-enquiry-cta-btn"
              onClick={() => onOpenEnquiry()}
              className="flex items-center gap-1.5 sm:gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Get Quote</span>
              <span className="sm:hidden">Quote</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 ${
            darkMode
              ? 'bg-[#08090A]/98 border-amber-500/20 text-white'
              : 'bg-white/98 border-amber-500/20 text-slate-900'
          }`}
        >
          <div className="pb-2 border-b border-slate-800 text-xs font-semibold flex items-center justify-between">
            <span className="font-rich gold-text-gradient font-bold">MAHI CLICKZ &amp; CREATIVES</span>
            <span className="text-[10px] text-amber-400 font-medium">Studio Suite</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider ${
                  darkMode ? 'hover:bg-slate-900 text-slate-300' : 'hover:bg-slate-100 text-slate-800'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              id="mobile-get-quote-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Get Project Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

