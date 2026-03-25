import React from 'react';
import { CASE_STUDIES } from '../data';

export const CaseStudies: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
        <div className="max-w-xl">
          <h2 className="text-xs sm:text-sm font-black text-gold-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">
            Case Studies
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
            Performance & <br />Optimization Work.
          </h3>
        </div>

        <p className="text-gray-500 text-sm sm:text-base font-light leading-relaxed max-w-xs md:max-w-sm border-l border-white/10 pl-4 sm:pl-6">
          A selection of work focused on improving website performance, reducing user friction, and delivering measurable impact across real-world applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.id}
            className="group relative flex flex-col glass-panel rounded-xl overflow-hidden hover:translate-y-[-4px] sm:hover:translate-y-[-8px] transition-all duration-500 accent-border-gold"
          >
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gold-500/5 blur-[24px] sm:blur-[32px] md:blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="p-6 sm:p-8 md:p-10 flex-grow">
              <span className="inline-block px-3 py-1 rounded bg-gold-500/10 text-gold-500 text-[9px] font-black uppercase tracking-widest mb-4 sm:mb-6">
                {study.category}
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4 group-hover:text-gold-500 transition-colors leading-tight">
                {study.title}
              </h4>

              <p className="text-gray-500 text-sm sm:text-base mb-8 sm:mb-10 font-light leading-relaxed">
                {study.description}
              </p>
            </div>

            <div className="px-6 sm:px-8 md:px-10 py-6 sm:py-7 md:py-8 border-t border-white/5 bg-white/2">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <span className="block text-[9px] text-gray-600 uppercase font-black tracking-[0.2em] mb-1 italic">
                    Impact
                  </span>
                  <span className="text-white font-black text-xl sm:text-2xl tracking-tighter">
                    {study.metric}
                  </span>
                </div>

                <div className="text-right">
                  <span className="block text-[9px] text-gray-600 uppercase font-black tracking-[0.2em] mb-1">
                    Focus
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-bold">
                    {study.tags[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};