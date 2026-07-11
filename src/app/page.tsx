import { HeroSection } from "@/components/home/hero";
import { ProjectsSection } from "@/components/home/projects";
import { AboutSection } from "@/components/home/about";
import { ExperienceSection } from "@/components/home/experience";
import { SkillsSection } from "@/components/home/skills";
import { InsightsSection } from "@/components/home/insights";
import { CtaSection } from "@/components/home/cta";
import { ContactFormSection } from "@/components/home/contact-form";
import { getFeaturedProjects, getRecentPosts } from "@/lib/content";
import {
  certifications,
  experience,
  skillCategories,
} from "@/lib/data";

export default function HomePage() {
  const projects = getFeaturedProjects().map((p) => p.frontmatter);
  const posts = getRecentPosts(3).map((p) => p.frontmatter);

  return (
    <>
      <HeroSection />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <ExperienceSection items={experience} />
      <SkillsSection categories={skillCategories} />
      <InsightsSection posts={posts} certifications={certifications} />
      <CtaSection />
      <ContactFormSection />
    </>
  );
}
