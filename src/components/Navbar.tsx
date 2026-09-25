import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu as MenuIcon, X, CalendarCheck, PhoneCall, ChevronRight } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracker
      const sections = ['home', 'about', 'menu', 'experience', 'gallery', 'reservations', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reservations', href: '#reservations', id: 'reservations' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0F1415]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#253335]/60 py-3'
            : 'bg-gradient-to-b from-[#0F1415]/90 via-[#0F1415]/50 to-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark & Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group transition-opacity hover:opacity-95"
              aria-label="Lake Cookhouse - Home"
            >
              <Logo variant="horizontal" inverted={true} />
            </a>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-sm tracking-wide transition-colors py-1 font-medium ${
                      isActive
                        ? 'text-[#E5C358]'
                        : 'text-[#EDE8DF]/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E5C358] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-[#C59B27] via-[#D4AF37] to-[#C59B27] text-[#0F1415] hover:brightness-110 shadow-md shadow-[#C59B27]/20 transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4 text-[#0F1415]" />
                <span>Book a Table</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl bg-[#1A2325] text-[#EDE8DF] border border-[#2D3E40] hover:text-[#E5C358] focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#121819] border-l border-[#253335] p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-[#253335]">
                <Logo variant="horizontal" inverted={true} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-[#1A2325] text-stone-400 hover:text-white"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 mt-6" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-[#244B46] text-[#E5C358]'
                          : 'text-[#EDE8DF]/90 hover:bg-[#1A2325] hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions inside mobile drawer */}
            <div className="pt-6 border-t border-[#253335] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-xl text-center font-semibold text-sm tracking-wide bg-gradient-to-r from-[#C59B27] to-[#D4AF37] text-[#0F1415] shadow-lg flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book a Table</span>
              </button>

              <a
                href={`https://wa.me/${RESTAURANT_CONFIG.social.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-medium border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-stone-500 mt-1">
                {RESTAURANT_CONFIG.tagline}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
