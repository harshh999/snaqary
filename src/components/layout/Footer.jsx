import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { BRAND_INFO } from '../../data/brand';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="border-t border-[#191817]/8 bg-[#F4F0E8] pt-20 pb-12 px-6 sm:px-12 text-[#191817]">
      <div className="max-w-6xl mx-auto">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#191817]/8">
          {/* Brand Manifesto Col */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#191817] flex items-center justify-center text-[#FAF8F5]">
                  <span className="font-editorial text-sm font-bold tracking-tighter">S</span>
                </div>
                <span className="font-editorial text-2xl font-bold tracking-tight text-[#191817]">
                  snaqary
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-editorial font-medium leading-relaxed max-w-md text-[#191817]">
                Better snacking, simply. Less palm oil, honest crunch, and familiar Indian flavours made modern.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs text-[#6E6B65]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#4D5842]" />
              <span>Roasted fresh in Mumbai • Available pan-India</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-bold tracking-widest text-[#6E6B65] uppercase mb-2">
              Explore
            </span>
            <button
              onClick={() => onNavigate('/')}
              className="text-left text-sm text-[#191817] hover:text-[#C85A32] transition-colors py-1 inline-flex items-center justify-between group"
            >
              <span>Home</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => onNavigate('/products')}
              className="text-left text-sm text-[#191817] hover:text-[#C85A32] transition-colors py-1 inline-flex items-center justify-between group"
            >
              <span>Our Snacks Menu</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => onNavigate('/about')}
              className="text-left text-sm text-[#191817] hover:text-[#C85A32] transition-colors py-1 inline-flex items-center justify-between group"
            >
              <span>The Story</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="text-left text-sm text-[#191817] hover:text-[#C85A32] transition-colors py-1 inline-flex items-center justify-between group"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Social & Studio info */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-bold tracking-widest text-[#6E6B65] uppercase mb-2">
              Studio & Connect
            </span>
            {BRAND_INFO.social.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="text-left text-sm text-[#191817] hover:text-[#C85A32] transition-colors py-1 inline-flex items-center justify-between group"
              >
                <span>{soc.name} ({soc.handle})</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-[#191817]/8 text-xs text-[#6E6B65] leading-relaxed">
              <p className="font-semibold text-[#191817]">Lower Parel Studio</p>
              <p>{BRAND_INFO.location.studio}</p>
            </div>
          </div>
        </div>

        {/* Bottom Micro Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6B65]">
          <p>© {new Date().getFullYear()} Snaqary Food & Beverages Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span>Clean Nutrition</span>
            <span>•</span>
            <span>FSSAI Certified</span>
            <span>•</span>
            <span>Crafted in Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
