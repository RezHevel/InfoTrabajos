const { Avatar, Badge, Rating, Button, Tabs, ReviewItem, Icon, Card, CardSection, StatTile, Field, Textarea, Select } = window.InfoTrabajosDesignSystem_1be5a5;

function ProfilePage({ worker, onBack }) {
  const w = worker || window.WORKERS[0];
  const [tab, setTab] = React.useState("perfil");
  return (
    <main style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-6) var(--layout-gutter) 0" }}>
      <button onClick={onBack} style={{ border: 0, background: "transparent", cursor: "pointer", font: "var(--type-label)", color: "var(--text-muted)", display: "inline-flex", gap: 6, alignItems: "center", padding: 0, marginBottom: 14 }}>
        <Icon name="arrow-left" size={16} />Volver a los resultados
      </button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "var(--space-7)", alignItems: "start" }}>
        <div>
          <div style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: "var(--space-6)" }}>
            <Avatar name={w.name} trade={w.tradeIcon} size="xl" verified={w.verified} />
            <div style={{ flex: 1 }}>
              <h1 style={{ font: "var(--type-h1)" }}>{w.name}</h1>
              <div style={{ display: "flex", gap: 10, alignItems: "center", font: "var(--type-body)", color: "var(--text-body)", marginTop: 4, flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}><Icon name={w.tradeIcon} size={16} />{w.trade}</span>
                <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}><Icon name="map-pin" size={15} />{w.zone} · {w.distance}</span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 10, flexWrap: "wrap" }}>
                <Rating value={w.rating} count={w.reviews} size={17} />
                {w.available ? <Badge tone="go" dot>Disponible</Badge> : <Badge>Ocupado esta semana</Badge>}
                {w.verified ? <Badge tone="brand" icon="badge-check">Identidad verificada</Badge> : null}
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: "var(--space-6)" }}>
            <StatTile label="Trabajos" value={w.jobs} icon="briefcase" />
            <StatTile label="Reseñas" value={w.reviews} icon="star" />
            <StatTile label="En la plataforma" value={"desde " + w.since} icon="calendar" />
            <StatTile label="Tarifa" value={w.rate} icon="trending-up" tone="brand" />
          </div>
          <Tabs value={tab} onChange={setTab} items={[{ value: "perfil", label: "Perfil" }, { value: "resenas", label: "Reseñas", count: w.reviews }, { value: "trabajos", label: "Trabajos realizados" }]} />
          <div style={{ paddingTop: "var(--space-5)" }}>
            {tab === "perfil" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                <p style={{ font: "var(--type-body-lg)", margin: 0 }}>{w.bio}</p>
                <div>
                  <div className="it-eyebrow" style={{ marginBottom: 10 }}>Especialidades</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {w.skills.map((s) => (
                      <span key={s} style={{ font: "var(--type-body-sm)", background: "var(--surface-sunken)", border: "1px solid var(--border-hairline)", padding: "4px 10px", borderRadius: "var(--radius-1)" }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="it-eyebrow" style={{ marginBottom: 10 }}>Zonas de trabajo</div>
                  <div style={{ font: "var(--type-body-sm)", color: "var(--text-body)" }}>{w.zone}, Santa Tere, Centro, Zapopan · hasta 15 km</div>
                </div>
              </div>
            ) : tab === "resenas" ? (
              <div>{window.REVIEWS.map((r) => <ReviewItem key={r.author} {...r} />)}</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[["Tablero nuevo · Santa Tere", "feb 2026", "$4.600"], ["Urgencia corte total · Centro", "ene 2026", "$1,150"], ["Luminarias LED · Providencia", "dic 2025", "$2,400"]].map(([t, d, m]) => (
                  <Card key={t} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ font: "var(--type-h4)" }}>{t}</div>
                      <div style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: 2 }}>{d}</div>
                    </div>
                    <span style={{ font: "var(--type-price)" }}>{m}</span>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
        <aside style={{ position: "sticky", top: 84, display: "flex", flexDirection: "column", gap: 14 }}>
          <Card flush>
            <div style={{ padding: "var(--inset-card-lg)" }}>
              <div style={{ font: "var(--type-price)", fontSize: 22 }}>{w.rate}</div>
              <div style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginBottom: 14 }}>tarifa de referencia · el cotización final se acuerda por mensaje</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Button block icon="message-square">Enviar mensaje</Button>
                <Button block variant="secondary" icon="file-text">Pedir cotización</Button>
              </div>
            </div>
            <CardSection>
              <div style={{ display: "flex", gap: 8, alignItems: "center", font: "var(--type-caption)", color: "var(--text-muted)" }}>
                <Icon name="clock" size={14} />Responde en promedio en 2 h
              </div>
            </CardSection>
          </Card>
          <Card>
            <div className="it-eyebrow" style={{ marginBottom: 10 }}>Pedir cotización</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Field label="Categoría"><Select options={window.TRADES.map((t) => t.label)} /></Field>
              <Field label="Describe el trabajo"><Textarea rows={3} placeholder="Qué hay que hacer, medidas, materiales..." /></Field>
              <Button variant="secondary" block icon="send">Enviar</Button>
            </div>
          </Card>
        </aside>
      </div>
    </main>
  );
}
Object.assign(window, { ProfilePage });
