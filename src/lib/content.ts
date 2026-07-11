import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogFrontmatter, ProjectFrontmatter } from "@/types";

const contentRoot = path.join(process.cwd(), "content");

function readMdxDirectory<T>(subdir: string): Array<{ frontmatter: T; content: string; slug: string }> {
  const dir = path.join(contentRoot, subdir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const slug = (data.slug as string) ?? file.replace(/\.mdx?$/, "");
      return {
        frontmatter: data as T,
        content,
        slug,
      };
    });
}

export function getAllProjects(): Array<{
  frontmatter: ProjectFrontmatter;
  content: string;
  slug: string;
}> {
  return readMdxDirectory<ProjectFrontmatter>("projects").sort(
    (a, b) => a.frontmatter.order - b.frontmatter.order
  );
}

export function getFeaturedProjects() {
  return getAllProjects().filter((p) => p.frontmatter.featured);
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((p) => p.slug === slug) ?? null;
}

export function getAllPosts(): Array<{
  frontmatter: BlogFrontmatter;
  content: string;
  slug: string;
}> {
  return readMdxDirectory<BlogFrontmatter>("blog")
    .map((post) => ({
      ...post,
      frontmatter: {
        ...post.frontmatter,
        readingTime:
          post.frontmatter.readingTime ??
          readingTime(post.content).text,
      },
    }))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getRecentPosts(limit = 3) {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}
