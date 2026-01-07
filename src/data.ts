
import { CaseStudy, Experience, Skill } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cste-audit',
    title: 'Enterprise-Scale Technical Audit',
    category: 'Technical SEO',
    client: 'Council of State and Territorial Epidemiologists',
    description: 'Conducted exhaustive site-wide audits to identify risks in indexability, accessibility, and search engine compliance for high-traffic public health platforms.',
    metric: '',
    metricLabel: 'Increase in Organic Visibility (Suggested)',
    tags: ['Site Audits', 'Compliance', 'Indexability']
  },
  {
    id: 'verizon-opt',
    title: 'Platform Structure Optimization',
    category: 'Enterprise SEO',
    client: 'Verizon',
    description: 'Reviewed and optimized enterprise website structures to align with SEO best practices, prioritizing remediation based on traffic exposure and business risk.',
    metric: '',
    metricLabel: 'Reduction in Technical Debt (Suggested)',
    tags: ['Enterprise Platforms', 'UX Signals', 'Remediation']
  },
  {
    id: 'paid-performance-optimization',
    title: 'Paid Search & Social Performance Optimization',
    category: 'Performance Marketing',
    client: 'CSTE',
    description:
      'Launched and optimized paid search and paid social campaigns to drive qualified acquisition while improving efficiency. Used performance data across targeting, queries, audiences, and landing pages to iterate on campaign structure, correct tracking gaps, and reduce wasted spend.',
    metric: '',
    metricLabel: 'Performance Optimization',
    tags: ['Google Ads', 'Meta Ads', 'Conversion Tracking', 'Landing Page Optimization']
  }
  
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'Council of State and Territorial Epidemiologists (CSTE)',
    role: 'Digital Platform Operations Manager (In-House)',
    period: 'Jan 2022 - Dec 2025',
    points: [
      'Conducted enterprise-scale content and site audits to identify SEO risks related to indexability and compliance.',
      'Analyzed user behavior data (GA4, Excel) to uncover traffic-impacting issues and translated insights into corrective actions.',
      'Investigated and resolved technical anomalies in collaboration with engineering teams, reducing repeat SEO incidents.',
      'Partnered cross-functionally to implement scalable governance and workflow improvements.'
    ]
  },
  {
    id: 'exp2',
    company: 'Verizon',
    role: 'Digital Operations & SEO Specialist (Enterprise Platforms)',
    period: 'May 2024 - Aug. 2024',
    points: [
      'Optimized enterprise website content and site structures for SEO and accessibility alignment.',
      'Identified technical SEO issues affecting crawlability, indexation, and user experience.',
      'Prioritized SEO-impacting issues based on traffic exposure and business risk profile.',
      'Analyzed performance trends to support cross-functional remediation efforts.'
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'SEO & Technical Foundation',
    items: [
      'Technical SEO Audits (Enterprise-Scale)',
      'Indexability & Crawl Efficiency',
      'Site Architecture & Internal Linking',
      'Accessibility & Search Compliance',
      'Page Experience & UX Signals'
    ]
  },
  {
    category: 'Analytics & Performance Intelligence',
    items: [
      'GA4 Implementation & Analysis',
  'Google Ads Performance Analysis',
  'Meta (Facebook) Ads Performance Insights',
  'Traffic & Conversion Diagnostics',
  'Performance Monitoring & Reporting',
  'Trend Analysis & Opportunity Identification',
  'Data-Informed Prioritization'
    ]
  },
  {
    category: 'Cross-Functional Operations',
    items: [
      'Engineering & SEO Collaboration',
      'Content Quality & Governance',
      'Risk Assessment & Mitigation',
      'Workflow Alignment Across Teams',
      'Compliance-Aware SEO Execution'
    ]
  }
  
];
