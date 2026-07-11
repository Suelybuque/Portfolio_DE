import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-10 scroll-mt-24 text-2xl font-bold tracking-tight text-foreground first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "mt-4 text-base leading-relaxed text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        "mt-4 list-disc space-y-2 pl-5 text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        "mt-4 list-decimal space-y-2 pl-5 text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),
  a: ({ className, href, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={cn(
            "font-medium text-foreground underline underline-offset-4 hover:opacity-80",
            className
          )}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className={cn(
          "font-medium text-foreground underline underline-offset-4 hover:opacity-80",
          className
        )}
        {...props}
      />
    );
  },
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-foreground/20 pl-4 italic text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-10 border-border", className)} {...props} />
  ),
  strong: ({ className, ...props }) => (
    <strong className={cn("font-semibold text-foreground", className)} {...props} />
  ),
  code: ({ className, ...props }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return <code className={className} {...props} />;
    }
    return (
      <code
        className={cn(
          "rounded bg-muted px-1.5 py-0.5 font-mono text-[0.875em] text-foreground",
          className
        )}
        {...props}
      />
    );
  },
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mt-6 overflow-x-auto rounded-xl border border-border bg-navy p-4 text-sm text-navy-foreground",
        className
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }) => (
    <div className="mt-6 overflow-x-auto">
      <table
        className={cn("w-full border-collapse text-sm", className)}
        {...props}
      />
    </div>
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border-b border-border px-3 py-2 text-left font-semibold text-foreground",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border-b border-border px-3 py-2 text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
};
