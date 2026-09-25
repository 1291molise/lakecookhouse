import React from 'react';
import { CalendarCheck, UtensilsCrossed, ChevronDown, Compass, Heart, Users, Sparkles } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreMenu }) => {
  const destinationHighlights = [
    { label: 'Scenic Dining', icon: Compass },
    { label: 'Relaxation & Dates', icon: Heart },
    { label: 'Family Meals', icon: Users },
    { label: 'Special Occasions', icon: Sparkles },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Photography with Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg.jpg"
          alt="Lake Cookhouse Authentic Outdoor Dining Patio and Terrace"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1415] via-[#0F1415]/80 to-[#0F1415]/65" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#336962]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#182324]/80 border border-[#2D3E40]/80 backdrop-blur-md mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#E5C358] animate-ping" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#E5C358] font-medium">
            Lakeside Dining & Culinary Destination
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-[0.08em] leading-tight mb-4 drop-shadow-md">
          {RESTAURANT_CONFIG.name.toUpperCase()}
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#E5C358] max-w-3xl mb-6 leading-relaxed">
          {RESTAURANT_CONFIG.tagline}
        </p>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#EDE8DF]/90 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          {RESTAURANT_CONFIG.heroDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold tracking-wide bg-gradient-to-r from-[#C59B27] via-[#D4AF37] to-[#C59B27] text-[#0F1415] hover:brightness-110 shadow-xl shadow-[#C59B27]/25 transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5 text-[#0F1415]" />
            <span>Book a Table</span>
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-medium tracking-wide bg-[#1A2325]/80 hover:bg-[#253335] text-white border border-[#3E8279]/50 backdrop-blur-md transition-all duration-200 cursor-pointer hover:border-[#E5C358]/60"
          >
            <UtensilsCrossed className="w-5 h-5 text-[#E5C358]" />
            <span>Explore Our Menu</span>
          </button>
        </div>

        {/* Destination Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pt-6 border-t border-white/10 w-full max-w-3xl">
          {destinationHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 text-xs md:text-sm text-[#EDE8DF]/80 font-medium py-1"
              >
                <Icon className="w-4 h-4 text-[#E5C358] shrink-0" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer group"
        aria-label="Scroll down to About section"
      >
        <span className="text-[11px] uppercase tracking-widest text-[#EDE8DF]/60 group-hover:text-[#E5C358] transition-colors">
          Explore
        </span>
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E5C358] transition-colors">
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </a>
    </section>
  );
};
