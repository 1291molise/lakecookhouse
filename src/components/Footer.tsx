import React from 'react';
import { Logo } from './Logo';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import { Facebook, Instagram, MessageCircle, ArrowUp, Heart, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0A0E0F] text-[#EDE8DF] border-t border-[#1E2728] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/5 items-start">
          
          {/* Col 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo variant="horizontal" inverted={true} />
            </div>

            <p className="text-base sm:text-lg font-serif italic text-[#E5C358] max-w-sm">
              &ldquo;{RESTAURANT_CONFIG.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#EDE8DF]/70 font-light max-w-sm leading-relaxed">
              Experience freshly prepared food, refreshing beverages, and warm hospitality by the lake. Designed for dining, relaxing, romantic dates, family gatherings, and unforgettable celebrations.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#244B46] hover:bg-[#336962] text-white border border-[#3E8279]/50 transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E5C358]" />
                <span>Book a Table Online</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#E5C358] font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#EDE8DF]/75 hover:text-white hover:underline transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Proposal Information (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#E5C358] font-bold mb-3">
              Connect With Us
            </h4>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              {/* Facebook Button (Supplied URL) */}
              <a
                href={RESTAURANT_CONFIG.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#161D1E] border border-[#253335] text-white hover:text-[#1877F2] hover:border-[#1877F2] flex items-center justify-center transition-colors"
                aria-label="Lake Cookhouse on Facebook"
                title="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${RESTAURANT_CONFIG.social.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#161D1E] border border-[#253335] text-white hover:text-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-colors"
                aria-label="Lake Cookhouse on WhatsApp"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Instagram Button */}
              <a
                href={RESTAURANT_CONFIG.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#161D1E] border border-[#253335] text-white hover:text-[#E4405F] hover:border-[#E4405F] flex items-center justify-center transition-colors"
                aria-label="Lake Cookhouse on Instagram"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Proposal Note */}
            <div className="p-3.5 rounded-xl bg-[#12191A] border border-[#233133] text-xs text-stone-400 leading-relaxed font-light">
              <span className="text-[#E5C358] font-medium block mb-1">Website Presentation Proposal:</span>
              Structured to show the future digital presence for Lake Cookhouse. Real images, finalized prices, and operational hours will be connected seamlessly.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="text-center sm:text-left font-light">
            © 2026 {RESTAURANT_CONFIG.name}. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-[#E5C358] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
