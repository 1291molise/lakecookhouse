import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'horizontal';
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'compact',
  inverted = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const textColor = inverted ? '#EDE8DF' : '#141E1F';
  const subtitleColor = inverted ? '#C2BCB0' : '#4A5B5A';
  const accentGold = '#C59B27';

  // SVG Fallback graphics if needed
  const renderFallbackSvg = () => (
    <svg
      viewBox="0 0 200 160"
      className="w-full h-full drop-shadow-sm"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="122" cy="72" r="26" fill="#F2AC88" opacity="0.95" />
      <path
        d="M20 102 C 55 92, 85 96, 120 86 C 145 80, 168 88, 185 98 L 185 106 L 20 106 Z"
        fill="#7F9D93"
        opacity="0.85"
      />
      <path
        d="M 25 116 Q 65 110 100 115 T 175 116"
        stroke="#5B928E"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <ellipse cx="100" cy="106" rx="65" ry="8" fill="#1F4743" />
      <path
        d="M 68 82 L 68 98 M 68 90 L 80 90 M 80 90 L 80 98"
        stroke="#1F4743"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 132 82 L 132 98 M 132 90 L 120 90 M 120 90 L 120 98"
        stroke="#1F4743"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 86 86 L 114 86 M 100 86 L 100 102 M 92 102 L 108 102"
        stroke="#1F4743"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line x1="100" y1="56" x2="100" y2="86" stroke="#1F4743" strokeWidth="3.5" />
      <path
        d="M 52 56 Q 100 32 148 56 Q 132 60 116 57 Q 100 60 84 57 Q 68 60 52 56 Z"
        fill="#1F4743"
      />
      <path d="M 100 33 L 100 28" stroke="#1F4743" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Emblem using the original logo image */}
        <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden bg-[#FAF7F2] border border-[#2D3E40] shadow-md flex items-center justify-center">
          {!imgError ? (
            <img
              src="/logo.jpeg"
              alt="Lake Cookhouse Logo"
              className="w-full h-full object-cover scale-110"
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            renderFallbackSvg()
          )}
        </div>

        {/* Brand Name Lockup */}
        <div className="flex flex-col">
          <span
            className="text-[10px] tracking-[0.28em] uppercase font-semibold leading-none"
            style={{ color: accentGold }}
          >
            L A K E
          </span>
          <span
            className="text-lg md:text-xl font-serif font-bold tracking-[0.06em] leading-tight"
            style={{ color: textColor }}
          >
            COOKHOUSE
          </span>
          <span
            className="text-[9px] tracking-[0.16em] uppercase hidden sm:block"
            style={{ color: subtitleColor }}
          >
            Quality Food · Quality Time
          </span>
        </div>
      </div>
    );
  }

  // Full or compact vertical logo
  return (
    <div
      className={`flex flex-col items-center justify-center text-center select-none ${className}`}
    >
      {/* Official Logo circular container */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3 rounded-full overflow-hidden border-2 border-[#C59B27]/40 shadow-xl bg-[#FAF7F2] p-1">
        {!imgError ? (
          <img
            src="/logo.jpeg"
            alt="Lake Cookhouse Logo"
            className="w-full h-full object-contain rounded-full"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          renderFallbackSvg()
        )}
      </div>

      {/* Typography */}
      <span
        className="text-xs tracking-[0.35em] uppercase font-semibold leading-none mb-1"
        style={{ color: accentGold }}
      >
        L A K E
      </span>

      <span
        className="text-2xl md:text-3xl font-serif font-bold tracking-[0.08em] leading-tight"
        style={{ color: textColor }}
      >
        COOKHOUSE
      </span>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center gap-2 w-32 my-1.5 opacity-70">
        <div className="h-[1px] flex-1 bg-current" style={{ color: accentGold }}></div>
        <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: accentGold }}></div>
        <div className="h-[1px] flex-1 bg-current" style={{ color: accentGold }}></div>
      </div>

      <span
        className="text-[10px] tracking-[0.2em] uppercase font-medium"
        style={{ color: subtitleColor }}
      >
        QUALITY FOOD &mdash; QUALITY TIME
      </span>
    </div>
  );
};
