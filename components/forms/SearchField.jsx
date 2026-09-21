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

export function SearchField({ placeholder = "Buscar oficio o servicio", location, onFilters, size = "lg", style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{
      ...fieldShell, height: size === "lg" ? "var(--control-h-lg)" : "var(--control-h)",
      borderRadius: "var(--radius-2)", gap: 10,
      borderColor: focus ? "var(--border-focus)" : "var(--border-default)",
      boxShadow: focus ? "var(--focus-ring)" : "var(--shadow-1)",
      ...style,
    }}>
      <Icon name="search" size={19} style={{ color: "var(--text-muted)" }} />
      <input
        placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={bareInput} {...rest}
      />
      {location ? (
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 5, paddingLeft: 10,
          borderLeft: "var(--rule-w) solid var(--border-hairline)",
          font: "var(--type-label)", color: "var(--text-body)", whiteSpace: "nowrap",
        }}>
          <Icon name="map-pin" size={15} style={{ color: "var(--text-muted)" }} />{location}
        </span>
      ) : null}
      {onFilters ? (
        <button type="button" onClick={onFilters} aria-label="Filtros" style={{
          border: 0, background: "transparent", cursor: "pointer", color: "var(--text-muted)",
          display: "flex", padding: 0,
        }}>
          <Icon name="sliders-horizontal" size={18} />
        </button>
      ) : null}
    </span>
  );
}
