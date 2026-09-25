import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — Full-stack Developer`;
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
          justifyContent: "center",
          padding: 80,
          background: "#0a0c10",
          color: "#e8eaed",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ fontSize: 32, marginTop: 16, color: "#3b9eff" }}>
          {profile.professionalTitle}
        </div>
        <div style={{ fontSize: 22, marginTop: 24, color: "#9ca3af" }}>
          {profile.primaryStack.join(" · ")}
        </div>
        <div style={{ fontSize: 20, marginTop: 32, color: "#b0b8c4" }}>
          {profile.relocationStatus}
        </div>
      </div>
    ),
    { ...size },
  );
}
