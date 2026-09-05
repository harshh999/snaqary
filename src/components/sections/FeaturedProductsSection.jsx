import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_CAMPAIGN_PRODUCTS } from '../../data/products';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FeaturedProductsSection = ({ onNavigate }) => {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // First card: Enters decisively from the right (x: 80 -> 0, 0.75s, power3.out, scrub: false)
      if (card1Ref.current) {
        gsap.fromTo(
          card1Ref.current,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card1Ref.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Second card: Enters decisively from the left (x: -80 -> 0, 0.75s, power3.out, scrub: false)
      if (card2Ref.current) {
        gsap.fromTo(
          card2Ref.current,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card2Ref.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#191817]/6"
    >
      {/* Section Heading */}
      <div className="max-w-xl mb-8 sm:mb-10">
        <span className="text-[11px] font-bold tracking-widest text-[#C85A32] uppercase block mb-2">
          THE GOOD STUFF
        </span>
        <h2 className="font-editorial text-2xl sm:text-4xl font-bold tracking-tight text-[#191817] leading-tight mb-2">
          Our most premium snacks.
        </h2>
        <p className="text-sm text-[#6E6B65]">
          Made for the cravings that deserve a little more.
        </p>
      </div>

      {/* Two Large Editorial Feature Blocks with Fast Directional Reveals */}
      <div className="space-y-8 sm:space-y-10">
        {/* Card 1: Stuffed Khakhra (Enters from Right) */}
        {FEATURED_CAMPAIGN_PRODUCTS[0] && (
          <div
            ref={card1Ref}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-[#F4F0E8] overflow-hidden border border-[#191817]/8 transition-all duration-300 hover:shadow-xl"
            onClick={() => onNavigate('/products')}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Media Block */}
              <div className="lg:col-span-7 overflow-hidden relative aspect-16/10 sm:aspect-16/9 bg-[#FAF8F5]">
                <img
                  src={FEATURED_CAMPAIGN_PRODUCTS[0].image}
                  alt={FEATURED_CAMPAIGN_PRODUCTS[0].name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-4 left-4 glass-capsule px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#191817]">
                    {FEATURED_CAMPAIGN_PRODUCTS[0].badge}
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#6E6B65] uppercase block mb-2">
                    {FEATURED_CAMPAIGN_PRODUCTS[0].eyebrow}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#191817] mb-3 group-hover:text-[#C85A32] transition-colors">
                    {FEATURED_CAMPAIGN_PRODUCTS[0].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6B65] leading-relaxed mb-5">
                    {FEATURED_CAMPAIGN_PRODUCTS[0].description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-bold tracking-wider text-[#191817] uppercase block">
                      Signature Pairings:
                    </span>
                    {FEATURED_CAMPAIGN_PRODUCTS[0].flavours.map((flavour) => (
                      <div
                        key={flavour}
                        className="flex items-center gap-2 text-xs text-[#191817] font-medium bg-white/70 px-3 py-1 rounded-lg border border-[#191817]/5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4D5842]" />
                        <span>{flavour}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#191817]/8 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#191817] group-hover:translate-x-1 transition-transform">
                    Explore this creation
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#191817] text-[#FAF8F5] flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Card 2: Sticks with Dips (Enters from Left) */}
        {FEATURED_CAMPAIGN_PRODUCTS[1] && (
          <div
            ref={card2Ref}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-[#F4F0E8] overflow-hidden border border-[#191817]/8 transition-all duration-300 hover:shadow-xl"
            onClick={() => onNavigate('/products')}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Media Block (order-2 on desktop) */}
              <div className="lg:col-span-7 lg:order-2 overflow-hidden relative aspect-16/10 sm:aspect-16/9 bg-[#FAF8F5]">
                <img
                  src={FEATURED_CAMPAIGN_PRODUCTS[1].image}
                  alt={FEATURED_CAMPAIGN_PRODUCTS[1].name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-4 left-4 glass-capsule px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4D5842]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#191817]">
                    {FEATURED_CAMPAIGN_PRODUCTS[1].badge}
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="lg:col-span-5 lg:order-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#6E6B65] uppercase block mb-2">
                    {FEATURED_CAMPAIGN_PRODUCTS[1].eyebrow}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#191817] mb-3 group-hover:text-[#C85A32] transition-colors">
                    {FEATURED_CAMPAIGN_PRODUCTS[1].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6B65] leading-relaxed mb-5">
                    {FEATURED_CAMPAIGN_PRODUCTS[1].description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-bold tracking-wider text-[#191817] uppercase block">
                      Signature Pairings:
                    </span>
                    {FEATURED_CAMPAIGN_PRODUCTS[1].flavours.map((flavour) => (
                      <div
                        key={flavour}
                        className="flex items-center gap-2 text-xs text-[#191817] font-medium bg-white/70 px-3 py-1 rounded-lg border border-[#191817]/5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                        <span>{flavour}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#191817]/8 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#191817] group-hover:translate-x-1 transition-transform">
                    Explore this creation
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#191817] text-[#FAF8F5] flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
