import React from "react";
import { Icon } from "../core/Icon.jsx";

export function TopBar({ title, back, onBack, actions, subtitle, sticky = true, style, ...rest }) {
  return (
    <header style={{
      display: "flex", alignItems: "center", gap: 10, minHeight: 52,
      padding: "8px 12px", background: "var(--bar-veil)",
      backdropFilter: "var(--blur-bar)", WebkitBackdropFilter: "var(--blur-bar)",
      boxShadow: "var(--shadow-sticky)",
      position: sticky ? "sticky" : "static", top: 0, zIndex: 5, ...style,
    }} {...rest}>
      {back ? (
        <button type="button" onClick={onBack} aria-label="Volver" style={{
          border: 0, background: "transparent", cursor: "pointer", color: "var(--text-strong)",
          display: "flex", padding: 6, marginLeft: -6,
        }}>
          <Icon name="chevron-left" size={22} />
        </button>
      ) : null}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ font: "var(--type-h3)", color: "var(--text-strong)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</div>
        {subtitle ? <div style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>{subtitle}</div> : null}
      </div>
      {actions ? <div style={{ display: "flex", gap: 4, alignItems: "center" }}>{actions}</div> : null}
    </header>
  );
}
