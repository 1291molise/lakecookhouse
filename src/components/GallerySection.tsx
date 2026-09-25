import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../config/restaurantConfig';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Exterior', 'Lakeside View', 'Signature Dishes', 'Evening Atmosphere', 'Special Events'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#121819] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5C358] font-semibold">
              Visual Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Lakeside Moments & Dining Gallery
          </h2>

          <p className="text-base text-[#EDE8DF]/75 font-light leading-relaxed">
            A glimpse into the relaxing atmosphere, signature recipes, and picturesque lake surroundings waiting for you at Lake Cookhouse.
          </p>

          <p className="text-xs text-stone-400 mt-2">
            [High-resolution placeholder gallery · Ready to receive official Lake Cookhouse photographs]
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-3 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === cat
                  ? 'bg-[#244B46] text-[#E5C358] border border-[#3E8279]'
                  : 'bg-[#182022] text-[#EDE8DF]/70 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#182324] border border-[#253335] cursor-pointer aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                <Maximize2 className="w-4 h-4 text-[#E5C358]" />
              </div>

              {/* Caption Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C358] mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#EDE8DF]/75 font-light line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
              );
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : 0
              );
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Body */}
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-full flex items-center justify-center rounded-2xl overflow-hidden border border-white/15 bg-black">
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#E5C358] font-semibold">
                {filteredItems[selectedImageIndex].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                {filteredItems[selectedImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE8DF]/75 mt-1 max-w-xl mx-auto">
                {filteredItems[selectedImageIndex].description}
              </p>
              <span className="text-[11px] text-stone-500 mt-2 block">
                {selectedImageIndex + 1} of {filteredItems.length} · Use arrow keys to navigate
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
