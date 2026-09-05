import React, { useEffect, useRef } from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutPage = ({ onNavigate }) => {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });

      sectionsRef.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          y: 35,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full pt-24 sm:pt-28 pb-16 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Editorial Hero */}
      <div ref={heroRef} className="max-w-2xl mb-10 sm:mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#C85A32] uppercase block mb-2.5">
          ABOUT SNAQARY
        </span>
        <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#191817] leading-tight mb-4">
          Snacking, made a little smarter.
        </h1>
        <p className="text-base text-[#6E6B65] leading-relaxed font-normal">
          We started Snaqary to fix an everyday Indian paradox: why should reaching for a midday crunch require choosing between oily unlabelled farsan or soulless imported 'diet' crackers?
        </p>
      </div>

      {/* Editorial Imagery */}
      <div className="aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden shadow-md border border-[#191817]/8 mb-12 sm:mb-16 bg-[#F4F0E8]">
        <img
          src="/images/hero_snack.jpg"
          alt="Snaqary Mumbai Kitchen & Roasting Craft"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Structured Editorial Sections with Tight Spacing */}
      <div className="space-y-10 sm:space-y-14">
        {/* Section 1: The Idea */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-8 border-t border-[#191817]/8"
        >
          <div className="lg:col-span-4">
            <span className="text-xs font-mono text-[#6E6B65] uppercase tracking-widest block mb-1">
              01 / ORIGIN
            </span>
            <h2 className="font-editorial text-2xl font-bold text-[#191817]">
              The idea
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-3 text-sm sm:text-base text-[#6E6B65] leading-relaxed">
            <p>
              Snacks occupy more waking moments than breakfast or lunch. In India, chai time isn't an afterthought — it's a sacred daily pause. Yet the snacks we reached for had barely evolved: commercial packets pumped with cheap palm oil, hidden trans fats, and artificial flavor enhancers.
            </p>
            <p>
              We wanted to take Gujarat and Maharashtra's most celebrated heritage snack — the paper-thin, stone-roasted Khakhra — and celebrate its honest nutritional potential without cutting industrial corners.
            </p>
          </div>
        </div>

        {/* Section 2: What We Believe */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-8 border-t border-[#191817]/8"
        >
          <div className="lg:col-span-4">
            <span className="text-xs font-mono text-[#6E6B65] uppercase tracking-widest block mb-1">
              02 / PHILOSOPHY
            </span>
            <h2 className="font-editorial text-2xl font-bold text-[#191817]">
              What we believe
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <p className="text-sm sm:text-base text-[#6E6B65] leading-relaxed">
              We operate with a simple rule: <strong>Less, but better.</strong> Every seed, spice, and drop of oil must have a reason to exist on our label.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-[#F4F0E8] border border-[#191817]/6">
                <h4 className="text-xs font-bold text-[#191817] mb-1">Zero Palm Oil</h4>
                <p className="text-xs text-[#6E6B65]">
                  We strictly roast with expeller-pressed sesame and groundnut oils that respect your health.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F4F0E8] border border-[#191817]/6">
                <h4 className="text-xs font-bold text-[#191817] mb-1">Honest Crunch</h4>
                <p className="text-xs text-[#6E6B65]">
                  No chemical texture agents. The shatter comes from slow cast-iron tava baking.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F4F0E8] border border-[#191817]/6">
                <h4 className="text-xs font-bold text-[#191817] mb-1">Native Millets</h4>
                <p className="text-xs text-[#6E6B65]">
                  Ragi, Sorghum (Jowar), and Pearl millet (Bajra) form our core foundation.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F4F0E8] border border-[#191817]/6">
                <h4 className="text-xs font-bold text-[#191817] mb-1">Transparent Labels</h4>
                <p className="text-xs text-[#6E6B65]">
                  Clean, pronounceable ingredients with zero hidden fillers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Based in Mumbai */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-8 border-t border-[#191817]/8 items-center"
        >
          <div className="lg:col-span-4">
            <span className="text-xs font-mono text-[#6E6B65] uppercase tracking-widest block mb-1">
              03 / ROOTS
            </span>
            <h2 className="font-editorial text-2xl font-bold text-[#191817]">
              Based in Mumbai
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#EFEBE3] border border-[#191817]/8 relative overflow-hidden">
              <div className="flex items-center gap-2 text-[#C85A32] mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Lower Parel & Bhandup, Mumbai</span>
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#191817] mb-2">
                The pulse of maximum city in every bite.
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6B65] leading-relaxed mb-4">
                From our Pav Bhaji roasted khakhra to our zesty Pani Puri crisps, Mumbai’s street food poetry is in our DNA. We roast our snacks locally and ship pan-India.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-[#191817]">
                <span className="px-3 py-1 rounded-full bg-white/70 border border-[#191817]/6">Design Studio: Lower Parel</span>
                <span className="px-3 py-1 rounded-full bg-white/70 border border-[#191817]/6">Kitchen: Bhandup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Our Approach */}
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-8 border-t border-[#191817]/8"
        >
          <div className="lg:col-span-4">
            <span className="text-xs font-mono text-[#6E6B65] uppercase tracking-widest block mb-1">
              04 / CRAFT
            </span>
            <h2 className="font-editorial text-2xl font-bold text-[#191817]">
              Our approach
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-3 text-sm sm:text-base text-[#6E6B65] leading-relaxed">
            <p>
              We spend months on recipe formulations. When developing our Stuffed Khakhra series, we balanced the natural sweetness of Medjool date compote with fine cocoa powder so that it feels like an everyday luxury.
            </p>
            <div className="pt-3">
              <button
                onClick={() => onNavigate('/products')}
                className="px-6 py-3 rounded-full bg-[#191817] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:bg-[#2A2926] transition-colors"
              >
                <span>Explore the snacks menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
