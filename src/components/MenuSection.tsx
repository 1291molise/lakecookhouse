import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem, RESTAURANT_CONFIG } from '../config/restaurantConfig';
import { Sparkles, Utensils, Download, X, Info, CalendarPlus } from 'lucide-react';

interface MenuSectionProps {
  onSelectDishForBooking?: (dishName: string) => void;
  onOpenBooking: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDishForBooking, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showFullMenuModal, setShowFullMenuModal] = useState<boolean>(false);
  const [selectedDishDetail, setSelectedDishDetail] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#121819] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#336962]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C358] font-semibold">
              Culinary Selections
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Taste Something Special
          </h2>

          <p className="text-base sm:text-lg text-[#EDE8DF]/75 font-light leading-relaxed">
            Discover a harmony of fresh lakeside flavours, savory grills, and refreshing sips crafted to delight every palate.
          </p>

          {/* Pricing Placeholder Notice banner for client proposal */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A2526] border border-[#2D3E40] text-xs text-[#E5C358]/90">
            <Info className="w-3.5 h-3.5" />
            <span>Pricing displayed as &ldquo;M XX&rdquo; placeholder pending final menu confirmation</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 no-scrollbar">
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#244B46] text-[#E5C358] shadow-md border border-[#3E8279]'
                    : 'bg-[#182022] text-[#EDE8DF]/70 hover:text-white hover:bg-[#1E292B] border border-white/5'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#161D1E] border border-[#253335] hover:border-[#3E8279]/60 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Large Food Image Slot */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1A2325]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback styled background
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161D1E] via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#0F1415]/85 backdrop-blur-md text-[#E5C358] border border-[#2D3E40]">
                      {item.badge}
                    </div>
                  )}

                  {/* Price Tag with required M XX placeholder */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0F1415]/90 backdrop-blur-md text-[#E5C358] font-serif font-bold text-sm tracking-wide border border-[#C59B27]/40 shadow-sm">
                    {item.price}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Clean unboxed metadata */}
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#5B928E] font-medium tracking-wide mb-2">
                      {item.dietary.map((tag, idx) => (
                        <React.Fragment key={idx}>
                          <span>{tag}</span>
                          {idx < item.dietary!.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  {/* Dish Name */}
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#E5C358] transition-colors">
                    {item.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#EDE8DF]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer / Quick Action */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedDishDetail(item)}
                  className="text-xs text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  Dish Details
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectDishForBooking) {
                      onSelectDishForBooking(item.name);
                    }
                    onOpenBooking();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C358] hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={() => setShowFullMenuModal(true)}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#244B46] hover:bg-[#336962] text-white border border-[#3E8279]/60 shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
          >
            <Utensils className="w-4 h-4 text-[#E5C358]" />
            <span>View Full Menu</span>
          </button>
        </div>
      </div>

      {/* Full Menu Modal Preview */}
      {showFullMenuModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setShowFullMenuModal(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#141C1D] border border-[#2D3E40] rounded-2xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullMenuModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1C2627] text-stone-400 hover:text-white transition-colors"
              aria-label="Close menu modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Heading */}
            <div className="text-center mb-8 pb-6 border-b border-[#253335]">
              <span className="text-xs uppercase tracking-[0.3em] text-[#E5C358] font-semibold">
                Lake Cookhouse
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
                Full Dining & Beverage Menu Proposal
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE8DF]/70 mt-2 max-w-lg mx-auto">
                Prepared with wholesome ingredients. Real prices and menu items can be uploaded instantly.
              </p>
            </div>

            {/* Categorized Menu Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {['starters', 'mains', 'grills', 'seafood', 'desserts', 'drinks'].map((catKey) => {
                const itemsInCat = MENU_ITEMS.filter((i) => i.category === catKey);
                const categoryTitle = MENU_CATEGORIES.find((c) => c.id === catKey)?.label || catKey;

                return (
                  <div key={catKey} className="p-4 rounded-xl bg-[#182324] border border-[#253335]">
                    <h4 className="text-lg font-serif font-bold text-[#E5C358] border-b border-white/10 pb-2 mb-3">
                      {categoryTitle}
                    </h4>
                    <div className="space-y-4">
                      {itemsInCat.map((item) => (
                        <div key={item.id} className="flex justify-between items-start gap-4">
                          <div>
                            <div className="text-sm font-semibold text-white">{item.name}</div>
                            <div className="text-xs text-[#EDE8DF]/65 font-light leading-relaxed mt-0.5">
                              {item.description}
                            </div>
                          </div>
                          <span className="font-serif font-bold text-xs text-[#E5C358] shrink-0 bg-[#0F1415] px-2 py-0.5 rounded">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note to Owner */}
            <div className="p-4 rounded-xl bg-[#1E2829] border border-[#3E8279]/30 text-xs text-[#EDE8DF]/80 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#E5C358] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Proposal Customization Note:</strong> When Lake Cookhouse provides their finalized menu list with prices in Maloti (M), this entire digital menu can be updated in minutes. Dietary filters, drink pairings, and daily specials are fully supported.
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setShowFullMenuModal(false)}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-stone-300 hover:text-white bg-[#1A2325]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowFullMenuModal(false);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-[#C59B27] to-[#D4AF37] text-[#0F1415]"
              >
                Reserve a Table for Dining
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Single Dish Detail Modal */}
      {selectedDishDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedDishDetail(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#141C1D] border border-[#2D3E40] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDishDetail(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <img
              src={selectedDishDetail.image}
              alt={selectedDishDetail.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-[#5B928E] font-semibold">
                  {selectedDishDetail.category.toUpperCase()}
                </span>
                <span className="text-lg font-serif font-bold text-[#E5C358]">
                  {selectedDishDetail.price}
                </span>
              </div>

              <h4 className="text-2xl font-serif font-bold text-white mb-2">
                {selectedDishDetail.name}
              </h4>

              <p className="text-sm text-[#EDE8DF]/80 font-light leading-relaxed mb-6">
                {selectedDishDetail.description}
              </p>

              <button
                onClick={() => {
                  if (onSelectDishForBooking) {
                    onSelectDishForBooking(selectedDishDetail.name);
                  }
                  setSelectedDishDetail(null);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full text-center text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#C59B27] to-[#D4AF37] text-[#0F1415] hover:brightness-110"
              >
                Request this Dish with Table Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
