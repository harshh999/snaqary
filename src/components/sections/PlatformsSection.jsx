import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PLATFORMS = [
  { name: 'Amazon', src: '/images/platforms/amazon.png' },
  { name: 'Blinkit', src: '/images/platforms/blinkit.png' },
  { name: 'Zepto', src: '/images/platforms/zepto.png' },
  { name: 'Flipkart', src: '/images/platforms/flipkart.png' },
  { name: 'Swiggy Instamart', src: '/images/platforms/swiggy_instamart.png' },
];

export const PlatformsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Heading reveal on scroll
        gsap.from(titleRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        });

        // Logos stagger into view
        gsap.from(logosRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: logosRef.current,
            start: 'top 85%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-12 border-t border-[#191817]/6 bg-[#FAF8F5] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        <h2 
          ref={titleRef}
          className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#191817] mb-8 sm:mb-12"
        >
          FIND US ON YOUR FAVOURITE PLATFORMS
        </h2>

        <div 
          ref={logosRef}
          className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6 sm:gap-8 md:gap-4"
        >
          {PLATFORMS.map((platform) => (
            <div 
              key={platform.name}
              className="flex items-center justify-center cursor-pointer p-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={platform.src}
                alt={`${platform.name} logo`}
                className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain max-w-[120px] sm:max-w-[150px] md:max-w-[170px] lg:max-w-[200px] mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
