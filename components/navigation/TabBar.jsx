import React from "react";
import { Icon } from "../core/Icon.jsx";

export function TabBar({ items = [], value, onChange, style, ...rest }) {
  return (
    <nav style={{
      display: "flex", background: "var(--surface-card)",
      borderTop: "var(--border-w) solid var(--border-hairline)",
      paddingBottom: 6, ...style,
    }} {...rest}>
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value} onClick={() => onChange && onChange(it.value)} aria-current={active || undefined}
            style={{
              flex: 1, border: 0, background: "transparent", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              padding: "8px 0 4px", minHeight: 52,
              color: active ? "var(--brand)" : "var(--text-muted)",
              transition: "color var(--dur-fast) var(--ease-standard)",
            }}
          >
            <span style={{ position: "relative", display: "flex" }}>
              <Icon name={it.icon} size={22} strokeWidth={active ? 2.3 : 2} />
              {it.badge ? (
                <span style={{
                  position: "absolute", top: -2, right: -4, minWidth: 7, height: 7,
                  borderRadius: "var(--radius-pill)", background: "var(--brand)",
                }} />
              ) : null}
            </span>
            <span style={{ font: "var(--type-caption)", fontSize: 11, fontWeight: active ? 600 : 500 }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
