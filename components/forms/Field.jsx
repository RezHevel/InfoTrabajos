import React from "react";
import { Icon } from "../core/Icon.jsx";

const fieldShell = {
  display: "flex", alignItems: "center", gap: 8, width: "100%",
  background: "var(--surface-card)", border: "var(--border-w) solid var(--border-default)",
  borderRadius: "var(--radius-2)", padding: "var(--inset-control)",
  height: "var(--control-h)", transition: "var(--transition-control)",
};
const bareInput = {
  flex: 1, minWidth: 0, border: 0, outline: "none", background: "transparent",
  font: "var(--type-body)", color: "var(--text-strong)", padding: 0,
};

export function Field({ label, hint, error, required, htmlFor, children, style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", ...style }} {...rest}>
      {label ? (
        <label htmlFor={htmlFor} style={{ font: "var(--type-label)", color: "var(--text-strong)", letterSpacing: "var(--track-label)" }}>
          {label}
          {required ? <span style={{ color: "var(--state-stop)" }}> *</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, font: "var(--type-caption)", color: "var(--state-stop)" }}>
          <Icon name="circle-alert" size={13} />{error}
        </span>
      ) : hint ? (
        <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
