export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectChallenge = {
  title: string;
  description: string;
};

export type PipelineStep = {
  number: number;
  title: string;
  description: string;
};

export type ProjectResult = {
  type: "success" | "insight";
  text: string;
};

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  date: string;
  technologies: string[];
  tags: string[];
  featured: boolean;
  order: number;
  github?: string;
  demo?: string;
  diagram: "data-lake" | "streaming" | "warehouse";
  metrics: ProjectMetric[];
  challenge: {
    summary: string;
    cards: ProjectChallenge[];
  };
  pipeline: {
    summary: string;
    steps: PipelineStep[];
    callout: string;
    code: {
      filename: string;
      language: string;
      content: string;
    };
  };
  results: {
    successes: string[];
    insights: string[];
  };
  gallery?: string[];
};

export type BlogFrontmatter = {
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime?: string;
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: "code" | "database" | "cloud" | "layers";
  skills: string[];
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  icon: "aws" | "databricks" | "snowflake" | "gcp";
};
