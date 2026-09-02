import { ImageResponse } from "next/og";

// Generated favicon: the NV monogram in the trust's navy and gold. Replace
// this file with an icon.png if the client supplies their seal artwork.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f2440",
          color: "#c2921f",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 0.5,
          borderRadius: 6,
        }}
      >
        NV
      </div>
    ),
    size
  );
}
