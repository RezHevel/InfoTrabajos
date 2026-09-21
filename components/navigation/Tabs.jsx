import React from "react";

export function Tabs({ items = [], value, onChange, style, ...rest }) {
  return (
    <div role="tablist" style={{
      display: "flex", gap: 2, borderBottom: "var(--rule-w) solid var(--border-hairline)", ...style,
    }} {...rest}>
      {items.map((it) => {
        const id = typeof it === "string" ? it : it.value;
        const label = typeof it === "string" ? it : it.label;
        const count = typeof it === "string" ? null : it.count;
        const active = id === value;
        return (
          <button
            key={id} role="tab" aria-selected={active} onClick={() => onChange && onChange(id)}
            style={{
              border: 0, background: "transparent", cursor: "pointer", padding: "10px 12px",
              font: "var(--type-label)", fontSize: 14, color: active ? "var(--text-strong)" : "var(--text-muted)",
              borderBottom: "var(--bar-w) solid " + (active ? "var(--brand)" : "transparent"),
              marginBottom: "calc(-1 * var(--rule-w))", transition: "var(--transition-control)",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}
          >
            {label}
            {count != null ? (
              <span style={{
                font: "var(--type-caption)", background: active ? "var(--brand-soft)" : "var(--surface-sunken)",
                color: active ? "var(--blue-700)" : "var(--text-muted)", padding: "1px 5px", borderRadius: "var(--radius-1)",
              }}>{count}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
