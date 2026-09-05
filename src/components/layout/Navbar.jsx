import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

export const Navbar = ({ currentPath, onNavigate }) => {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP entrance on mount
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-4 sm:top-6 inset-x-0 z-40 px-4 sm:px-6 pointer-events-none"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Main Floating Capsule */}
          <nav
            className={`w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#191817]/10'
                : 'bg-[#FAF8F5]/70 backdrop-blur-sm border border-[#191817]/6'
            }`}
          >
            {/* Left: Brand Logo */}
            <button
              onClick={() => handleLinkClick('/')}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="w-7 h-7 rounded-full bg-[#191817] flex items-center justify-center text-[#FAF8F5] transition-transform duration-300 group-hover:scale-105">
                <span className="font-editorial text-xs font-bold tracking-tighter">S</span>
              </div>
              <span className="font-editorial text-lg tracking-tight font-bold text-[#191817]">
                snaqary
              </span>
            </button>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-[#191817]/[0.03] p-1 rounded-full border border-[#191817]/5">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'bg-[#191817] text-[#FAF8F5] shadow-xs'
                        : 'text-[#6E6B65] hover:text-[#191817] hover:bg-[#191817]/5'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Right: Cart Button & Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={openCart}
                className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191817] text-[#FAF8F5] hover:bg-[#2A2926] transition-all duration-200 shadow-xs"
                aria-label="Open Cart"
              >
                <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                <span className="text-xs font-medium tracking-wider uppercase hidden xs:inline">
                  Cart
                </span>
                <span className="inline-flex items-center justify-center px-1.5 py-0.2 text-[11px] font-bold rounded-full bg-[#FAF8F5] text-[#191817]">
                  {totalItems}
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full text-[#191817] hover:bg-[#191817]/5 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF8F5]/98 backdrop-blur-xl flex flex-col justify-between p-6 pt-28 md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-semibold tracking-widest text-[#6E6B65] uppercase">
              Navigation
            </span>
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="flex items-center justify-between text-left py-3 border-b border-[#191817]/8 text-2xl font-editorial font-bold text-[#191817] hover:text-[#C85A32] transition-colors"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#6E6B65]" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#191817]/10 flex flex-col gap-3 text-xs text-[#6E6B65]">
            <p className="font-medium text-[#191817]">Snaqary Mumbai Studio</p>
            <p>Thoughtfully crafted Indian snacks made for everyday cravings.</p>
            <div className="flex items-center gap-4 pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#191817]">
                © 2026 Snaqary FMCG Pvt Ltd
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
