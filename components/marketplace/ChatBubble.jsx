import React from "react";

export function ChatBubble({ from = "them", time, read, children, style, ...rest }) {
  const mine = from === "me";
  return (
    <div style={{ display: "flex", justifyContent: mine ? "flex-end" : "flex-start", ...style }} {...rest}>
      <div style={{ maxWidth: "78%" }}>
        <div style={{
          background: mine ? "var(--blue-500)" : "var(--surface-card)",
          color: mine ? "var(--text-on-brand)" : "var(--text-strong)",
          border: mine ? "none" : "var(--border-w) solid var(--border-default)",
          borderRadius: mine ? "var(--radius-3) var(--radius-3) 3px var(--radius-3)" : "var(--radius-3) var(--radius-3) var(--radius-3) 3px",
          padding: "9px 12px", font: "var(--type-body-sm)", boxShadow: "var(--shadow-1)",
        }}>{children}</div>
        <div style={{
          font: "var(--type-caption)", fontSize: 11, color: "var(--text-subtle)",
          marginTop: 3, textAlign: mine ? "right" : "left",
        }}>{time}{mine && read ? " · Leído" : ""}</div>
      </div>
    </div>
  );
}
