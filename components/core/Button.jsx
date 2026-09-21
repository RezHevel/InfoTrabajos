import React from "react";
import { Icon } from "./Icon.jsx";

const btnBase = {
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
  font: "var(--type-button)", letterSpacing: "var(--track-label)",
  border: "var(--border-w) solid transparent", borderRadius: "var(--radius-2)",
  padding: "var(--inset-control)", cursor: "pointer", textDecoration: "none",
  transition: "var(--transition-control)", whiteSpace: "nowrap",
};
const btnSizes = {
  sm: { height: "var(--control-h-sm)", font: "var(--type-button-sm)", padding: "0 10px" },
  md: { height: "var(--control-h)" },
  lg: { height: "var(--control-h-lg)", padding: "0 20px", font: "var(--type-h4)" },
  touch: { height: "var(--control-h-touch)", padding: "0 20px", font: "var(--type-h4)" },
};
const btnVariants = {
  primary: { background: "var(--brand)", color: "var(--text-on-brand)" },
  secondary: { background: "var(--surface-card)", color: "var(--text-strong)", borderColor: "var(--border-default)" },
  ghost: { background: "transparent", color: "var(--text-strong)" },
  accent: { background: "var(--accent)", color: "var(--text-on-accent)" },
  danger: { background: "var(--state-stop)", color: "var(--slate-0)" },
  link: { background: "transparent", color: "var(--text-link)", padding: 0, height: "auto", textDecoration: "underline", textUnderlineOffset: "2px" },
};
const btnHover = {
  primary: { background: "var(--brand-hover)" },
  secondary: { background: "var(--surface-hover)", borderColor: "var(--border-strong)" },
  ghost: { background: "var(--surface-hover)" },
  accent: { background: "var(--hivis-300)" },
  danger: { background: "var(--stop-700)" },
  link: { color: "var(--text-link-hover)" },
};

export function Button({
  variant = "primary", size = "md", icon, iconAfter, block, disabled,
  loading, as = "button", children, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const css = {
    ...btnBase, ...btnSizes[size], ...btnVariants[variant],
    ...(hover && !disabled ? btnHover[variant] : null),
    ...(block ? { display: "flex", width: "100%" } : null),
    ...(disabled || loading
      ? { background: variant === "ghost" || variant === "link" ? "transparent" : "var(--surface-disabled)",
          color: "var(--text-subtle)", borderColor: "transparent", cursor: "not-allowed" }
      : null),
    ...style,
  };
  return (
    <Tag
      style={css} disabled={Tag === "button" ? disabled || loading : undefined}
      aria-busy={loading || undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {icon ? <Icon name={icon} size={size === "sm" ? 16 : 18} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={size === "sm" ? 16 : 18} /> : null}
    </Tag>
  );
}
