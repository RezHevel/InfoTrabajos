import React from "react";
import { Icon } from "../core/Icon.jsx";

export function StatTile({ label, value, delta, icon, tone = "neutral", style, ...rest }) {
  const up = delta && !String(delta).trim().startsWith("-");
  return (
    <div style={{
      background: "var(--surface-card)", border: "var(--border-w) solid var(--border-default)",
      borderRadius: "var(--radius-3)", padding: "14px 16px", display: "flex",
      flexDirection: "column", gap: 6, boxShadow: "var(--shadow-1)", ...style,
    }} {...rest}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, font: "var(--type-eyebrow)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>
        {icon ? <Icon name={icon} size={14} /> : null}{label}
      </div>
      <div style={{ font: "var(--type-display-3)", textTransform: "none", color: tone === "brand" ? "var(--brand)" : "var(--text-strong)", fontVariantNumeric: "tabular-nums" }}>{value}</div>
      {delta ? (
        <div style={{ display: "inline-flex", alignItems: "center", gap: 4, font: "var(--type-caption)", color: up ? "var(--go-500)" : "var(--state-stop)" }}>
          <Icon name="trending-up" size={13} style={{ transform: up ? "none" : "scaleY(-1)" }} />{delta}
        </div>
      ) : null}
    </div>
  );
}
