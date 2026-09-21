import React from "react";
import { Icon } from "./Icon.jsx";

const avSizes = { xs: 24, sm: 32, md: 44, lg: 64, xl: 96 };

export function Avatar({ name, src, size = "md", trade, verified, style, ...rest }) {
  const px = avSizes[size];
  const initials = (name || "")
    .split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <span style={{ position: "relative", display: "inline-block", flex: "none", ...style }} {...rest}>
      <span
        aria-label={name}
        style={{
          width: px, height: px, borderRadius: "var(--radius-circle)", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: src ? "var(--surface-sunken)" : "var(--blue-100)",
          color: "var(--blue-700)", border: "var(--border-w) solid var(--border-hairline)",
          font: "var(--type-h4)", fontSize: Math.max(11, Math.round(px * 0.36)),
        }}
      >
        {src ? <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
             : trade ? <Icon name={trade} size={Math.round(px * 0.5)} /> : initials}
      </span>
      {verified ? (
        <span style={{
          position: "absolute", right: -2, bottom: -2, background: "var(--surface-card)",
          borderRadius: "var(--radius-circle)", padding: 1, color: "var(--go-500)", display: "flex",
        }}>
          <Icon name="badge-check" size={Math.max(12, Math.round(px * 0.34))} label="Verificado" />
        </span>
      ) : null}
    </span>
  );
}
