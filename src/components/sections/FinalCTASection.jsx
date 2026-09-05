import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FinalCTASection = ({ onNavigate }) => {
  return (
    <section className="py-12 sm:py-18 px-4 sm:px-8 max-w-4xl mx-auto text-center border-t border-[#191817]/6">
      <div className="space-y-4">
        <span className="text-[11px] font-bold tracking-widest text-[#C85A32] uppercase block">
          READY TO SNACK BETTER?
        </span>

        <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#191817] leading-tight max-w-xl mx-auto">
          Your next snack is sorted.
        </h2>

        <p className="text-sm sm:text-base text-[#6E6B65] max-w-md mx-auto">
          Delivered fresh to your doorstep within 48 hours. Orders above ₹500 receive our complimentary ceramic snack plate.
        </p>

        <div className="pt-2 flex flex-col xs:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('/products')}
            className="w-full xs:w-auto px-7 py-3 rounded-full bg-[#191817] text-[#FAF8F5] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#2A2926] transition-all group shadow-sm"
          >
            <span>Shop products</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => onNavigate('/about')}
            className="w-full xs:w-auto px-7 py-3 rounded-full border border-[#191817]/15 text-[#191817] text-xs font-bold tracking-wider uppercase hover:bg-[#191817]/5 transition-all"
          >
            Explore Snaqary
          </button>
        </div>
      </div>
    </section>
  );
};
