import { ImageResponse } from "next/og";
export const alt = "JeriFlow by Jerico Studio — Make room for better work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#FFFFFF",
        color: "#171717",
        padding: "70px 85px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30 }}
      >
        <div
          style={{
            border: "3px solid #171717",
            borderRadius: 16,
            padding: "8px 18px",
            fontWeight: 700,
          }}
        >
          J
        </div>
        <span>JeriFlow · by Jerico Studio</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 86,
          lineHeight: 1.05,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        <span>Make room for</span>
        <span>better work.</span>
      </div>
      <div style={{ display: "flex", fontSize: 25, color: "#565656" }}>
        A calm workspace for people who make things. · Product concept
      </div>
    </div>,
    size,
  );
}
