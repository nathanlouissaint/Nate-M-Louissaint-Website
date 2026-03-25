import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] flex flex-col justify-center items-center text-center py-16 sm:py-20 relative px-4 sm:px-0">
      {/* Decorative background rhombuses */}
      <div className="absolute inset-0 bg-diamond opacity-30 pointer-events-none"></div>

      <div className="relative z-10 animate-fade-in flex flex-col items-center w-full">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 mb-8 sm:mb-10 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-500 text-[9px] sm:text-[10px] font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
          Web Performance & Conversion Optimization
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7.2rem] font-black mb-6 sm:mb-8 tracking-tighter leading-[0.95] text-white max-w-5xl drop-shadow-sm">
          High-Performance <br />
          <span className="text-gold-500 text-gold-glow">Web Experiences.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mb-6 sm:mb-8 font-light leading-relaxed tracking-tight px-2 sm:px-0">
          I optimize websites and web applications to load faster, perform better, and convert more effectively. My work focuses on React/Next.js systems, technical SEO, and analytics-driven improvements that reduce friction and improve user experience at scale.
        </p>

        {/* Proof */}
        <p className="text-sm text-gray-500 mb-10 sm:mb-14">
          Improved page load performance by 40% across high-traffic applications
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <a
            href="https://docs.google.com/document/d/15DstUiDTcJoyG8ldqGjAw3QRbletpsRHjA6eChlGL4A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border border-white/10 glass-panel text-white font-black text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-widest rounded-xl hover:bg-white/5 hover:scale-105 transition-all"
          >
            View My Resume
          </a>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-10 md:pt-12 border-t border-white/5 w-full max-w-4xl">
          <p className="text-[9px] sm:text-[10px] text-gray-600 font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-6 sm:mb-8">
            Core Focus Areas
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 opacity-30">
            <span className="text-lg sm:text-xl md:text-2xl font-black italic tracking-tighter text-white">
              Web Performance & Core Web Vitals
            </span>

            <span className="text-lg sm:text-xl md:text-2xl font-black italic tracking-tighter text-white">
              Technical SEO & Analytics Optimization
            </span>

            <span className="text-lg sm:text-xl md:text-2xl font-black italic tracking-tighter text-white">
              React / Next.js Frontend Systems
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};