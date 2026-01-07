
import React from 'react';
import { EXPERIENCES } from '../data';

export const Results: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-xs font-black text-gold-500 uppercase tracking-[0.4em] mb-6">Impact History</h2>
        <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Strategic Tenure.</h3>
      </div>
      
      <div className="relative space-y-20">
        {/* Central timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
        
        {EXPERIENCES.map((exp, idx) => (
          <div key={exp.id} className={`relative flex flex-col md:flex-row gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Mobile dot */}
            <div className="md:hidden absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gold-500 accent-border-gold"></div>
            
            {/* Content box */}
            <div className="md:w-1/2">
              <div className="glass-panel p-10 rounded-3xl accent-border-gold hover:bg-white/5 transition-all">
                <div className="flex flex-col mb-8">
                  <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{exp.period}</span>
                  <h4 className="text-3xl font-black text-white tracking-tighter">{exp.role}</h4>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">{exp.company}</p>
                </div>
                
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-400 text-sm font-light leading-relaxed flex gap-4">
                      <span className="text-gold-500 font-bold shrink-0">◈</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Spacer/Empty side */}
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gold-500/20 bg-gold-500/5 flex items-center justify-center text-gold-500 text-xl font-serif">
                  0{idx + 1}
                </div>
                <div className="h-12 w-[1px] bg-white/10 mt-4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
