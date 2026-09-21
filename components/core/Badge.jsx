import React from "react";
import { Icon } from "./Icon.jsx";

const badgeTones = {
  neutral: { background: "var(--surface-sunken)", color: "var(--text-body)", borderColor: "var(--border-default)" },
  brand: { background: "var(--brand-soft)", color: "var(--blue-700)", borderColor: "var(--brand-soft-border)" },
  go: { background: "var(--state-go-soft)", color: "var(--go-700)", borderColor: "transparent" },
  warn: { background: "var(--state-warn-soft)", color: "var(--warn-700)", borderColor: "transparent" },
  stop: { background: "var(--state-stop-soft)", color: "var(--stop-700)", borderColor: "transparent" },
  info: { background: "var(--state-info-soft)", color: "var(--sky-700)", borderColor: "transparent" },
  accent: { background: "var(--accent-soft)", color: "var(--hivis-700)", borderColor: "transparent" },
};

export function Badge({ tone = "neutral", icon, dot, children, style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        font: "var(--type-label)", letterSpacing: "var(--track-label)",
        padding: "3px 8px", borderRadius: "var(--radius-1)",
        border: "var(--border-w) solid transparent", ...badgeTones[tone], ...style,
      }}
      {...rest}
    >
      {dot ? <span style={{ width: 6, height: 6, borderRadius: "var(--radius-pill)", background: "currentColor" }} /> : null}
      {icon ? <Icon name={icon} size={13} /> : null}
      {children}
    </span>
  );
}
