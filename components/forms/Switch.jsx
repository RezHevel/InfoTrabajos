import React from "react";

export function Switch({ checked, disabled, label, onChange, style, ...rest }) {
  return (
    <label style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, ...style,
    }} {...rest}>
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 40, height: 23, flex: "none", borderRadius: "var(--radius-pill)", padding: 2,
        background: checked ? "var(--go-500)" : "var(--slate-300)",
        transition: "background-color var(--dur-fast) var(--ease-standard)",
        display: "flex", justifyContent: checked ? "flex-end" : "flex-start",
      }}>
        <span style={{
          width: 19, height: 19, borderRadius: "var(--radius-circle)",
          background: "var(--slate-0)", boxShadow: "var(--shadow-1)",
        }} />
      </span>
      {label ? <span style={{ font: "var(--type-body-sm)", color: "var(--text-strong)" }}>{label}</span> : null}
    </label>
  );
}
