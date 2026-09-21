const { SearchField, CategoryTile, WorkerCard, Button, Icon, Badge, StatTile, Card } = window.InfoTrabajosDesignSystem_1be5a5;

function HomePage({ onNav, onWorker }) {
  const steps = [
    ["file-text", "Publica lo que necesitas", "Describe el trabajo, la zona y tu cotización. Es gratis."],
    ["users", "Recibe postulaciones", "Los profesionales de tu zona te escriben con precio y disponibilidad."],
    ["badge-check", "Elige con referencias", "Mira calificaciones, trabajos hechos e identidad verificada."],
  ];
  return (
    <main>
      <section style={{ background: "var(--blue-900)", color: "var(--slate-0)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-10) var(--layout-gutter) var(--space-9)" }}>
          <div className="it-eyebrow" style={{ color: "var(--hivis-500)" }}>Oficios y trabajos independientes</div>
          <h1 className="it-display-1" style={{ color: "var(--slate-0)", margin: "12px 0 14px", maxWidth: 820 }}>
            Encuentra al profesional que necesitas, cerca de ti
          </h1>
          <p style={{ font: "var(--type-body-lg)", color: "var(--slate-200)", maxWidth: 560 }}>
            Albañiles, plomeros, electricistas, pintores, jardineros y más. Publica tu solicitud o busca por categoría y zona.
          </p>
          <div style={{ maxWidth: 720, marginTop: 8 }}>
            <SearchField location="Guadalajara" onFilters={() => onNav("buscar")} />
          </div>
          <div style={{ display: "flex", gap: 22, marginTop: 22, font: "var(--type-body-sm)", color: "var(--slate-300)", flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="users" size={16} />1,640 profesionales activos</span>
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="shield-check" size={16} />Identidad verificada</span>
            <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="clock" size={16} />Respuesta promedio: 3 h</span>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-9) var(--layout-gutter) 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <h2 className="it-display-3">Categorías</h2>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav("buscar"); }} style={{ font: "var(--type-label)" }}>Ver todas las categorías</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--grid-gap)" }}>
          {window.TRADES.map((t) => <CategoryTile key={t.label} icon={t.icon} label={t.label} count={t.count} onClick={() => onNav("buscar")} />)}
        </div>
      </section>

      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-9) var(--layout-gutter) 0" }}>
        <h2 className="it-display-3" style={{ marginBottom: 16 }}>Cómo funciona</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--grid-gap)" }}>
          {steps.map(([icon, title, text], i) => (
            <Card key={title} padding="lg">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ width: 34, height: 34, borderRadius: "var(--radius-2)", background: "var(--brand-soft)", color: "var(--blue-700)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={icon} size={18} /></span>
                <span style={{ font: "var(--type-mono)", color: "var(--text-subtle)" }}>0{i + 1}</span>
              </div>
              <h3 style={{ marginBottom: 6 }}>{title}</h3>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-body)", margin: 0 }}>{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-9) var(--layout-gutter) 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <h2 className="it-display-3">Mejor calificados esta semana</h2>
          <Badge tone="accent" icon="star">Promedio 4.7</Badge>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--grid-gap)" }}>
          {window.WORKERS.slice(0, 4).map((w) => <WorkerCard key={w.id} {...w} onClick={() => onWorker(w)} onContact={() => onWorker(w)} />)}
        </div>
      </section>

      <section style={{ maxWidth: "var(--layout-max)", margin: "var(--space-9) auto 0", padding: "0 var(--layout-gutter)" }}>
        <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-3)", padding: "var(--space-7)", display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap", boxShadow: "var(--shadow-1)" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 className="it-display-3" style={{ marginBottom: 8 }}>¿Ofrecés un oficio?</h2>
            <p style={{ font: "var(--type-body)", margin: 0, color: "var(--text-body)" }}>
              Crea tu perfil, publica tus servicios y recibe solicitudes de tu zona. La misma cuenta funciona en la app.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <StatTile label="Solicitudes / semana" value="420" icon="file-text" />
            <Button size="lg" icon="hard-hat" onClick={() => onNav("trabajar")}>Crear mi perfil</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
Object.assign(window, { HomePage });
