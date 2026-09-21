import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Dialog({ open = true, title, description, onClose, footer, size = "md", sheet, children, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{
      position: "absolute", inset: 0, background: "var(--overlay-scrim)",
      display: "flex", alignItems: sheet ? "flex-end" : "center", justifyContent: "center",
      padding: sheet ? 0 : "var(--space-6)", zIndex: 40,
    }} onClick={onClose}>
      <div
        role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: sheet ? "none" : size === "sm" ? 380 : size === "lg" ? 640 : 480,
          background: "var(--surface-card)", boxShadow: "var(--shadow-4)",
          borderRadius: sheet ? "var(--radius-4) var(--radius-4) 0 0" : "var(--radius-4)",
          padding: "var(--inset-sheet)", ...style,
        }}
        {...rest}
      >
        {sheet ? (
          <div style={{ width: 36, height: 4, borderRadius: 2, background: "var(--slate-200)", margin: "-8px auto 14px" }} />
        ) : null}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: description ? 6 : 14 }}>
          <h3 style={{ font: "var(--type-h2)", flex: 1 }}>{title}</h3>
          {onClose && !sheet ? (
            <button type="button" onClick={onClose} aria-label="Cerrar" style={{
              border: 0, background: "transparent", cursor: "pointer", color: "var(--text-muted)", display: "flex", padding: 2,
            }}><Icon name="x" size={20} /></button>
          ) : null}
        </div>
        {description ? (
          <p style={{ font: "var(--type-body)", color: "var(--text-body)", marginBottom: 16 }}>{description}</p>
        ) : null}
        {children}
        {footer ? (
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 20 }}>{footer}</div>
        ) : null}
      </div>
    </div>
  );
}
