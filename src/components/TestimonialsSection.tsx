import React from 'react';
import { TESTIMONIALS } from '../config/restaurantConfig';
import { Star, MessageSquareQuote, Edit3 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-28 bg-[#0F1415] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C358] font-semibold">
              Guest Feedback
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            What Our Guests Say
          </h2>

          <p className="text-base text-[#EDE8DF]/75 font-light leading-relaxed">
            Real guest satisfaction and feedback will be featured here once Lake Cookhouse begins welcoming patrons.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl p-8 bg-[#141C1D] border border-[#253335] hover:border-[#3E8279]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#244B46]/30 text-[#E5C358] flex items-center justify-center">
                    <MessageSquareQuote className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E5C358] text-[#E5C358]" />
                    ))}
                  </div>
                </div>

                {/* Review Body (Required exact placeholder: "Add customer testimonial here.") */}
                <div className="p-4 rounded-xl bg-[#1A2325]/70 border border-dashed border-[#3E8279]/40 mb-6">
                  <p className="text-sm sm:text-base italic text-[#EDE8DF]/90 font-serif leading-relaxed">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author & Placeholder tag */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {item.author}
                  </h4>
                  <span className="text-xs text-stone-400">
                    {item.title}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] text-[#E5C358] bg-[#1A2526] px-2 py-0.5 rounded">
                  <Edit3 className="w-3 h-3" />
                  <span>Editable</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proposal Info Badge for Owner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-400 max-w-md mx-auto">
            [Proposal Note: Easily linkable to Google Maps reviews, TripAdvisor, or Facebook customer testimonials with verified badges.]
          </p>
        </div>
      </div>
    </section>
  );
};
