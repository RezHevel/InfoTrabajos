import React from "react";
import { Icon } from "../core/Icon.jsx";

const toastTones = {
  neutral: { icon: "info", color: "var(--text-strong)", bg: "var(--surface-inverse)", fg: "var(--text-on-inverse)" },
  go: { icon: "circle-check", bg: "var(--go-500)", fg: "var(--slate-0)" },
  stop: { icon: "circle-alert", bg: "var(--state-stop)", fg: "var(--slate-0)" },
};

export function Toast({ tone = "neutral", children, action, onClose, style, ...rest }) {
  const t = toastTones[tone];
  return (
    <div role="status" style={{
      display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
      background: t.bg, color: t.fg, borderRadius: "var(--radius-2)",
      boxShadow: "var(--shadow-3)", font: "var(--type-body-sm)", maxWidth: 420, ...style,
    }} {...rest}>
      <Icon name={t.icon} size={18} />
      <span style={{ flex: 1 }}>{children}</span>
      {action ? (
        <button type="button" onClick={action.onClick} style={{
          border: 0, background: "transparent", color: "inherit", font: "var(--type-label)",
          textDecoration: "underline", cursor: "pointer", padding: 0,
        }}>{action.label}</button>
      ) : null}
      {onClose ? (
        <button type="button" onClick={onClose} aria-label="Cerrar" style={{
          border: 0, background: "transparent", color: "inherit", opacity: 0.7, cursor: "pointer", display: "flex", padding: 0,
        }}><Icon name="x" size={16} /></button>
      ) : null}
    </div>
  );
}
