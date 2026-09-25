import React, { useState } from 'react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappHref = `https://wa.me/${RESTAURANT_CONFIG.social.whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Label */}
      <div
        className={`hidden sm:flex items-center bg-[#121A1B] text-[#EDE8DF] px-3.5 py-1.5 rounded-full border border-[#2D3E40] shadow-xl text-xs font-medium tracking-wide transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 animate-pulse" />
        <span>Chat with us on WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-108 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        {/* Subtle pulsing beacon */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />

        {/* Official WhatsApp SVG Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white drop-shadow-sm relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.495 2 2 6.496 2 12.032c0 1.98.577 3.824 1.573 5.385L2 22l4.743-1.528A9.972 9.972 0 0 0 12.03 22c5.536 0 10.031-4.496 10.031-10.032C22.062 6.496 17.567 2 12.031 2Zm0 18.232c-1.63 0-3.149-.49-4.432-1.332l-.317-.206-2.923.942.956-2.845-.224-.337A8.199 8.199 0 0 1 3.8 12.032c0-4.542 3.69-8.232 8.23-8.232 4.542 0 8.232 3.69 8.232 8.232 0 4.542-3.69 8.232-8.231 8.232Zm4.515-6.177c-.247-.123-1.464-.722-1.691-.805-.227-.082-.392-.123-.557.124-.165.247-.64.805-.784.97-.144.165-.288.185-.535.062-.247-.124-1.042-.384-1.986-1.226-.734-.654-1.23-1.463-1.374-1.71-.144-.247-.015-.38.109-.503.111-.111.247-.288.371-.433.123-.144.165-.247.247-.412.082-.165.041-.309-.021-.433-.062-.124-.557-1.34-.763-1.835-.2-.484-.403-.418-.557-.426-.144-.008-.309-.01-.474-.01-.165 0-.433.062-.66.309-.227.247-.866.845-.866 2.062 0 1.216.887 2.391 1.01 2.556.124.165 1.745 2.664 4.227 3.737.59.255 1.052.408 1.411.522.593.189 1.134.162 1.561.098.477-.071 1.464-.6 1.67-1.176.206-.577.206-1.072.144-1.175-.062-.103-.227-.165-.474-.288Z" />
        </svg>

        {/* Mobile tooltip on tap or subtle marker */}
        <span className="sr-only">Chat with us on WhatsApp</span>
      </a>
    </div>
  );
};
