
import React from 'react';
import { CASE_STUDIES } from '../data';

export const CaseStudies: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-xs font-black text-gold-500 uppercase tracking-[0.4em] mb-6">Selected Analysis</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">Enterprise <br/>Case Library.</h3>
        </div>
        <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs border-l border-white/10 pl-6">
          Strategic interventions focused on technical debt reduction and visibility optimization across major digital platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {CASE_STUDIES.map((study) => (
          <div key={study.id} className="group relative flex flex-col glass-panel rounded-xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500 accent-border-gold">
            {/* Subtle card glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="p-10 flex-grow">
              <span className="inline-block px-3 py-1 rounded bg-gold-500/10 text-gold-500 text-[9px] font-black uppercase tracking-widest mb-6">
                {study.category}
              </span>
              <h4 className="text-2xl font-black text-white mb-4 group-hover:text-gold-500 transition-colors leading-tight">
                {study.title}
              </h4>
              <p className="text-gray-500 text-sm mb-10 font-light leading-relaxed">
                {study.description}
              </p>
            </div>
            
            <div className="px-10 py-8 border-t border-white/5 bg-white/2">
              <div className="flex justify-between items-center">
                <div>
                  <span className="block text-[9px] text-gray-600 uppercase font-black tracking-[0.2em] mb-1 italic">Objective Result</span>
                  <span className="text-white font-black text-2xl tracking-tighter">{study.metric}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[9px] text-gray-600 uppercase font-black tracking-[0.2em] mb-1">Key Insight</span>
                  <span className="text-[10px] text-gray-400 font-bold">{study.tags[0]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
