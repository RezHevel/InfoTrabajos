import React from "react";
import { Icon } from "./Icon.jsx";

const ibSizes = { sm: 32, md: 40, lg: 48 };
const ibVariants = {
  plain: { background: "transparent", color: "var(--text-muted)", borderColor: "transparent" },
  outline: { background: "var(--surface-card)", color: "var(--text-strong)", borderColor: "var(--border-default)" },
  solid: { background: "var(--brand)", color: "var(--text-on-brand)", borderColor: "transparent" },
};

export function IconButton({ icon, label, variant = "plain", size = "md", badge, disabled, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const px = ibSizes[size];
  return (
    <button
      type="button" aria-label={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", width: px, height: px, display: "inline-flex",
        alignItems: "center", justifyContent: "center",
        border: "var(--border-w) solid transparent", borderRadius: "var(--radius-2)",
        cursor: disabled ? "not-allowed" : "pointer", transition: "var(--transition-control)",
        ...ibVariants[variant],
        ...(hover && !disabled
          ? variant === "solid"
            ? { background: "var(--brand-hover)" }
            : { background: "var(--surface-hover)", color: "var(--text-strong)" }
          : null),
        ...(disabled ? { color: "var(--text-subtle)" } : null),
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={size === "sm" ? 16 : 20} />
      {badge ? (
        <span style={{
          position: "absolute", top: 6, right: 6, minWidth: 8, height: 8,
          borderRadius: "var(--radius-pill)", background: "var(--brand)",
          boxShadow: "0 0 0 2px var(--surface-card)",
        }} />
      ) : null}
    </button>
  );
}
