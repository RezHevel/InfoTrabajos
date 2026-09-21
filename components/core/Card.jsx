import React from "react";

export function Card({ as = "div", padding = "md", interactive, flush, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const pads = { none: 0, sm: "12px", md: "var(--inset-card)", lg: "var(--inset-card-lg)" };
  return (
    <Tag
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--surface-card)",
        border: "var(--border-w) solid var(--border-default)",
        borderRadius: "var(--radius-3)",
        padding: flush ? 0 : pads[padding],
        boxShadow: interactive && hover ? "var(--shadow-2)" : "var(--shadow-1)",
        borderColor: interactive && hover ? "var(--border-strong)" : "var(--border-default)",
        transition: "box-shadow var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard)",
        cursor: interactive ? "pointer" : undefined,
        overflow: "hidden", ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function CardSection({ children, style, ...rest }) {
  return (
    <div style={{ padding: "var(--inset-card)", borderTop: "var(--rule-w) solid var(--border-hairline)", ...style }} {...rest}>
      {children}
    </div>
  );
}
