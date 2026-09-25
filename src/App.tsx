import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ReservationSection } from './components/ReservationSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProposalBanner } from './components/ProposalBanner';

export default function App() {
  const [selectedDishForBooking, setSelectedDishForBooking] = useState<string | undefined>(undefined);

  const scrollToReservations = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDishForBooking = (dishName: string) => {
    setSelectedDishForBooking(dishName);
    scrollToReservations();
  };

  return (
    <div className="min-h-screen bg-[#0F1415] text-[#EDE8DF] flex flex-col relative selection:bg-[#244B46] selection:text-[#E5C358]">
      {/* Client Proposal Presentation Guide Badge */}
      <ProposalBanner />

      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenBooking={scrollToReservations} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={scrollToReservations}
          onExploreMenu={scrollToMenu}
        />

        {/* 3. About Lake Cookhouse */}
        <AboutSection
          onOpenBooking={scrollToReservations}
        />

        {/* 4. Menu Highlights */}
        <MenuSection
          onOpenBooking={scrollToReservations}
          onSelectDishForBooking={handleSelectDishForBooking}
        />

        {/* 5. Restaurant Experience */}
        <ExperienceSection
          onOpenBooking={scrollToReservations}
        />

        {/* 6. Online Booking / Reservation Calendar */}
        <ReservationSection
          preselectedDish={selectedDishForBooking}
        />

        {/* 9. Photo Gallery */}
        <GallerySection />

        {/* 10. Testimonials */}
        <TestimonialsSection />

        {/* 11. Location / Contact (with Facebook & Map) */}
        <ContactSection
          onOpenBooking={scrollToReservations}
        />
      </main>

      {/* 12. Dark Footer */}
      <Footer onOpenBooking={scrollToReservations} />

      {/* 7. WhatsApp Floating Button (Fixed Bottom-Right) */}
      <WhatsAppFloatingButton />
    </div>
  );
}
