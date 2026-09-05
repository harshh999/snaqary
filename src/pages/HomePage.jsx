import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { StorySection } from '../components/sections/StorySection';
import { FeaturedProductsSection } from '../components/sections/FeaturedProductsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { GoodieSection } from '../components/sections/GoodieSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

export const HomePage = ({ onNavigate }) => {
  return (
    <main className="w-full">
      {/* 1. Full-bleed Image-led Editorial Hero */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Our Story */}
      <StorySection onNavigate={onNavigate} />

      {/* 3. Featured Campaign Products */}
      <FeaturedProductsSection onNavigate={onNavigate} />

      {/* 4. Loved by 5+ Lakh Snackers Testimonial Marquee */}
      <TestimonialsSection />

      {/* 5. Goodie Section (Free Ceramic Plate) */}
      <GoodieSection onNavigate={onNavigate} />

      {/* 6. Final CTA */}
      <FinalCTASection onNavigate={onNavigate} />
    </main>
  );
};
