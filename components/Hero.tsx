
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center text-center py-20 relative">
      {/* Decorative background rhombuses */}
      <div className="absolute inset-0 bg-diamond opacity-30 pointer-events-none"></div>
      
      <div className="relative z-10 animate-fade-in flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-10 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-500 text-[10px] font-black tracking-[0.2em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
          Enterprise Digital Operations
        </div>
        
        <h1 className="text-6xl md:text-[7.2rem] font-black mb-8 tracking-tighter leading-[0.9] text-white max-w-5xl drop-shadow-sm">
          PAID ACQUISITION <br/> 
          <span className="text-gold-500 text-gold-glow">& CRO STRATEGY.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-14 font-light leading-relaxed tracking-tight">
          Senior-level Website Optimization & Performance Media Strategy. 
          Bridging technical acquisition with business-critical outcomes 
          for high-traffic enterprise platforms.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a 
            href="#case-studies" 
            className="group relative px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-xl hover:bg-gold-500 hover:text-black hover:scale-105 transition-all shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">Analysis Portfolio</span>
            <div className="absolute inset-0 bg-gold-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a 
            href="#contact" 
            className="px-10 py-5 border border-white/10 glass-panel text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-white/5 hover:scale-105 transition-all"
          >
            Growth Consultation
          </a>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 w-full max-w-4xl">
          <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.3em] mb-8">Strategic Partnerships</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30">
             <span className="text-2xl font-black italic tracking-tighter text-white">VERIZON</span>
             <span className="text-2xl font-black italic tracking-tighter text-white">CSTE.ORG</span>
             <span className="text-2xl font-black italic tracking-tighter text-white">GA SOLUTIONS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
