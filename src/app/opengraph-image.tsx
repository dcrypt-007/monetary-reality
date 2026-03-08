import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Monetary Reality — Understanding Why Prices Rise";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#a8a29e",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            A Public Educational Resource
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#fafaf9",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            Monetary Reality
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#a8a29e",
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            Understanding why everything keeps getting more expensive — through data, history, and interactive tools.
          </div>
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 40,
              fontSize: 14,
              color: "#78716c",
              letterSpacing: "0.05em",
            }}
          >
            <span>monetaryreality.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
