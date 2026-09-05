import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';
import { GOODIE_REWARD } from '../../data/brand';

export const GoodieSection = ({ onNavigate }) => {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#191817]/6">
      <div className="rounded-2xl sm:rounded-3xl bg-[#EFEBE3] border border-[#191817]/8 p-6 sm:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column: Visual of Plate */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-md bg-white border border-[#191817]/8">
              <img
                src={GOODIE_REWARD.image}
                alt="Snaqary Handcrafted Ceramic Snack Plate"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 glass-capsule px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                <Gift className="w-3 h-3 text-[#4D5842]" />
                <span className="text-[9px] font-bold tracking-widest uppercase text-[#191817]">
                  Complimentary Gift
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-[11px] font-bold tracking-widest text-[#C85A32] uppercase block mb-2">
              A LITTLE EXTRA
            </span>

            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#191817] leading-tight mb-3">
              A little extra with every bigger order.
            </h2>

            <p className="text-sm text-[#6E6B65] leading-relaxed mb-4 font-normal">
              Get a Snaqary ceramic plate free on orders above ₹500. Handcrafted stoneware with organic raw rims and debossed insignia, made in collaboration with independent artisans.
            </p>

            <div className="bg-white/70 backdrop-blur-xs rounded-xl p-3.5 border border-[#191817]/6 mb-5 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#191817] block">
                  Snaqary Ceramic Plate (₹399 Value)
                </span>
                <span className="text-[11px] text-[#6E6B65]">
                  Automatically added at checkout when your cart reaches ₹500
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#4D5842] text-white text-[10px] font-bold">
                FREE
              </span>
            </div>

            <div>
              <button
                onClick={() => onNavigate('/products')}
                className="px-6 py-2.5 rounded-full bg-[#191817] text-[#FAF8F5] text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-[#2A2926] transition-all group shadow-sm"
              >
                <span>Shop & get the goodie</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
