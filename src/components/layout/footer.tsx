import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row sm:px-6 lg:px-8">
        <Link href="/" className="text-sm tracking-tight text-foreground">
          <span className="font-normal">data</span>
          <span className="font-bold">engine</span>
        </Link>

        <nav
          className="flex flex-wrap items-center justify-center gap-5"
          aria-label="Footer"
        >
          {siteConfig.nav.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-center text-xs text-muted-foreground sm:text-right">
          © {year} {siteConfig.name}. Built for performance.
        </p>
      </div>
    </footer>
  );
}
