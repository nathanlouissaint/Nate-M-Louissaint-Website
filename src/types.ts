
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  points: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
