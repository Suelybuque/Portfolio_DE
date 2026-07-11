import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  language: string;
  filename?: string;
  highlightedHtml?: string;
  className?: string;
};

export function CodeBlock({
  code,
  language,
  filename,
  highlightedHtml,
  className,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-navy text-navy-foreground shadow-lg",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-2.5">
        <span className="font-mono text-xs text-white/60">
          {filename ?? language}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-white/40">
          {language}
        </span>
      </div>
      {highlightedHtml ? (
        <div
          className="overflow-x-auto p-4 text-sm leading-relaxed [&_pre]:m-0 [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:font-mono"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      ) : (
        <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-slate-100">
          <code>{code.trim()}</code>
        </pre>
      )}
    </div>
  );
}
