import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Checkbox({ label, description, checked, disabled, onChange, style, ...rest }) {
  return (
    <label style={{
      display: "flex", gap: 10, alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, ...style,
    }} {...rest}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 18, height: 18, flex: "none", marginTop: description ? 2 : 0,
        borderRadius: "var(--radius-1)", display: "flex", alignItems: "center", justifyContent: "center",
        border: "var(--border-w) solid " + (checked ? "var(--brand)" : "var(--border-strong)"),
        background: checked ? "var(--brand)" : "var(--surface-card)",
        color: "var(--text-on-brand)", transition: "var(--transition-control)",
      }}>
        {checked ? <Icon name="check" size={13} strokeWidth={3} /> : null}
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ font: "var(--type-body-sm)", color: "var(--text-strong)" }}>{label}</span>
        {description ? <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>{description}</span> : null}
      </span>
    </label>
  );
}
