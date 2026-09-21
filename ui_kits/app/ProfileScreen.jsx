const { Avatar, Badge, Rating, Button, Tabs, ReviewItem, Icon, Card, StatTile } = window.InfoTrabajosDesignSystem_1be5a5;

function ProfileScreen({ worker, onContact }) {
  const [tab, setTab] = React.useState("perfil");
  const w = worker || window.WORKERS[0];
  return (
    <div>
      <div style={{ padding: "16px", display: "flex", gap: 14, alignItems: "flex-start", background: "var(--surface-card)", borderBottom: "1px solid var(--border-hairline)" }}>
        <Avatar name={w.name} trade={w.tradeIcon} size="lg" verified={w.verified} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{ font: "var(--type-h2)" }}>{w.name}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 6, font: "var(--type-body-sm)", color: "var(--text-body)", marginTop: 2 }}>
            <Icon name={w.tradeIcon} size={15} />{w.trade}<span style={{ color: "var(--text-subtle)" }}>·</span>
            <Icon name="map-pin" size={14} />{w.zone}
          </div>
          <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <Rating value={w.rating} count={w.reviews} size={15} />
            {w.available ? <Badge tone="go" dot>Disponible</Badge> : <Badge>Ocupado esta semana</Badge>}
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, padding: "12px 16px" }}>
        <StatTile label="Trabajos" value={w.jobs} icon="briefcase" />
        <StatTile label="Desde" value={w.since} icon="calendar" />
        <StatTile label="Tarifa" value={w.rate} icon="trending-up" tone="brand" />
      </div>
      <div style={{ padding: "0 16px" }}>
        <Tabs value={tab} onChange={setTab} items={[{ value: "perfil", label: "Perfil" }, { value: "resenas", label: "Reseñas", count: w.reviews }, { value: "trabajos", label: "Trabajos" }]} />
      </div>
      <div style={{ padding: "14px 16px 96px" }}>
        {tab === "perfil" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ font: "var(--type-body)", margin: 0 }}>{w.bio}</p>
            <div>
              <div className="it-eyebrow" style={{ marginBottom: 8 }}>Especialidades</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {w.skills.map((s) => (
                  <span key={s} style={{ font: "var(--type-caption)", background: "var(--surface-sunken)", border: "1px solid var(--border-hairline)", padding: "3px 8px", borderRadius: "var(--radius-1)" }}>{s}</span>
                ))}
              </div>
            </div>
            <Card style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <Icon name="shield-check" size={20} style={{ color: "var(--go-500)" }} />
              <div>
                <div style={{ font: "var(--type-h4)" }}>Identidad verificada</div>
                <div style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: 2 }}>DNI y domicilio validados por InfoTrabajos en enero de 2026.</div>
              </div>
            </Card>
          </div>
        ) : tab === "resenas" ? (
          <div>{window.REVIEWS.map((r) => <ReviewItem key={r.author} {...r} />)}</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {["Tablero nuevo · Santa Tere", "Urgencia corte total · Centro", "Luminarias LED · Providencia"].map((t) => (
              <Card key={t} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ font: "var(--type-body-sm)", color: "var(--text-strong)" }}>{t}</span>
                <Icon name="chevron-right" size={18} style={{ color: "var(--text-subtle)" }} />
              </Card>
            ))}
          </div>
        )}
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 58, padding: "10px 16px", background: "var(--bar-veil)", backdropFilter: "var(--blur-bar)", borderTop: "1px solid var(--border-hairline)", display: "flex", gap: 8 }}>
        <Button size="touch" icon="message-square" block onClick={onContact}>Contactar</Button>
      </div>
    </div>
  );
}
Object.assign(window, { ProfileScreen });
