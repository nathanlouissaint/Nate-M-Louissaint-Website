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
    role: 'Senior Growth Marketing & Analytics Manager',
    company: 'Council of State and Territorial Epidemiologists (CSTE)',
    points: [
      'Designed and maintained executive-level and program-level Power BI dashboards to monitor digital engagement, campaign performance, and resource utilization supporting epidemiologists and public health leadership.',
      'Built reusable SQL queries and structured reporting tables by joining GA4, CRM, and paid media datasets to create standardized views for downstream analytics applications.',
      'Managed GA4 and Google Tag Manager implementation, including event mapping, data layer validation, UTM taxonomy governance, and conversion tracking accuracy across digital properties.',
      'Established automated data refresh processes and governed BI workspaces to ensure reliable reporting and reduced manual reporting time.',
      'Performed funnel and behavioral flow analysis to identify drop-off points, resulting in an 18% increase in web conversion rates.',
    ],
  },
  {
    id: 'verizon-2020-2022',
    period: 'January 2020 – June 2022',
    role: 'Growth Marketing & Web Analytics Specialist',
    company: 'Verizon',
    points: [
      'Monitored and reported on enterprise web performance metrics including traffic acquisition, behavioral flow, funnel performance, and conversion analytics.',
      'Developed SQL-driven analyses to evaluate acquisition trends, campaign contribution, and user experience friction points.',
      'Integrated advertising platform data (Google Marketing Platform, Meta Ads) into centralized reporting frameworks for cross-channel performance analysis.',
      'Built attribution models integrating paid, organic, and lifecycle data to support strategic marketing investment decisions.',
    ],
  },
  {
    id: 'ai-studymate-2024',
    period: 'Sep 2024',
    role: 'AI StudyMate | Full-Stack Web App (3rd Place Finish)',
    company: 'PROJECTGPC / NAPA',
    points: [
      'Implemented end-to-end event tracking and structured data tables to support funnel reporting and performance monitoring.',
      'Designed analytics tracking architecture to monitor user behavior and optimize conversion pathways.',
      'Maintained system uptime and ensured data accuracy during live testing and deployment.',
    ],
  },
  {
    id: 'shopify-2025',
    period: 'Jan 2025 – Jun 2025',
    role: 'E-Commerce Store Development & Optimization (Independent Project)',
    company: 'Remote',
    points: [
      'Built and operated a fully functional Shopify e-commerce store, managing analytics implementation, GA4 tracking, conversion funnel optimization, checkout flow performance, payment integrations, and lifecycle automation.',
      'Applied structured A/B testing and behavioral analytics to improve conversion rate and average order value while maintaining operational and reporting accuracy.',
    ],
  },
];

export const Results: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-xs font-black text-gold-500 uppercase tracking-[0.4em] mb-6">
          Impact History
        </h2>
        <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
          In-House Impact
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