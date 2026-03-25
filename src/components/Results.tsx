import React from 'react';

type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  points: string[];
};

const EXPERIENCES: Experience[] = [
  {
    id: 'cste-2022-2024',
    period: 'July 2022 – December 2024',
    role: 'Web Operations & Performance Manager',
    company: 'Council of State and Territorial Epidemiologists (CSTE)',
    points: [
      'Improved web conversion rates by 18% by analyzing user behavior, identifying drop-off points, and optimizing key user flows.',
      'Improved page load performance by optimizing API integrations and implementing caching strategies across high-traffic applications.',
      'Led GA4 and tracking implementation to ensure accurate measurement of user behavior, funnel performance, and conversion events.',
      'Monitored site performance and reliability, proactively identifying bottlenecks impacting user access to critical reporting systems.',
      'Worked cross-functionally with product, design, and engineering to improve usability, navigation, and overall user experience.',
    ],
  },
  {
    id: 'verizon-2020-2022',
    period: 'January 2020 – June 2022',
    role: 'Web Analytics & Optimization Specialist',
    company: 'Verizon',
    points: [
      'Analyzed user behavior, funnel performance, and traffic patterns to identify friction points across customer journeys.',
      'Supported A/B testing and experimentation by validating implementations and ensuring performance stability during rollout.',
      'Contributed to improving web experience quality by identifying risks and ensuring changes aligned with platform standards.',
      'Built reporting frameworks to track performance across acquisition channels and user lifecycle stages.',
    ],
  },
  {
    id: 'ai-studymate-2024',
    period: 'Sep 2024',
    role: 'Full-Stack Web Application (Performance Focus)',
    company: 'PROJECTGPC / NAPA',
    points: [
      'Built and deployed a full-stack application with focus on performance, stability, and user experience during live usage.',
      'Implemented event tracking and analytics to monitor user behavior and optimize engagement pathways.',
      'Maintained system uptime and ensured stable performance throughout live testing with zero downtime.',
    ],
  },
  {
    id: 'shopify-2025',
    period: 'Jan 2025 – Jun 2025',
    role: 'E-Commerce Performance & Optimization',
    company: 'Independent Project',
    points: [
      'Built and optimized a Shopify store with focus on conversion rate, checkout flow performance, and user experience.',
      'Implemented analytics tracking, funnel optimization, and A/B testing to improve conversion rate and average order value.',
      'Managed end-to-end performance including site behavior, payment flow, and lifecycle optimization.',
    ],
  },
];

export const Results: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-xs font-black text-gold-500 uppercase tracking-[0.4em] mb-6">
          Impact
        </h2>
        <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
          Performance & Results
        </h3>
      </div>

      <div className="relative space-y-20">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.id}
            className={`relative flex flex-col md:flex-row gap-12 ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:hidden absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gold-500 accent-border-gold" />

            <div className="md:w-1/2">
              <div className="glass-panel p-10 rounded-3xl accent-border-gold hover:bg-white/5 transition-all">
                <div className="flex flex-col mb-8">
                  <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                    {exp.period}
                  </span>
                  <h4 className="text-3xl font-black text-white tracking-tighter">
                    {exp.role}
                  </h4>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">
                    {exp.company}
                  </p>
                </div>

                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm font-light leading-relaxed flex gap-4"
                    >
                      <span className="text-gold-500 font-bold shrink-0">◈</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:w-1/2 flex items-center justify-center">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gold-500/20 bg-gold-500/5 flex items-center justify-center text-gold-500 text-xl font-serif">
                  0{idx + 1}
                </div>
                <div className="h-12 w-[1px] bg-white/10 mt-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};