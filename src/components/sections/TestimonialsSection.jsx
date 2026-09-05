import React from 'react';
import { TESTIMONIALS } from '../../data/brand';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-10 sm:py-14 border-t border-[#191817]/6 overflow-hidden bg-[#FAF8F5]">
      {/* Header with reduced bottom margin */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-6 sm:mb-8">
        <span className="text-[11px] font-bold tracking-widest text-[#C85A32] uppercase block mb-1.5">
          LOVED BY 5+ LAKH SNACKERS
        </span>
        <h2 className="font-editorial text-2xl sm:text-4xl font-bold tracking-tight text-[#191817] leading-tight">
          Loved by 5+ lakh snackers.
        </h2>
      </div>

      {/* Marquee with Left & Right Edge Fade Mask */}
      <div className="relative w-full mask-edge-fade overflow-hidden py-1">
        <div className="animate-marquee flex gap-5">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[300px] sm:w-[350px] shrink-0 p-5 rounded-2xl bg-[#F4F0E8] border border-[#191817]/8 flex flex-col justify-between shadow-2xs hover:border-[#191817]/20 transition-colors"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-[#191817] text-[#191817]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-[#191817] leading-relaxed font-normal mb-4">
                “{item.quote}”
              </p>

              {/* Author */}
              <div className="pt-3 border-t border-[#191817]/8 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#191817]">{item.author}</h4>
                  <p className="text-[10px] text-[#6E6B65]">{item.city}</p>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-white border border-[#191817]/6 text-[#4D5842]">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
