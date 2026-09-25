import React, { useState } from 'react';
import { Sparkles, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

export const ProposalBanner: React.FC = () => {
  const [minimized, setMinimized] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);

  return (
    <>
      {/* Top Floating Proposal Badge */}
      <div className="fixed top-20 left-4 z-40 hidden sm:block">
        {!minimized ? (
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#182324]/90 border border-[#C59B27]/40 shadow-xl backdrop-blur-md text-xs text-[#EDE8DF] animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#E5C358] animate-pulse" />
            <span className="font-semibold text-[#E5C358]">Proposal Presentation:</span>
            <span className="text-stone-300">Lake Cookhouse Official Website</span>
            <button
              onClick={() => setShowGuideModal(true)}
              className="text-[#E5C358] hover:underline font-semibold ml-1 cursor-pointer flex items-center gap-0.5"
            >
              <span>View Guide</span>
              <ChevronRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setMinimized(true)}
              className="p-1 text-stone-400 hover:text-white rounded-full ml-1"
              aria-label="Minimize proposal badge"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setMinimized(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#182324]/90 border border-[#C59B27]/40 shadow-lg text-[11px] text-[#E5C358] hover:bg-[#243335] transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#E5C358]" />
            <span>Proposal Guide</span>
          </button>
        )}
      </div>

      {/* Guide Modal for the Restaurant Owner */}
      {showGuideModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setShowGuideModal(false)}
        >
          <div
            className="relative w-full max-w-xl bg-[#141C1D] border border-[#2D3E40] rounded-2xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowGuideModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1C2627] text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#E5C358] font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Lake Cookhouse Client Presentation</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Website Proposal Architecture
            </h3>

            <p className="text-xs sm:text-sm text-[#EDE8DF]/80 font-light leading-relaxed mb-6">
              This interactive proposal showcases the high-end digital presence crafted for Lake Cookhouse. Built to captivate guests and convert casual visitors into table bookings.
            </p>

            <div className="space-y-3 mb-6 text-xs text-[#EDE8DF]/85">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#182223] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#E5C358] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Uploaded Brand Logo Integrated:</strong> The vector emblem and classic typography have been carefully preserved.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#182223] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#E5C358] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Strict Placeholder Integrity:</strong> In accordance with instructions, menu prices (&ldquo;M XX&rdquo;), address, telephone, opening hours, and testimonials are marked placeholders ready for your real data.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#182223] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#E5C358] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Direct Conversion Funnels:</strong> Online Table Booking Calendar &rarr; WhatsApp Floating Contact &rarr; Digital Menu &rarr; Facebook Page.
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowGuideModal(false)}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#C59B27] to-[#D4AF37] text-[#0F1415] hover:brightness-110"
              >
                Continue Exploring Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
