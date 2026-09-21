import React from "react";
import { Icon } from "../core/Icon.jsx";

export function CategoryTile({ icon = "wrench", label, count, selected, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button" onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10,
        padding: "14px", cursor: "pointer", textAlign: "left", width: "100%",
        background: selected ? "var(--brand-soft)" : "var(--surface-card)",
        border: "var(--border-w) solid " + (selected ? "var(--blue-300)" : hover ? "var(--border-strong)" : "var(--border-default)"),
        borderRadius: "var(--radius-3)", transition: "var(--transition-control)",
        boxShadow: hover ? "var(--shadow-2)" : "var(--shadow-1)",
        ...style,
      }}
      {...rest}
    >
      <span style={{
        width: 36, height: 36, borderRadius: "var(--radius-2)",
        background: selected ? "var(--blue-100)" : "var(--surface-sunken)",
        color: selected ? "var(--blue-700)" : "var(--text-body)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}><Icon name={icon} size={20} /></span>
      <span>
        <span style={{ display: "block", font: "var(--type-h4)", color: "var(--text-strong)" }}>{label}</span>
        {count != null ? (
          <span style={{ display: "block", font: "var(--type-caption)", color: "var(--text-muted)", marginTop: 2 }}>
            {count} profesionales
          </span>
        ) : null}
      </span>
    </button>
  );
}
