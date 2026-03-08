import React from 'react';

export const Strategy: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-start">
      <div className="static lg:sticky lg:top-32">
        <h2 className="text-xs sm:text-sm font-black text-gold-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">
          The Approach
        </h2>

        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-tight">
          How I Build <br />Product & Growth Systems
        </h3>

        <div className="space-y-5 sm:space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
          <p>
            I approach product development as a systems problem. Strong digital products are not built through isolated features or one-off tactics. They are built through reliable architecture, clear analytics, performance discipline, and continuous iteration tied to measurable outcomes.
          </p>

          <p>
            My work sits at the intersection of full-stack product engineering, analytics implementation, and growth infrastructure. That means building applications that are usable, scalable, and observable while creating the technical foundation needed for experimentation, optimization, and long-term performance improvement.
          </p>

          <p>
            I have worked in high-traffic, public-facing environments where technical decisions operate under real constraints including performance requirements, cross-team dependencies, and operational stability. In those settings, I focus on shipping improvements that strengthen the product, improve user experience, and support business goals without creating unnecessary system risk.
          </p>

          <p>
            In practice, this includes React-based product development, API and front-end performance optimization, analytics and event tracking, experimentation workflows, and growth systems such as technical SEO and conversion-focused infrastructure. I’ve applied this approach in environments including
            <span className="text-white font-bold"> Verizon</span> and
            <span className="text-white font-bold"> CSTE</span>, where scale, reliability, and accountability matter.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {[
          {
            title: 'Product Engineering',
            desc: 'Building scalable web applications and interfaces with a focus on usability, maintainability, and front-end performance. Work includes React-based development, system integration, and shipping production-ready features that support real user workflows.',
            icon: '◈'
          },
          {
            title: 'Analytics & Experimentation',
            desc: 'Implementing analytics systems that turn product usage into decision-making signals. This includes event tracking, funnel analysis, behavior insights, and experimentation frameworks used to validate improvements and prioritize product changes.',
            icon: '✧'
          },
          {
            title: 'Performance & Growth Infrastructure',
            desc: 'Improving the technical foundation behind acquisition and conversion through performance optimization, technical SEO, site architecture, and measurement systems. The objective is sustainable growth supported by engineering discipline, not channel-level guesswork.',
            icon: '△'
          }
        ].map((pillar, i) => (
          <div
            key={i}
            className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl accent-border-gold group hover:bg-white/5 transition-all"
          >
            <span className="text-gold-500 text-xl sm:text-2xl mb-3 sm:mb-4 block font-serif">
              {pillar.icon}
            </span>
            <h4 className="text-white font-black text-lg sm:text-xl mb-3 uppercase tracking-tighter">
              {pillar.title}
            </h4>
            <p className="text-gray-500 text-sm sm:text-base font-light leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};