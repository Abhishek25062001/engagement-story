import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.name;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  const eventDateTime = `${siteConfig.event.displayDate} • ${siteConfig.event.displayTime}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fbf3e9",
        color: "#221c18",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          width: 840,
          height: 470,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(184, 138, 68, 0.42)",
          background: "#fffdf8",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#9c7438",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Engagement Ceremony
        </div>
        <div
          style={{
            marginTop: 34,
            fontSize: 84,
            lineHeight: 1,
          }}
        >
          Sudesh & Hemlata
        </div>
        <div
          style={{
            marginTop: 38,
            color: "#4a3d36",
            fontSize: 28,
          }}
        >
          {eventDateTime}
        </div>
      </div>
    </div>,
    size,
  );
}
