import { CaseStudy, Experience, Skill } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cste-dashboards',
    title: 'National Surveillance Data Dashboards',
    category: 'Product Engineering',
    client: 'Council of State and Territorial Epidemiologists',
    description:
      'Built and maintained React-based dashboards used to analyze national surveillance data across public health reporting environments. Focused on front-end scalability, data accessibility, and production reliability for high-traffic reporting workflows.',
    metric: '40%',
    metricLabel: 'Page Load Performance Improvement',
    tags: ['React', 'Dashboards', 'REST APIs']
  },
  {
    id: 'cste-performance',
    title: 'Performance & Monitoring Infrastructure',
    category: 'Performance Engineering',
    client: 'Council of State and Territorial Epidemiologists',
    description:
      'Improved application performance through REST API optimization, caching strategies, and performance profiling. Implemented analytics and monitoring workflows to track reliability, user behavior, and reporting platform stability.',
    metric: '40%',
    metricLabel: 'Performance Improvement',
    tags: ['Caching', 'Monitoring', 'Analytics']
  },
  {
    id: 'verizon-experimentation',
    title: 'Digital Experimentation & Journey Analysis',
    category: 'Analytics Systems',
    client: 'Verizon',
    description:
      'Supported experimentation and digital optimization initiatives by analyzing customer journey data, identifying workflow friction, and validating UX improvements through structured testing and attribution analysis across digital channels.',
    metric: 'A/B Testing',
    metricLabel: 'Experimentation Framework',
    tags: ['A/B Testing', 'Journey Analysis', 'Attribution']
  },
  {
    id: 'ai-studymate',
    title: 'AI StudyMate',
    category: 'Full-Stack Application',
    client: 'Independent Project',
    description:
      'Built a full-stack web application that enables students to upload notes and automatically generate flashcards and trick-question quizzes using AI. Designed to reinforce comprehension through interactive study workflows and applied AI integration.',
    metric: '3rd Place',
    metricLabel: 'Project Competition Finish',
    tags: ['Full-Stack', 'AI Integration', 'Web App']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'Council of State and Territorial Epidemiologists (CSTE)',
    role: 'Web Operations Manager / Front-End Engineer',
    period: 'Jul 2022 - Dec 2024',
    points: [
      'Built and maintained React-based dashboards enabling epidemiologists to analyze national surveillance data.',
      'Improved page load performance by 40% through REST API optimization, caching strategies, and performance profiling.',
      'Implemented analytics and monitoring workflows to track system reliability and user behavior across reporting platforms.',
      'Partnered with product and UX teams to analyze user journeys and improve usability and data accessibility.',
      'Supported production deployments and release cycles for stable high-traffic public health applications.'
    ]
  },
  {
    id: 'exp2',
    company: 'Verizon',
    role: 'Customer Experience & Digital Optimization',
    period: 'Jan 2020 - Jun 2022',
    points: [
      'Executed A/B testing initiatives to evaluate product and UX improvements before production rollout.',
      'Analyzed customer journey data to identify friction points and drop-off areas across digital workflows.',
      'Collaborated with engineering and UX teams to validate changes and maintain platform stability during experiments.',
      'Built attribution models integrating paid, organic, and lifecycle marketing data to support investment decisions.'
    ]
  },
  {
    id: 'exp3',
    company: 'Mircaonus Streetwear',
    role: 'E-commerce Founder',
    period: 'Jan 2025 - Jun 2025',
    points: [
      'Built and launched a direct-to-consumer e-commerce brand using Shopify.',
      'Designed marketing funnels across customer awareness stages to support acquisition and conversion.',
      'Conducted SEO keyword research using Ahrefs to improve organic traffic acquisition.',
      'Managed paid acquisition campaigns across Meta Ads and Google Ads.',
      'Analyzed campaign and user behavior data to optimize conversion performance.'
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Product Development',
    items: [
      'React',
      'Next.js',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'REST APIs'
    ]
  },
  {
    category: 'Analytics & Experimentation',
    items: [
      'GA4',
      'Event Tracking',
      'Funnel Analysis',
      'User Behavior Analysis',
      'A/B Testing',
      'Hotjar',
      'Attribution Modeling'
    ]
  },
  {
    category: 'Performance & Infrastructure',
    items: [
      'Core Web Vitals (LCP, CLS, INP)',
      'Caching Strategies',
      'API Optimization',
      'Performance Profiling',
      'Deployment Workflows',
      'CI/CD Support',
      'Web Monitoring Tools'
    ]
  },
  {
    category: 'Growth Systems',
    items: [
      'Technical SEO',
      'Keyword Research (Ahrefs)',
      'Conversion Funnels',
      'Google Ads',
      'Meta Ads',
      'Content Strategy',
      'Marketing Automation'
    ]
  },
  {
    category: 'Platforms & Tools',
    items: [
      'Shopify',
      'Git',
      'Dashboards',
      'Analytics Reporting',
      'Production Monitoring'
    ]
  }
];