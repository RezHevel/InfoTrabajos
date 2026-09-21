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

export function Select({ options = [], invalid, disabled, placeholder, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{
      ...fieldShell, position: "relative",
      borderColor: invalid ? "var(--state-stop)" : focus ? "var(--border-focus)" : "var(--border-default)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      ...style,
    }}>
      <select
        disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ ...bareInput, appearance: "none", cursor: disabled ? "not-allowed" : "pointer" }}
        {...rest}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((o) => {
          const value = typeof o === "string" ? o : o.value;
          const label = typeof o === "string" ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <Icon name="chevron-down" size={16} style={{ color: "var(--text-muted)" }} />
    </span>
  );
}
