import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = ({ onNavigate }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const bodyRef = useRef(null);
  const ctaRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Fast, elegant editorial reveal
      tl.fromTo(
        imageRef.current,
        { scale: 1.08, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.9, ease: 'power2.out' }
      );

      tl.fromTo(
        eyebrowRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.7'
      );

      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.hero-line');
        tl.fromTo(
          lines,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.12, ease: 'power3.out' },
          '-=0.45'
        );
      }

      tl.fromTo(
        bodyRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.35'
      );

      tl.fromTo(
        ctaRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45 },
        '-=0.3'
      );

      tl.fromTo(
        metaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      );

      // Subtle parallax on the background image while scrolling
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] max-h-[900px] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 px-6 sm:px-12 lg:px-16"
    >
      {/* Full-bleed Background Image Canvas */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img
          ref={imageRef}
          src="/images/hero_snack.jpg"
          alt="Snaqary healthy Indian snack platter with crisp khakhra, seeds, and dips"
          className="w-full h-full object-cover object-[70%_center] sm:object-[75%_center] lg:object-[82%_center] scale-105"
        />

        {/* Left-sided gentle warm cream gradient overlay to guarantee text readability */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#FAF8F5]/96 via-[#FAF8F5]/85 via-45% to-transparent sm:to-transparent pointer-events-none" />
        
        {/* Subtle bottom fade to blend with next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF8F5] to-transparent z-1 pointer-events-none" />
      </div>

      {/* Hero Content on the Left */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-[540px] my-auto pt-6 sm:pt-10 text-left"
      >
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-[#191817]/8 text-[11px] font-bold tracking-widest text-[#6E6B65] uppercase mb-5 shadow-2xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
          <span>BETTER SNACKING, SIMPLY.</span>
        </div>

        {/* Large Editorial Headline */}
        <h1
          ref={headlineRef}
          className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#191817] leading-[1.08] mb-5 overflow-hidden"
        >
          <div className="overflow-hidden">
            <span className="hero-line block text-[#191817]">Taste bhi,</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-line block text-[#191817]">
              <span className="text-[#E0531B]">nutrition</span> bhi
            </span>
          </div>
        </h1>

        {/* Body Copy */}
        <p
          ref={bodyRef}
          className="text-sm sm:text-base text-[#6E6B65] leading-relaxed max-w-lg mb-7 font-normal"
        >
          Thoughtfully crafted Indian snacks made for everyday cravings — with better ingredients, less palm oil, and zero compromises on crunch.
        </p>

        {/* Compact CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => onNavigate('/products')}
            className="px-6 py-3 rounded-full bg-[#191817] text-[#FAF8F5] text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-[#2A2926] transition-all group shadow-sm"
          >
            <span>Shop snacks</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => onNavigate('/products')}
            className="px-6 py-3 rounded-full bg-white/70 backdrop-blur-xs border border-[#191817]/15 text-[#191817] text-xs font-bold tracking-wider uppercase hover:bg-white transition-all shadow-2xs"
          >
            Explore products
          </button>
        </div>
      </div>

      {/* Subtle Editorial Metadata Bar at Bottom of Hero */}
      <div
        ref={metaRef}
        className="relative z-10 pt-4 border-t border-[#191817]/10 flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#6E6B65]"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4D5842]" />
          <span>MUMBAI · INDIA</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span>BETTER INGREDIENTS</span>
          <span>·</span>
          <span>LESS PALM OIL</span>
          <span>·</span>
          <span>100% CAST-IRON ROASTED</span>
        </div>
        <div className="flex items-center gap-1.5 font-semibold text-[#191817]">
          <Sparkles className="w-3 h-3 text-[#C85A32]" />
          <span>EST. 2026</span>
        </div>
      </div>
    </section>
  );
};
