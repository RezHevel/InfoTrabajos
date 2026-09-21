import React from "react";

/* The brand mark is a real asset: assets/logo-infotrabajos.png (lockup),
   logo-mark.png (handshake/heart symbol) and logo-wordmark.png (InfoTrabajos +
   tagline). Never redraw or recolor it. On dark surfaces place the mark on a
   light tile — the navy half of the logo disappears on navy. */
const ASSETS = { lockup: "logo-infotrabajos.png", mark: "logo-mark.png", word: "logo-wordmark.png", "word-only": "logo-word-only.png" };
const RATIO = { lockup: 1536 / 1024, mark: 696 / 658, word: 1438 / 296, "word-only": 1438 / 240 };

export function Logotype({ variant = "word-only", height = 22, base = "assets", tile, style, ...rest }) {
  const src = base.replace(/\/$/, "") + "/" + ASSETS[variant];
  const img = (
    <img
      src={src} alt="InfoTrabajos" height={height} width={Math.round(height * RATIO[variant])}
      style={{ display: "block", height, width: "auto" }}
    />
  );
  if (!tile) return <span style={{ display: "inline-flex", alignItems: "center", ...style }} {...rest}>{img}</span>;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      background: "var(--slate-0)", borderRadius: "var(--radius-3)",
      padding: Math.round(height * 0.22), boxShadow: "var(--shadow-1)", ...style,
    }} {...rest}>{img}</span>
  );
}
