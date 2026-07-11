export const siteConfig = {
  name: "DataEngine",
  title: "DataEngine — Engineering Reliable Data Platforms",
  description:
    "Senior Data Engineer portfolio specializing in petabyte-scale data lakes, high-throughput ETL/ELT pipelines, and cloud-native distributed systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dataengine.io",
  ogImage: "/og.png",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "hello@dataengine.io",
    twitter: "https://twitter.com",
  },
  author: {
    name: "Alex Rivera",
    role: "Senior Data Engineer",
    location: "London, UK",
    yearsExperience: 8,
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Selected", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Stack", href: "/#stack" },
    { label: "Blog", href: "/#insights" },
    { label: "Contact", href: "/#contact" },
  ],
  resumeUrl: "/resume.pdf",
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
