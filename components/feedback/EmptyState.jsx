import React from "react";
import { Icon } from "../core/Icon.jsx";

export function EmptyState({ icon = "search", title, description, action, style, ...rest }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
      gap: 8, padding: "var(--space-8) var(--space-6)", ...style,
    }} {...rest}>
      <span style={{
        width: 48, height: 48, borderRadius: "var(--radius-3)", background: "var(--surface-sunken)",
        border: "var(--border-w) solid var(--border-hairline)", color: "var(--text-subtle)",
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4,
      }}><Icon name={icon} size={22} /></span>
      <div style={{ font: "var(--type-h3)", color: "var(--text-strong)" }}>{title}</div>
      {description ? (
        <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)", maxWidth: 320, margin: 0 }}>{description}</p>
      ) : null}
      {action ? <div style={{ marginTop: 8 }}>{action}</div> : null}
    </div>
  );
}
