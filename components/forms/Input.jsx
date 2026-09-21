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

export function Input({ icon, suffix, invalid, disabled, size = "md", style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{
      ...fieldShell,
      height: size === "lg" ? "var(--control-h-lg)" : size === "sm" ? "var(--control-h-sm)" : "var(--control-h)",
      borderColor: invalid ? "var(--state-stop)" : focus ? "var(--border-focus)" : "var(--border-default)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      ...style,
    }}>
      {icon ? <Icon name={icon} size={17} style={{ color: "var(--text-subtle)" }} /> : null}
      <input
        disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ ...bareInput, color: disabled ? "var(--text-subtle)" : "var(--text-strong)" }} {...rest}
      />
      {suffix ? <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>{suffix}</span> : null}
    </span>
  );
}
