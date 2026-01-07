
import React from 'react';

export const Strategy: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-start">
      <div className="sticky top-32">
        <h2 className="text-xs font-black text-gold-500 uppercase tracking-[0.4em] mb-6">The Methodology</h2>
        <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">High-Status <br/>Growth Ops.</h3>
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
          <p>
            I architect digital ecosystems for enterprise reliability. My framework treats SEO not as a siloed channel, 
            but as a critical component of platform governance and user satisfaction.
          </p>
          <p>
            Specializing in high-traffic, public-facing environments like <span className="text-white font-bold">Verizon</span> and <span className="text-white font-bold">CSTE</span>, 
            I navigate complex technical requirements and legal constraints to unlock hidden organic revenue.
          </p>
        </div>
      </div>
      
      <div className="grid gap-6">
        {[
          {
            title: 'Technical Foundation',
            desc: 'Deep-dive audits into indexability, schema architecture, and server-side compliance.',
            icon: '◈'
          },
          {
            title: 'Data Intelligence',
            desc: 'Advanced GA4 segmentation and behavior modeling to drive corrective action.',
            icon: '✧'
          },
          {
            title: 'Cross-Functional Ops',
            desc: 'Integrating Engineering, Legal, and Marketing workflows for scalable governance.',
            icon: '△'
          }
        ].map((pillar, i) => (
          <div key={i} className="glass-panel p-10 rounded-2xl accent-border-gold group hover:bg-white/5 transition-all">
            <span className="text-gold-500 text-2xl mb-4 block font-serif">{pillar.icon}</span>
            <h4 className="text-white font-black text-xl mb-3 uppercase tracking-tighter">{pillar.title}</h4>
            <p className="text-gray-500 font-light leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
