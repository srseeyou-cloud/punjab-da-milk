import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const alt = `${brand.name}: farm-fresh A2 milk in glass bottles`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Share-card image for WhatsApp, Instagram and Google. Colours match tailwind.config.ts. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#1B4332",
          color: "#FDFCF7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 40 }}>
          <div style={{ width: 64, height: 64, borderRadius: 32, background: "#E9C46A" }} />
          {brand.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, maxWidth: 950 }}>Pure A2 milk, at your door before 7 AM.</div>
          <div style={{ fontSize: 32, color: "#E9C46A" }}>{brand.shortTagline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, opacity: 0.75 }}>{`Glass bottles · Lab-tested every batch · ${brand.domain}`}</div>
      </div>
    ),
    size,
  );
}
