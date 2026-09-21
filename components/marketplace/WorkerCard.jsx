import React from "react";
import { Card } from "../core/Card.jsx";
import { Avatar } from "../core/Avatar.jsx";
import { Badge } from "../core/Badge.jsx";
import { Rating } from "../core/Rating.jsx";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";

export function WorkerCard({
  name, trade, tradeIcon = "wrench", photo, rating, reviews, distance, zone,
  rate, available, verified, skills = [], onContact, onClick, layout = "row", style, ...rest
}) {
  return (
    <Card interactive={Boolean(onClick)} onClick={onClick} style={{ display: "flex", flexDirection: "column", gap: 12, ...style }} {...rest}>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <Avatar name={name} src={photo} trade={photo ? undefined : tradeIcon} size={layout === "row" ? "md" : "lg"} verified={verified} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
            <span style={{ font: "var(--type-h3)", color: "var(--text-strong)" }}>{name}</span>
            {available ? <Badge tone="go" dot>Disponible</Badge> : null}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 3, font: "var(--type-body-sm)", color: "var(--text-muted)", flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--text-body)" }}>
              <Icon name={tradeIcon} size={14} />{trade}
            </span>
            {zone || distance ? (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                <Icon name="map-pin" size={14} />{zone}{distance ? " · " + distance : ""}
              </span>
            ) : null}
          </div>
          <div style={{ marginTop: 6 }}>
            {rating != null ? <Rating value={rating} count={reviews} size={14} /> : (
              <span style={{ font: "var(--type-caption)", color: "var(--text-subtle)" }}>Sin reseñas todavía</span>
            )}
          </div>
        </div>
        {rate ? (
          <div style={{ textAlign: "right", flex: "none" }}>
            <div style={{ font: "var(--type-price)", color: "var(--text-strong)" }}>{rate}</div>
            <div style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>desde</div>
          </div>
        ) : null}
      </div>
      {skills.length ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {skills.map((s) => (
            <span key={s} style={{
              font: "var(--type-caption)", color: "var(--text-body)", background: "var(--surface-sunken)",
              border: "var(--border-w) solid var(--border-hairline)", padding: "2px 7px", borderRadius: "var(--radius-1)",
            }}>{s}</span>
          ))}
        </div>
      ) : null}
      {onContact ? (
        <div style={{ display: "flex", gap: 8 }}>
          <Button size="sm" icon="message-square" onClick={(e) => { e.stopPropagation(); onContact(); }}>Contactar</Button>
          <Button size="sm" variant="secondary" icon="eye">Ver perfil</Button>
        </div>
      ) : null}
    </Card>
  );
}
