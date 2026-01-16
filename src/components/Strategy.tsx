
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
    I approach SEO and performance marketing as part of a broader digital system—not as isolated channels or one-off tactics.
    The goal is consistent, measurable growth that holds up over time, not short-term wins that introduce instability or risk.
  </p>

  <p>
    I’ve worked in high-traffic, public-facing environments where SEO decisions operate under real technical constraints,
    compliance requirements, and cross-team dependencies. In those settings, I focus on clear measurement, disciplined
    prioritization, and changes that improve performance without breaking critical systems.
  </p>

  <p>
    In practice, my work spans technical SEO audits, site architecture and performance improvements, analytics-driven
    decision-making, and close collaboration with engineering and marketing teams. I’ve applied this approach on complex
    platforms at
    <span className="text-white font-bold"> Verizon</span> and
    <span className="text-white font-bold"> CSTE</span>, where scale, coordination, and accountability matter.
  </p>
</div>


      </div>
      
      <div className="grid gap-6">
        {[
      {
        title: 'Technical Foundation',
        desc: 'Technical SEO audits and infrastructure reviews focused on indexability, crawl efficiency, site architecture, and performance. Changes are evaluated for both SEO impact and system risk before implementation.',
        icon: '◈'
      },
      {
        title: 'Data & Measurement',
        desc: 'Using GA4 and supporting analytics to understand user behavior, surface performance gaps, and prioritize work across SEO, content, and paid channels based on measurable impact.',
        icon: '✧'
      },
      {
        title: 'Cross-Functional Execution',
        desc: 'Partnering closely with engineering, product, legal, and marketing teams to ship SEO and performance improvements that align with platform constraints, compliance requirements, and business priorities.',
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
