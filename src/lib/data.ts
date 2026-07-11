import type {
  Certification,
  ExperienceItem,
  SkillCategory,
} from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "snowflake",
    role: "Senior Data Engineer",
    company: "Snowflake Computing",
    location: "London, UK",
    start: "2021",
    end: "Present",
    description:
      "Designed multi-region ELT platforms processing 800TB+/day. Led migration from legacy Hive warehouses to Snowflake with dbt, cutting TCO by 35% while improving p95 query latency from 12s to 1.8s.",
  },
  {
    id: "databricks",
    role: "Data Platform Engineer",
    company: "Databricks",
    location: "Amsterdam, NL",
    start: "2019",
    end: "2021",
    description:
      "Built Lakehouse reference architectures on Delta Lake for Fortune 500 clients. Automated medallion pipelines with Spark Structured Streaming and Unity Catalog, enabling governed self-serve analytics across 40+ domains.",
  },
  {
    id: "stripe",
    role: "Data Engineer",
    company: "Stripe",
    location: "Remote / EU",
    start: "2017",
    end: "2019",
    description:
      "Owned payment event pipelines on Kafka and Flink with exactly-once semantics. Reduced reconciliation lag from hours to under 90 seconds and introduced schema registry contracts that eliminated 95% of downstream breakage.",
  },
  {
    id: "booking",
    role: "Analytics Engineer",
    company: "Booking.com",
    location: "Amsterdam, NL",
    start: "2015",
    end: "2017",
    description:
      "Modeled dimensional marts for marketplace pricing and supply forecasting. Partnered with ML teams to productionize feature stores serving 200+ models with sub-minute freshness SLAs.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "code",
    skills: ["Python", "Scala", "SQL", "TypeScript", "Bash"],
  },
  {
    id: "storage",
    title: "Storage",
    icon: "database",
    skills: ["Snowflake", "Delta Lake", "BigQuery", "PostgreSQL", "Redis"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: "cloud",
    skills: ["AWS", "Kubernetes", "Terraform", "Docker", "GCP"],
  },
  {
    id: "ecosystem",
    title: "Ecosystem",
    icon: "layers",
    skills: ["Apache Spark", "Kafka", "Airflow", "dbt", "Flink"],
  },
];

export const certifications: Certification[] = [
  {
    id: "aws-sap",
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: "aws",
  },
  {
    id: "databricks-de",
    name: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    date: "2023",
    icon: "databricks",
  },
  {
    id: "snowflake-arch",
    name: "SnowPro Advanced: Architect",
    issuer: "Snowflake",
    date: "2023",
    icon: "snowflake",
  },
  {
    id: "gcp-de",
    name: "Google Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2022",
    icon: "gcp",
  },
];
