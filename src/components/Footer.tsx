
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 bg-[#080808] py-16 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-black text-white tracking-tighter">NL<span className="text-gold-500">.</span></span>
            <span className="h-6 w-[1px] bg-white/10"></span>
            <span className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">Enterprise SEO Strategy</span>
          </div>
          <p className="text-gray-700 text-[9px] max-w-xs font-medium">Austin, TX • Remote Global Delivery</p>
        </div>
        
        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">
          &copy; {currentYear} Nathan Louissiant. Strategic Excellence Guaranteed.
        </p>

        <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
          <a href="#strategy" className="hover:text-gold-500 transition-colors">Framework</a>
          <a href="#case-studies" className="hover:text-gold-500 transition-colors">Audit Library</a>
          <a href="#credentials" className="hover:text-gold-500 transition-colors">Pedigree</a>
        </div>
      </div>
      
      {/* Bottom decorative bar */}
      <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
    </footer>
  );
};
