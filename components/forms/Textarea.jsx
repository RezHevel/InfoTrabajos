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

export function Textarea({ rows = 4, invalid, disabled, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      rows={rows} disabled={disabled}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        ...fieldShell, height: "auto", display: "block", resize: "vertical",
        font: "var(--type-body)", color: "var(--text-strong)", padding: "10px 14px",
        outline: "none", lineHeight: 1.5,
        borderColor: invalid ? "var(--state-stop)" : focus ? "var(--border-focus)" : "var(--border-default)",
        boxShadow: focus ? "var(--focus-ring)" : "none",
        background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
        ...style,
      }}
      {...rest}
    />
  );
}
