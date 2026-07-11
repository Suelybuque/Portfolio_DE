import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "-0.02em",
            color: "#0a0a0a",
          }}
        >
          <span style={{ fontWeight: 400 }}>data</span>
          <span style={{ fontWeight: 700 }}>engine</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "#0a0a0a",
              maxWidth: 900,
            }}
          >
            Engineering Reliable Data Platforms.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#71717a",
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            Petabyte-scale Lakehouses, streaming systems, and cloud warehouses.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
