import React, { useState } from 'react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import { MapPin, Phone, Mail, Clock, Navigation, Send, MessageCircle, ExternalLink, Sparkles, Check, Facebook } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#121819] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C358] font-semibold">
              Location & Enquiries
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Come Visit Lake Cookhouse
          </h2>

          <p className="text-base text-[#EDE8DF]/75 font-light leading-relaxed">
            We look forward to welcoming you to our lakeside tables. Reach out for table reservations, private event inquiries, or directions.
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Contact Details & Quick Message (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards */}
            <div className="rounded-2xl p-6 bg-[#161D1E] border border-[#253335] space-y-5 shadow-lg">
              
              {/* Address Placeholder */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#244B46]/30 text-[#E5C358] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    Address
                  </h4>
                  <p className="text-sm font-medium text-white">
                    {RESTAURANT_CONFIG.contact.addressPlaceholder}
                  </p>
                </div>
              </div>

              {/* Phone Placeholder */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#244B46]/30 text-[#E5C358] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    Phone
                  </h4>
                  <p className="text-sm font-medium text-white">
                    {RESTAURANT_CONFIG.contact.phonePlaceholder}
                  </p>
                </div>
              </div>

              {/* Email Placeholder */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#244B46]/30 text-[#E5C358] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    Email
                  </h4>
                  <p className="text-sm font-medium text-white">
                    {RESTAURANT_CONFIG.contact.emailPlaceholder}
                  </p>
                </div>
              </div>

              {/* Opening Hours Placeholder */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#244B46]/30 text-[#E5C358] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-sm font-medium text-white">
                    {RESTAURANT_CONFIG.contact.hoursPlaceholder}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons: Get Directions, WhatsApp Us, Follow Facebook */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const mapEl = document.getElementById('map-placeholder');
                    if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#244B46] hover:bg-[#336962] text-white border border-[#3E8279]/50 transition-colors shadow-sm cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#E5C358]" />
                  <span>Get Directions</span>
                </button>

                <a
                  href={`https://wa.me/${RESTAURANT_CONFIG.social.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-black transition-colors shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Follow Us On Facebook (Required URL) */}
              <a
                href={RESTAURANT_CONFIG.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#1877F2] hover:bg-[#166fe5] text-white transition-all shadow-md group cursor-pointer"
              >
                <Facebook className="w-4 h-4 fill-white" />
                <span>Follow us on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Quick Inquiry Form */}
            <div className="rounded-2xl p-6 bg-[#161D1E] border border-[#253335]">
              <h4 className="text-base font-serif font-bold text-white mb-3">
                Send Us a Quick Note
              </h4>

              {inquirySent ? (
                <div className="p-4 rounded-xl bg-[#244B46]/40 border border-[#3E8279] text-center">
                  <Check className="w-5 h-5 text-[#E5C358] mx-auto mb-1" />
                  <p className="text-xs text-white font-medium">
                    Thank you! Your message has been sent. We will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A2325] border border-[#2D3E40] text-xs text-white focus:outline-none focus:border-[#E5C358]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A2325] border border-[#2D3E40] text-xs text-white focus:outline-none focus:border-[#E5C358]"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      rows={3}
                      placeholder="Your message or special inquiry..."
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A2325] border border-[#2D3E40] text-xs text-white focus:outline-none focus:border-[#E5C358]"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[#244B46] hover:bg-[#336962] text-xs font-semibold text-white tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-[#E5C358]" />
                    <span>Contact Us</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Large Interactive Map Placeholder (7 cols) */}
          <div id="map-placeholder" className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-[#161D1E] border border-[#253335] shadow-2xl h-[460px] sm:h-[580px] flex flex-col justify-between">
              
              {/* Map Canvas Visual Simulation */}
              <div className="absolute inset-0 bg-[#121A1B] flex items-center justify-center overflow-hidden">
                {/* Simulated topo contours & lake water shape */}
                <svg
                  className="w-full h-full opacity-40"
                  viewBox="0 0 800 600"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <radialGradient id="waterGrad" cx="60%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#255450" />
                      <stop offset="100%" stopColor="#142B28" />
                    </radialGradient>
                  </defs>
                  {/* Landmass */}
                  <rect width="800" height="600" fill="#141C1D" />
                  {/* Lake water body */}
                  <path
                    d="M 280 0 Q 340 160 520 220 T 780 400 L 800 600 L 200 600 Q 150 450 250 320 T 280 0 Z"
                    fill="url(#waterGrad)"
                    opacity="0.8"
                  />
                  {/* Secondary inlet */}
                  <path
                    d="M 0 100 Q 140 220 300 240 L 260 380 Q 80 340 0 420 Z"
                    fill="#1A3835"
                    opacity="0.6"
                  />
                  {/* Grid / Roads */}
                  <path
                    d="M 50 500 L 400 350 L 750 380 M 350 50 L 400 350 L 450 580"
                    stroke="#2D3E40"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    fill="none"
                  />
                </svg>

                {/* Restaurant Map Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce-slow">
                  <div className="w-14 h-14 rounded-full bg-[#E5C358] text-[#0F1415] flex items-center justify-center shadow-2xl border-4 border-[#0F1415]">
                    <MapPin className="w-7 h-7 fill-current" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-md bg-[#0F1415]/90 border border-[#E5C358]/50 backdrop-blur-md text-xs font-serif font-bold text-white shadow-lg whitespace-nowrap">
                    Lake Cookhouse Location Pin
                  </div>
                </div>
              </div>

              {/* Map Overlay Controls */}
              <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-white">
                    Lakeside Location Preview
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-stone-300 border border-white/10">
                  Interactive Map Ready
                </div>
              </div>

              {/* Bottom Notice on Map */}
              <div className="relative z-10 p-5 bg-gradient-to-t from-[#0F1415] via-[#0F1415]/90 to-transparent">
                <div className="p-4 rounded-xl bg-[#182324]/90 border border-[#2D3E40] backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-0.5">
                      Exact Google Maps Integration Ready
                    </h5>
                    <p className="text-xs text-[#EDE8DF]/75 font-light">
                      This map placeholder will be populated with Lake Cookhouse&apos;s real GPS coordinates and street address.
                    </p>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="shrink-0 px-4 py-2 rounded-lg bg-[#E5C358] text-[#0F1415] text-xs font-semibold hover:brightness-110"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
