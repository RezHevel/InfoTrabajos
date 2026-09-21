import React from "react";
import { Icon } from "./Icon.jsx";

export function Rating({ value = 0, count, size = 15, showValue = true, style, ...rest }) {
  const stars = [0, 1, 2, 3, 4];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, ...style }} {...rest}>
      <span style={{ display: "inline-flex", gap: 1, color: "var(--hivis-500)" }} aria-label={value + " de 5"}>
        {stars.map((i) => {
          const fill = Math.max(0, Math.min(1, value - i));
          return (
            <span key={i} style={{ position: "relative", width: size, height: size, display: "block" }}>
              <Icon name="star" size={size} style={{ position: "absolute", inset: 0, color: "var(--slate-200)" }} />
              <span style={{ position: "absolute", inset: 0, width: fill * size, overflow: "hidden" }}>
                <Icon name="star" size={size} style={{ fill: "var(--hivis-500)", stroke: "var(--hivis-500)" }} />
              </span>
            </span>
          );
        })}
      </span>
      {showValue ? (
        <span style={{ font: "var(--type-label)", color: "var(--text-strong)", fontVariantNumeric: "tabular-nums" }}>
          {value.toFixed(1)}
        </span>
      ) : null}
      {count != null ? (
        <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>({count})</span>
      ) : null}
    </span>
  );
}
