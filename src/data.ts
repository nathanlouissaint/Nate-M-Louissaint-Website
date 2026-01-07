
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
    id: 'data-governance',
    title: 'Scalable Content Governance',
    category: 'Digital Operations',
    client: 'CSTE',
    description: 'Implemented cross-functional workflows between Engineering and Legal to strengthen content quality signals and long-term search trust.',
    metric: '',
    metricLabel: 'Efficiency in Content Updates (Suggested)',
    tags: ['Workflow Opt', 'Governance', 'Risk Mitigation']
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
    category: 'SEO & Technical',
    items: ['Technical SEO Audits', 'Indexability', 'Crawlability', 'Accessibility', 'UX Signals', 'Site Structure']
  },
  {
    category: 'Analytics & Data',
    items: ['GA4', 'Excel Analysis', 'Performance Monitoring', 'Root Cause Analysis', 'Trend Reporting']
  },
  {
    category: 'Ops & Governance',
    items: ['Enterprise Governance', 'Content Quality Control', 'Risk Mitigation', 'Workflow Optimization', 'Compliance']
  }
];
