import React, { useState } from 'react';
import { Users, Heart, Sparkles, ArrowRight, X, CalendarCheck } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenBooking: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenBooking }) => {
  const [selectedExperience, setSelectedExperience] = useState<{
    title: string;
    description: string;
    detail: string;
  } | null>(null);

  const experiences = [
    {
      id: 'family',
      icon: Users,
      title: 'Family Dining',
      description: 'A welcoming place for families and friends.',
      detail: 'Spacious outdoor and indoor seating with comforting meals for all ages, high chairs, friendly service, and a relaxed environment where everyone can feel right at home.',
      accent: '#5B928E',
    },
    {
      id: 'romantic',
      icon: Heart,
      title: 'Romantic Dining',
      description: 'A beautiful atmosphere for special evenings.',
      detail: 'Golden hour sunsets over the water, intimate candlelit tables, fine wine, and serene lake breezes make Lake Cookhouse the ultimate destination for date nights and romantic dinners.',
      accent: '#F2AC88',
    },
    {
      id: 'celebrations',
      icon: Sparkles,
      title: 'Celebrations',
      description: 'Perfect for birthdays, anniversaries, gatherings and private occasions.',
      detail: 'From milestone birthday banquets to anniversary toasts and year-end team gatherings, our team offers tailored group setups, custom menus, and dedicated hospitality.',
      accent: '#E5C358',
    },
  ];

  return (
    <section id="experience" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background with Dark Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/experience_sunset_celebration_1790313154745.jpg"
          alt="Atmospheric twilight lake dining experience with warm lights and reflections"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1415] via-[#0F1415]/85 to-[#0F1415]/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C358] font-semibold">
              The Experience
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-5">
            More Than Just a Meal
          </h2>

          <p className="text-base sm:text-lg text-[#EDE8DF]/90 font-light leading-relaxed max-w-2xl mx-auto text-balance">
            Whether you&apos;re enjoying a casual lunch, a romantic dinner, a family gathering or a special celebration, Lake Cookhouse creates the perfect setting for memorable moments.
          </p>
        </div>

        {/* Three Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                className="relative rounded-2xl p-8 bg-[#141C1D]/80 backdrop-blur-md border border-[#2D3E40] hover:border-[#3E8279] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Icon Emblem */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-md"
                    style={{ backgroundColor: `${exp.accent}18`, color: exp.accent }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-[#E5C358] transition-colors">
                    {exp.title}
                  </h3>

                  {/* Prompt Text Description */}
                  <p className="text-sm sm:text-base text-[#EDE8DF]/80 font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedExperience({
                      title: exp.title,
                      description: exp.description,
                      detail: exp.detail,
                    })}
                    className="text-xs text-[#E5C358] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-stone-300 hover:text-white bg-[#1A2526] hover:bg-[#244B46] transition-colors cursor-pointer"
                  >
                    Book Table
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#162122]/90 border border-[#2D3E40] flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md max-w-4xl mx-auto">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-serif font-bold text-white mb-1">
              Planning a Special Occasion or Group Event?
            </h4>
            <p className="text-xs sm:text-sm text-[#EDE8DF]/75 font-light">
              We cater for birthday celebrations, engagements, family banquets, and corporate dinners.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#C59B27] to-[#D4AF37] text-[#0F1415] hover:brightness-110 shadow-lg active:scale-95"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Inquire for Event</span>
          </button>
        </div>
      </div>

      {/* Experience Details Modal */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="relative w-full max-w-md bg-[#141C1D] border border-[#2D3E40] rounded-2xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#1C2627] text-stone-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs uppercase tracking-widest text-[#E5C358] font-semibold">
              Dining Experience
            </span>

            <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-3">
              {selectedExperience.title}
            </h3>

            <p className="text-sm font-medium text-[#EDE8DF] mb-4">
              &ldquo;{selectedExperience.description}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#EDE8DF]/75 leading-relaxed font-light mb-6">
              {selectedExperience.detail}
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedExperience(null)}
                className="px-4 py-2 rounded-full text-xs font-medium text-stone-300 bg-[#1A2325]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedExperience(null);
                  onOpenBooking();
                }}
                className="px-5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#C59B27] to-[#D4AF37] text-[#0F1415]"
              >
                Book for {selectedExperience.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
