import React from "react";

export function Tooltip({ label, placement = "top", children, style, ...rest }) {
  const [show, setShow] = React.useState(false);
  const pos = placement === "bottom"
    ? { top: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" }
    : { bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" };
  return (
    <span
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}
      {...rest}
    >
      {children}
      {show ? (
        <span role="tooltip" style={{
          position: "absolute", ...pos, whiteSpace: "nowrap", zIndex: 30,
          background: "var(--surface-inverse)", color: "var(--text-on-inverse)",
          font: "var(--type-caption)", padding: "5px 8px", borderRadius: "var(--radius-1)",
          boxShadow: "var(--shadow-2)", pointerEvents: "none",
        }}>{label}</span>
      ) : null}
    </span>
  );
}
