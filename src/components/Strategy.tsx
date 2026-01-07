
import React from 'react';

export const Strategy: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-start">
      <div className="sticky top-32">
      <h2 className="text-xs font-black text-gold-500 uppercase tracking-[0.4em] mb-6">
  The Approach
</h2>
<h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
  How I Approach <br />SEO & Performance Marketing
</h3>

<div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
  <p>
    I approach SEO and performance marketing as part of a broader digital operation—not as isolated channels. 
    My focus is on building reliable, scalable practices that support long-term growth, site quality, and user experience.
  </p>
  <p>
    I’ve worked in high-traffic, public-facing environments where technical constraints, compliance requirements, 
    and cross-team coordination are part of daily execution. In those settings, I prioritize clear measurement, 
    thoughtful prioritization, and changes that deliver measurable impact without introducing risk.
  </p>
  <p>
    My experience includes work on complex platforms at 
    <span className="text-white font-bold"> Verizon</span> and 
    <span className="text-white font-bold"> CSTE</span>, 
    where SEO decisions intersect with engineering, legal, accessibility, and performance considerations.
  </p>
</div>

      </div>
      
      <div className="grid gap-6">
        {[
          {
            title: 'Technical Foundation',
            desc: 'Technical SEO audits focused on indexability, crawl efficiency, structured data, and server-side considerations to ensure sites are discoverable, stable, and search-friendly..',
            icon: '◈'
          },
          {
            title: 'Data Intelligence',
            desc: 'Using GA4 and analytics to understand user behavior, identify performance gaps, and guide prioritization across SEO, content, and paid efforts.',
            icon: '✧'
          },
          {
            title: 'Cross-Functional Ops',
            desc: 'Working closely with engineering, legal, and marketing teams to align SEO and performance work with platform constraints, compliance requirements, and business priorities..',
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
