import { cn } from "@/lib/utils";

type DiagramProps = {
  className?: string;
};

export function DataLakeDiagram({ className }: DiagramProps) {
  return (
    <svg
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <rect
        x="20"
        y="30"
        width="70"
        height="44"
        rx="8"
        className="fill-muted stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="20"
        y="106"
        width="70"
        height="44"
        rx="8"
        className="fill-muted stroke-border"
        strokeWidth="1.5"
      />
      <circle
        cx="160"
        cy="90"
        r="36"
        className="fill-foreground"
      />
      <path
        d="M148 90c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12"
        className="stroke-background"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M160 78v24M148 90h24"
        className="stroke-background"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <rect
        x="230"
        y="30"
        width="70"
        height="44"
        rx="8"
        className="fill-muted stroke-border"
        strokeWidth="1.5"
      />
      <rect
        x="230"
        y="106"
        width="70"
        height="44"
        rx="8"
        className="fill-muted stroke-border"
        strokeWidth="1.5"
      />
      <path
        d="M90 52H124M90 128H124M196 52H230M196 128H230"
        className="stroke-muted-foreground"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <text x="55" y="56" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        S3
      </text>
      <text x="55" y="132" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        EMR
      </text>
      <text x="160" y="94" textAnchor="middle" className="fill-background" fontSize="10" fontWeight="600">
        Spark
      </text>
      <text x="265" y="56" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        Delta
      </text>
      <text x="265" y="132" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        BI
      </text>
    </svg>
  );
}

export function StreamingDiagram({ className }: DiagramProps) {
  return (
    <svg
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <rect x="24" y="68" width="56" height="44" rx="8" className="fill-muted stroke-border" strokeWidth="1.5" />
      <rect x="108" y="40" width="48" height="28" rx="6" className="fill-foreground" />
      <rect x="108" y="76" width="48" height="28" rx="6" className="fill-foreground" />
      <rect x="108" y="112" width="48" height="28" rx="6" className="fill-foreground" />
      <rect x="184" y="58" width="64" height="64" rx="12" className="fill-muted stroke-border" strokeWidth="1.5" />
      <rect x="272" y="68" width="28" height="44" rx="6" className="fill-foreground" />
      <path
        d="M80 90H108M156 54H184M156 90H184M156 126H184M248 90H272"
        className="stroke-muted-foreground"
        strokeWidth="1.5"
      />
      <text x="52" y="94" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        Prod
      </text>
      <text x="132" y="58" textAnchor="middle" className="fill-background" fontSize="8">
        K
      </text>
      <text x="132" y="94" textAnchor="middle" className="fill-background" fontSize="8">
        K
      </text>
      <text x="132" y="130" textAnchor="middle" className="fill-background" fontSize="8">
        K
      </text>
      <text x="216" y="94" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="600">
        Flink
      </text>
    </svg>
  );
}

export function WarehouseDiagram({ className }: DiagramProps) {
  return (
    <svg
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <rect x="40" y="40" width="240" height="100" rx="12" className="fill-muted stroke-border" strokeWidth="1.5" />
      <rect x="60" y="60" width="60" height="60" rx="8" className="fill-background stroke-border" strokeWidth="1.5" />
      <rect x="130" y="60" width="60" height="60" rx="8" className="fill-foreground" />
      <rect x="200" y="60" width="60" height="60" rx="8" className="fill-background stroke-border" strokeWidth="1.5" />
      <text x="90" y="94" textAnchor="middle" className="fill-muted-foreground" fontSize="10">
        RAW
      </text>
      <text x="160" y="94" textAnchor="middle" className="fill-background" fontSize="10" fontWeight="600">
        dbt
      </text>
      <text x="230" y="94" textAnchor="middle" className="fill-muted-foreground" fontSize="10">
        MART
      </text>
    </svg>
  );
}

export function ArchitectureDiagram({
  type,
  className,
}: {
  type: "data-lake" | "streaming" | "warehouse";
  className?: string;
}) {
  switch (type) {
    case "streaming":
      return <StreamingDiagram className={className} />;
    case "warehouse":
      return <WarehouseDiagram className={className} />;
    default:
      return <DataLakeDiagram className={className} />;
  }
}
