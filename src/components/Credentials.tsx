
import React from 'react';
import { SKILLS } from '../data';

export const Credentials: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24">
      <div>
        <h2 className="text-xs font-black text-gold-500 uppercase tracking-[0.4em] mb-6">Core Capabilities</h2>
        <h3 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">Technical <br/>Experience.</h3>
        
        <div className="space-y-12">
          {SKILLS.map((cat) => (
            <div key={cat.category}>
              <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gold-500/30"></span>
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <span key={item} className="px-5 py-2.5 glass-panel rounded-xl text-[11px] font-bold text-gray-300 border border-white/5 hover:border-gold-500/50 hover:text-white transition-all">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="glass-panel p-12 rounded-[2.5rem] border border-gold-500/10 bg-gradient-to-br from-gold-500/5 to-transparent relative overflow-hidden group">
          {/* Decorative background element */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700"></div>
          
          <h4 className="text-white font-black text-2xl mb-10 tracking-tighter">Education & Credentials</h4>
          <div className="space-y-10 relative z-10">
            <div className="group/item">
              <p className="text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 group-hover/item:translate-x-1 transition-transform">Degree Conferred</p>
              <h5 className="text-white font-black text-xl tracking-tight">B.A. Marketing</h5>
              <p className="text-gray-500 font-medium text-sm">Kennesaw State University • GA</p>
            </div>
            
            <div className="pt-10 border-t border-white/5 group/item">
              <p className="text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 group-hover/item:translate-x-1 transition-transform">Advanced Specialization</p>
              <h5 className="text-white font-black text-xl tracking-tight">Software Engineering</h5>
              <p className="text-gray-500 font-medium text-sm">General Assembly • Austin / Remote</p>
            </div>
          </div>
          
          <div className="mt-12 flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
             <div className="w-8 h-8 rounded-full bg-white"></div>
             <span className="text-[10px] font-black text-white uppercase tracking-widest">KSU Alumni</span>
          </div>
        </div>
      </div>
    </div>
  );
};
