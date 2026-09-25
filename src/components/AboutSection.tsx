import React, { useState } from 'react';
import { Utensils, Waves, Heart, ArrowRight, X, Sparkles, Clock, MapPin, CheckCircle } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  const features = [
    {
      icon: Utensils,
      title: 'Delicious Food',
      description: 'Freshly prepared meals made for memorable dining experiences.',
      accent: '#E5C358',
    },
    {
      icon: Waves,
      title: 'Beautiful Atmosphere',
      description: 'Enjoy your meal surrounded by a relaxing lakeside environment.',
      accent: '#5B928E',
    },
    {
      icon: Heart,
      title: 'Warm Hospitality',
      description: 'Friendly service designed to make every visit special.',
      accent: '#F2AC88',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0F1415] overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#244B46]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Restaurant / Food Imagery (Col 1-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="absolute -inset-4 rounded-3xl border border-[#2D3E40]/50 -rotate-1 pointer-events-none" />
              
              {/* Main photograph */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/patio.jpg"
                  alt="Lake Cookhouse Authentic Outdoor Patio and Dining Terrace"
                  className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/bg.jpg';
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Floating caption badge on the image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0F1415]/85 backdrop-blur-md border border-[#2D3E40] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#244B46] flex items-center justify-center text-[#E5C358]">
                      <Waves className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Lakeside Setting</h4>
                      <p className="text-xs text-[#EDE8DF]/70">Pure serenity by the water</p>
                    </div>
                  </div>
                  <span className="text-xs font-serif italic text-[#E5C358]">Open for lunch & dinner</span>
                </div>
              </div>

              {/* Decorative side accent card */}
              <div className="hidden sm:flex absolute -top-5 -right-5 p-3.5 rounded-xl bg-[#182324] border border-[#2D3E40] shadow-xl items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#E5C358]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#EDE8DF]">
                  Lake Dining Proposal
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Feature Items (Col 7-12) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Quiet category kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E5C358] font-semibold">
                About Lake Cookhouse
              </span>
              <span className="w-8 h-[1px] bg-[#E5C358]/50" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
              A Place to Eat, Relax & Connect
            </h2>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-[#EDE8DF]/80 font-light leading-relaxed mb-6">
              Nestled along the scenic waterfront, <strong>Lake Cookhouse</strong> was created as a sanctuary for those who appreciate good food, natural beauty, and heartfelt hospitality. We blend thoughtfully prepared dishes with a tranquil lakeside atmosphere, creating an inviting space where friends, couples, and families come together to unwind and celebrate life's moments.
            </p>

            <p className="text-sm sm:text-base text-[#EDE8DF]/70 font-light leading-relaxed mb-8">
              Whether you are stopping by for a leisurely lunch bathed in golden sunlight, enjoying sunset cocktails as the water ripples, or sitting down to an intimate dinner under the stars, our team is dedicated to making every visit relaxing, delicious, and unforgettable.
            </p>

            {/* Three Feature Items */}
            <div className="grid grid-cols-1 gap-5 mb-10">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#161D1E] border border-[#253335] hover:border-[#336962] transition-colors group"
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1 group-hover:text-[#E5C358] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#EDE8DF]/70 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide bg-[#244B46] hover:bg-[#336962] text-white border border-[#3E8279]/50 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4 text-[#E5C358]" />
              </button>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide bg-transparent hover:bg-white/5 text-[#EDE8DF] border border-white/20 transition-all duration-200 cursor-pointer"
              >
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Discover More Story Modal */}
      {showStoryModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setShowStoryModal(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#141C1D] border border-[#2D3E40] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1C2627] text-stone-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#E5C358]">
              <Sparkles className="w-4 h-4" />
              <span>The Lake Cookhouse Story</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Where Flavours Meet The Water's Edge
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#EDE8DF]/80 font-light leading-relaxed mb-6">
              <p>
                Lake Cookhouse is designed around a simple, timeless concept: dining should be a celebration of both the palate and the senses. Our location provides an escape from everyday rush, allowing guests to savor wholesome recipes against an inspiring lakeside backdrop.
              </p>
              <p>
                From freshly grilled seafood and sizzling flame-seared steaks to vibrant appetizers and refreshing signature beverages, each dish is created with care. Our outdoor patio allows you to dine al fresco under sun umbrellas during the afternoon, or by candle lanterns when the stars reflect on the water at night.
              </p>
            </div>

            {/* Proposal note highlights */}
            <div className="bg-[#1B2527] rounded-xl p-4 border border-[#2B3B3C] mb-6">
              <h4 className="text-xs uppercase tracking-wider text-[#E5C358] font-semibold mb-2">
                Proposal Note for Lake Cookhouse Owner:
              </h4>
              <ul className="text-xs text-[#EDE8DF]/70 space-y-1.5 list-disc list-inside">
                <li>This narrative section is fully editable with your restaurant's founding journey.</li>
                <li>Real photos of your physical lakefront property, dining hall, and chef will replace these placeholders.</li>
                <li>Highlights can be tailored to match your specific offerings (e.g., weekend buffets, live music nights, private lake cruises).</li>
              </ul>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowStoryModal(false)}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-stone-300 hover:text-white bg-[#1A2325]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowStoryModal(false);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-[#C59B27] to-[#D4AF37] text-[#0F1415] hover:brightness-110"
              >
                Book a Table Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
