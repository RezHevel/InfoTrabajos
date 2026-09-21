const { SearchField, WorkerCard, Tag, Checkbox, Select, Field, Button, Icon, EmptyState, Card } = window.InfoTrabajosDesignSystem_1be5a5;

function ResultsPage({ onWorker }) {
  const [sort, setSort] = React.useState("cerca");
  const [only, setOnly] = React.useState({ hoy: true, verificados: false });
  let list = window.WORKERS.slice();
  if (only.hoy) list = list.filter((w) => w.available);
  if (only.verificados) list = list.filter((w) => w.verified);
  if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  return (
    <main style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-6) var(--layout-gutter) 0" }}>
      <div style={{ marginBottom: "var(--space-5)" }}>
        <SearchField location="Guadalajara" defaultValue="electricista" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "var(--sidebar-w) 1fr", gap: "var(--space-7)", alignItems: "start" }}>
        <aside style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", position: "sticky", top: 84 }}>
          <div>
            <div className="it-eyebrow" style={{ marginBottom: 10 }}>Distancia</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <Tag selected>5 km</Tag><Tag>10 km</Tag><Tag>20 km</Tag>
            </div>
          </div>
          <div>
            <div className="it-eyebrow" style={{ marginBottom: 10 }}>Categoría</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {window.TRADES.slice(0, 5).map((t) => <Checkbox key={t.label} label={t.label + " (" + t.count + ")"} />)}
            </div>
          </div>
          <div>
            <div className="it-eyebrow" style={{ marginBottom: 10 }}>Filtros</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <Checkbox label="Disponibles hoy" checked={only.hoy} onChange={() => setOnly({ ...only, hoy: !only.hoy })} />
              <Checkbox label="Identidad verificada" checked={only.verificados} onChange={() => setOnly({ ...only, verificados: !only.verificados })} />
              <Checkbox label="4 estrellas o más" />
            </div>
          </div>
          <Button variant="ghost" icon="x" onClick={() => setOnly({ hoy: false, verificados: false })}>Limpiar filtros</Button>
        </aside>
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div>
              <h1 style={{ font: "var(--type-h1)" }}>Electricistas en Guadalajara</h1>
              <div style={{ font: "var(--type-body-sm)", color: "var(--text-muted)", marginTop: 2 }}>{list.length} profesionales · radio de 5 km</div>
            </div>
            <div style={{ width: 220 }}>
              <Select value={sort} onChange={(e) => setSort(e.target.value)}
                options={[{ value: "cerca", label: "Más cerca" }, { value: "rating", label: "Mejor calificados" }, { value: "precio", label: "Tarifa más baja" }]} />
            </div>
          </div>
          {list.length ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {list.map((w) => <WorkerCard key={w.id} {...w} onClick={() => onWorker(w)} onContact={() => onWorker(w)} />)}
            </div>
          ) : (
            <EmptyState icon="search" title="Sin resultados con esos filtros" description="Prueba ampliar el radio o quitar la verificación obligatoria."
              action={<Button variant="secondary" onClick={() => setOnly({ hoy: false, verificados: false })}>Quitar filtros</Button>} />
          )}
          <Card style={{ marginTop: 16, display: "flex", gap: 10, alignItems: "center", background: "var(--brand-soft)", borderColor: "var(--brand-soft-border)" }}>
            <Icon name="info" size={18} style={{ color: "var(--blue-700)" }} />
            <span style={{ font: "var(--type-body-sm)", color: "var(--blue-800)" }}>
              ¿No encuentras lo que buscas? Publica una solicitud y dejá que los profesionales te contacten.
            </span>
          </Card>
        </section>
      </div>
    </main>
  );
}
Object.assign(window, { ResultsPage });
