import React from "react";
import { Icon } from "./Icon.jsx";

export function Tag({ selected, icon, onRemove, onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return (
    <span
      onClick={onClick} role={interactive ? "button" : undefined} tabIndex={interactive ? 0 : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        font: "var(--type-label)", height: 30, padding: "0 10px",
        borderRadius: "var(--radius-pill)", cursor: interactive ? "pointer" : "default",
        transition: "var(--transition-control)",
        border: "var(--border-w) solid " + (selected ? "var(--blue-500)" : "var(--border-default)"),
        background: selected ? "var(--brand-soft)" : hover && interactive ? "var(--surface-hover)" : "var(--surface-card)",
        color: selected ? "var(--blue-700)" : "var(--text-body)",
        ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      {children}
      {onRemove ? (
        <Icon name="x" size={14} style={{ marginRight: -2, opacity: 0.7 }} onClick={(e) => { e.stopPropagation(); onRemove(e); }} />
      ) : null}
    </span>
  );
}
