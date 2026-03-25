import React from 'react';

export const Strategy: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-start">
      <div className="static lg:sticky lg:top-32">
        <h2 className="text-xs sm:text-sm font-black text-gold-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">
          Approach
        </h2>

        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-tight">
          How I Improve <br />Web Performance
        </h3>

        <div className="space-y-5 sm:space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
          <p>
            I approach websites and web applications as performance systems. Every issue—slow load times, user drop-off, or low conversion—comes from something measurable. My focus is identifying where things break down and fixing them in a way that improves both user experience and outcomes.
          </p>

          <p>
            My work combines frontend development, analytics, and optimization. I use tools like GA4, event tracking, and performance monitoring to understand how users interact with a product, then prioritize changes that reduce friction and improve flow.
          </p>

          <p>
            I’ve worked in environments where performance and reliability matter, including Verizon and CSTE. In those settings, I focus on making improvements without introducing risk—ensuring systems stay stable while getting faster and more efficient.
          </p>

          <p>
            The goal is simple: build and optimize systems that are fast, reliable, and continuously improving based on real data.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {[
          {
            title: 'Diagnose',
            desc: 'Analyze performance, user behavior, and funnel data to identify bottlenecks, drop-off points, and system inefficiencies.',
            icon: '◈'
          },
          {
            title: 'Optimize',
            desc: 'Improve speed, user flows, and technical structure through frontend changes, API optimization, and SEO improvements.',
            icon: '✧'
          },
          {
            title: 'Measure & Iterate',
            desc: 'Track results through analytics and experimentation, validate improvements, and continuously refine performance over time.',
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