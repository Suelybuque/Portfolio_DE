import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { codeToHtml } from "shiki";
import { mdxComponents } from "@/components/mdx/mdx-components";

const prettyCodeOptions = {
  theme: "github-dark-default",
  keepBackground: false,
  defaultLang: "plaintext",
} as const;

export async function renderMdx(source: string) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
    },
  });

  return content;
}

export async function highlightCode(code: string, language: string) {
  try {
    return await codeToHtml(code.trim(), {
      lang: language,
      theme: "github-dark-default",
    });
  } catch {
    return await codeToHtml(code.trim(), {
      lang: "plaintext",
      theme: "github-dark-default",
    });
  }
}
