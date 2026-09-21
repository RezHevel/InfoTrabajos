import React from "react";
import { Card } from "../core/Card.jsx";
import { Badge } from "../core/Badge.jsx";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";

const stateTone = { abierta: "go", en_curso: "info", finalizada: "neutral", cancelada: "stop" };
const stateLabel = { abierta: "Abierta", en_curso: "En curso", finalizada: "Finalizada", cancelada: "Cancelada" };

export function RequestCard({
  title, category, zone, budget, posted, state = "abierta", offers, urgent,
  description, onOpen, style, ...rest
}) {
  return (
    <Card interactive={Boolean(onOpen)} onClick={onOpen} style={{ display: "flex", flexDirection: "column", gap: 10, ...style }} {...rest}>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 4 }}>
            <Badge tone={stateTone[state]}>{stateLabel[state]}</Badge>
            {urgent ? <Badge tone="warn" icon="clock">Urgente</Badge> : null}
          </div>
          <div style={{ font: "var(--type-h3)", color: "var(--text-strong)" }}>{title}</div>
        </div>
        {budget ? (
          <div style={{ textAlign: "right", flex: "none" }}>
            <div style={{ font: "var(--type-price)", color: "var(--text-strong)" }}>{budget}</div>
            <div style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>presupuesto</div>
          </div>
        ) : null}
      </div>
      {description ? (
        <p style={{ font: "var(--type-body-sm)", color: "var(--text-body)", margin: 0 }}>{description}</p>
      ) : null}
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", font: "var(--type-caption)", color: "var(--text-muted)" }}>
        {category ? <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}><Icon name="briefcase" size={13} />{category}</span> : null}
        {zone ? <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}><Icon name="map-pin" size={13} />{zone}</span> : null}
        {posted ? <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}><Icon name="clock" size={13} />{posted}</span> : null}
        {offers != null ? <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}><Icon name="users" size={13} />{offers} postulaciones</span> : null}
      </div>
      {onOpen ? (
        <div><Button size="sm" variant="secondary" iconAfter="arrow-right">Ver solicitud</Button></div>
      ) : null}
    </Card>
  );
}
