import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Mail, Phone, User, MessageSquare, CheckCircle, Sparkles, Send, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

interface ReservationSectionProps {
  preselectedDish?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ preselectedDish }) => {
  // Calendar date state: default to tomorrow
  const today = new Date();
  const defaultDate = new Date(today);
  defaultDate.setDate(today.getDate() + 1);
  const formattedDefaultDate = defaultDate.toISOString().split('T')[0];

  const [date, setDate] = useState<string>(formattedDefaultDate);
  const [time, setTime] = useState<string>('18:30');
  const [guests, setGuests] = useState<number>(2);
  const [seatingArea, setSeatingArea] = useState<string>(RESTAURANT_CONFIG.reservations.seatingAreas[0]);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>(
    preselectedDish ? `Interested in trying: ${preselectedDish}` : ''
  );

  // Available timeslots can be modified by the restaurant owner
  const [availableSlots] = useState<string[]>(RESTAURANT_CONFIG.reservations.availableTimeSlots);

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please provide your full name.';
    if (!phone.trim()) newErrors.phone = 'Please provide a valid phone number.';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Please provide a valid email address.';
    if (!date) newErrors.date = 'Please select a reservation date.';
    if (!time) newErrors.time = 'Please select a time slot.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate polished API submission
    setTimeout(() => {
      const generatedRef = 'LC-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setSpecialRequests('');
    setErrors({});
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return '';
    const d = new Date(dateString + 'T00:00:00');
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // WhatsApp quick confirmation text
  const whatsappBookingSummary = encodeURIComponent(
    `Hello Lake Cookhouse, I submitted table booking ${bookingRef}:\n- Name: ${name}\n- Date: ${date}\n- Time: ${time}\n- Guests: ${guests}\n- Seating: ${seatingArea}\n- Phone: ${phone}\n- Special Requests: ${specialRequests || 'None'}`
  );

  return (
    <section id="reservations" className="py-24 md:py-32 bg-[#0F1415] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#244B46]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C358] font-semibold">
              Online Reservations
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Reserve Your Table
          </h2>

          <p className="text-base text-[#EDE8DF]/75 font-light leading-relaxed">
            Join us by the lake for an exceptional dining experience. Select your preferred date, time, and table location below.
          </p>
        </div>

        {/* Booking Card Container */}
        <div className="rounded-3xl bg-[#141C1D] border border-[#253335] shadow-2xl p-6 sm:p-10 lg:p-12 relative">
          
          {isSubmitted ? (
            /* Submission Confirmation State */
            <div className="text-center py-10 px-4 max-w-xl mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#244B46] text-[#E5C358] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#244B46]/40">
                <CheckCircle className="w-9 h-9" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                Thank you! Your reservation request has been received.
              </h3>

              <div className="p-4 rounded-xl bg-[#1A2526] border border-[#2D3E40] text-sm text-[#E5C358] font-medium mb-6">
                Lake Cookhouse will confirm your booking shortly.
              </div>

              {/* Booking Summary Box */}
              <div className="text-left bg-[#101718] p-5 rounded-2xl border border-white/5 space-y-2.5 text-xs sm:text-sm text-[#EDE8DF]/80 mb-8">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-stone-400">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#E5C358]">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Guest Name:</span>
                  <span className="text-white font-medium">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Date & Time:</span>
                  <span className="text-white font-medium">{formatDisplayDate(date)} at {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Party Size:</span>
                  <span className="text-white font-medium">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Seating Preference:</span>
                  <span className="text-white font-medium">{seatingArea}</span>
                </div>
                {specialRequests && (
                  <div className="flex justify-between pt-1 border-t border-white/5">
                    <span className="text-stone-400">Requests:</span>
                    <span className="text-white font-light text-right max-w-xs">{specialRequests}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${RESTAURANT_CONFIG.social.whatsappNumber}?text=${whatsappBookingSummary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-[#25D366] text-black hover:brightness-110 transition-colors shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Notify via WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold text-stone-300 hover:text-white bg-[#1C2627] hover:bg-[#253335] transition-colors border border-white/10"
                >
                  Make Another Reservation
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleBookingSubmit} className="space-y-8">
              
              {/* Step 1: Date, Party Size & Seating */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Select Date */}
                <div>
                  <label className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white mb-2">
                    <CalendarIcon className="w-4 h-4 text-[#E5C358]" />
                    <span>1. Select Date</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1A2325] border border-[#2D3E40] text-white text-sm focus:outline-none focus:border-[#E5C358] transition-colors"
                    required
                  />
                  {errors.date && <p className="text-xs text-rose-400 mt-1">{errors.date}</p>}
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white mb-2">
                    <Users className="w-4 h-4 text-[#E5C358]" />
                    <span>2. Number of Guests</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                    className="w-full px-4 py-3 rounded-xl bg-[#1A2325] border border-[#2D3E40] text-white text-sm focus:outline-none focus:border-[#E5C358] transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <option key={num} value={num} className="bg-[#121819]">
                        {num} {num === 1 ? 'Guest (Solo Dining)' : num === 2 ? 'Guests (Couples Table)' : `${num} Guests`}
                      </option>
                    ))}
                    <option value={13} className="bg-[#121819]">
                      13+ Large Party / Private Gathering
                    </option>
                  </select>
                </div>

                {/* Preferred Seating Area */}
                <div>
                  <label className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white mb-2">
                    <MapPin className="w-4 h-4 text-[#E5C358]" />
                    <span>3. Seating Area</span>
                  </label>
                  <select
                    value={seatingArea}
                    onChange={(e) => setSeatingArea(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1A2325] border border-[#2D3E40] text-white text-sm focus:outline-none focus:border-[#E5C358] transition-colors"
                  >
                    {RESTAURANT_CONFIG.reservations.seatingAreas.map((area, idx) => (
                      <option key={idx} value={area} className="bg-[#121819]">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 2: Time Slots (Displayed as Selectable Buttons) */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#E5C358]" />
                    <span>4. Select Available Time Slot</span>
                  </label>
                  <span className="text-[11px] text-stone-400">
                    Lunch: 12:00 – 15:00 · Dinner: 17:30 – 21:00
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
                  {availableSlots.map((slot) => {
                    const isSelected = time === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`py-3 px-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#E5C358] text-[#0F1415] shadow-lg shadow-[#E5C358]/20 scale-102 border-2 border-[#E5C358]'
                            : 'bg-[#182324] text-[#EDE8DF]/90 hover:bg-[#223032] border border-[#2D3E40]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                {errors.time && <p className="text-xs text-rose-400 mt-1">{errors.time}</p>}
              </div>

              {/* Step 3: Contact & Special Requests */}
              <div className="pt-4 border-t border-[#253335]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">
                  5. Guest Information & Requests
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs text-stone-300 mb-1.5 font-medium">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-3.5 text-stone-400" />
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A2325] border border-[#2D3E40] text-white text-sm focus:outline-none focus:border-[#E5C358]"
                        required
                      />
                    </div>
                    {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs text-stone-300 mb-1.5 font-medium">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-stone-400" />
                      <input
                        type="tel"
                        placeholder="e.g. +266 5800 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A2325] border border-[#2D3E40] text-white text-sm focus:outline-none focus:border-[#E5C358]"
                        required
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs text-stone-300 mb-1.5 font-medium">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-stone-400" />
                      <input
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A2325] border border-[#2D3E40] text-white text-sm focus:outline-none focus:border-[#E5C358]"
                        required
                      />
                    </div>
                    {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs text-stone-300 mb-1.5 font-medium">
                    <MessageSquare className="w-3.5 h-3.5 text-[#E5C358]" />
                    <span>Special Requests / Dietary Notes / Occasion (Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Anniversary dinner, high chair needed, lakeside table preference..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A2325] border border-[#2D3E40] text-white text-sm focus:outline-none focus:border-[#E5C358]"
                  />
                </div>
              </div>

              {/* Primary Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-400 text-center sm:text-left">
                  Instant confirmation request · No booking fees required
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-[#C59B27] via-[#D4AF37] to-[#C59B27] text-[#0F1415] hover:brightness-110 shadow-xl shadow-[#C59B27]/25 transition-all duration-200 active:scale-[0.98] cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>PROCESSING RESERVATION...</span>
                  ) : (
                    <span>CONFIRM BOOKING</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Owner Integration Architecture Note */}
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-stone-500">
            <span>Ready for integration with WhatsApp API, Google Calendar, or direct SMS alerts.</span>
            <span className="hidden sm:inline">Lake Cookhouse Reservation Engine</span>
          </div>
        </div>
      </div>
    </section>
  );
};
