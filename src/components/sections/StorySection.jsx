import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StorySection = ({ onNavigate }) => {
  const sectionRef = useRef(null);
  const textColRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textColRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textColRef.current,
          start: 'top 85%',
        },
      });

      gsap.fromTo(
        imageWrapperRef.current,
        { clipPath: 'inset(10% 0% 10% 0% round 18px)', opacity: 0 },
        {
          clipPath: 'inset(0% 0% 0% 0% round 18px)',
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#191817]/6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Editorial Copy */}
        <div ref={textColRef} className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-[11px] font-bold tracking-widest text-[#C85A32] uppercase block mb-2.5">
            OUR STORY
          </span>

          <h2 className="font-editorial text-2xl sm:text-4xl font-bold tracking-tight text-[#191817] leading-[1.14] mb-4">
            Good snacks shouldn't need an explanation.
          </h2>

          <p className="text-sm sm:text-base text-[#6E6B65] leading-relaxed mb-4 font-normal">
            Snaqary is built around a simple idea: make everyday snacking feel better. From familiar Indian flavours to thoughtfully crafted ingredients, every snack is made to be something you can reach for without overthinking it.
          </p>

          <p className="text-xs sm:text-sm text-[#6E6B65] leading-relaxed mb-6">
            We slow-roast on heavy cast-iron tavas instead of flash-frying in cheap palm oils. The result is pure, shatteringly crisp khakhra and puffs that satisfy real cravings.
          </p>

          {/* Value highlights */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#191817]/8 mb-6">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4D5842] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#191817]">100% Cast-Iron Roasted</h4>
                <p className="text-[11px] text-[#6E6B65]">Never deep-fried</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4D5842] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#191817]">Clean Ingredients</h4>
                <p className="text-[11px] text-[#6E6B65]">Zero palm oil</p>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => onNavigate('/about')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191817] hover:text-[#C85A32] transition-colors group"
            >
              <span>Read the full story</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column: Editorial Lifestyle Image */}
        <div className="lg:col-span-6">
          <div
            ref={imageWrapperRef}
            className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-[#191817]/8 bg-[#F4F0E8]"
          >
            <img
              src="/images/story_lifestyle.jpg"
              alt="Raw roasted millets, jowar, bajra, and whole spices"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 glass-capsule px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#191817]">
              Mumbai Studio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
