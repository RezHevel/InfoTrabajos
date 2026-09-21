import React from "react";

export function Radio({ label, description, checked, disabled, name, onChange, style, ...rest }) {
  return (
    <label style={{
      display: "flex", gap: 10, alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, ...style,
    }} {...rest}>
      <input type="radio" name={name} checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 18, height: 18, flex: "none", marginTop: description ? 2 : 0,
        borderRadius: "var(--radius-circle)", display: "flex", alignItems: "center", justifyContent: "center",
        border: "var(--border-w) solid " + (checked ? "var(--brand)" : "var(--border-strong)"),
        background: "var(--surface-card)", transition: "var(--transition-control)",
      }}>
        {checked ? <span style={{ width: 9, height: 9, borderRadius: "var(--radius-circle)", background: "var(--brand)" }} /> : null}
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ font: "var(--type-body-sm)", color: "var(--text-strong)" }}>{label}</span>
        {description ? <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>{description}</span> : null}
      </span>
    </label>
  );
}

export function RadioGroup({ children, style, ...rest }) {
  return <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: 10, ...style }} {...rest}>{children}</div>;
}
