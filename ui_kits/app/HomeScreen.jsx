const { SearchField, CategoryTile, WorkerCard, Tag, Icon, Badge } = window.InfoTrabajosDesignSystem_1be5a5;

function HomeScreen({ onWorker, onOpenFilters }) {
  const [cat, setCat] = React.useState(null);
  const workers = window.WORKERS;
  return (
    <div style={{ padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 18 }}>
      <SearchField location="Guadalajara" onFilters={onOpenFilters} />
      <section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
          <span className="it-eyebrow">Categorías</span>
          <span style={{ font: "var(--type-caption)", color: "var(--text-link)" }}>Ver todas</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {window.TRADES.slice(0, 4).map((t) => (
            <CategoryTile key={t.label} icon={t.icon} label={t.label} count={t.count}
              selected={cat === t.label} onClick={() => setCat(cat === t.label ? null : t.label)} />
          ))}
        </div>
      </section>
      <section>
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4, marginBottom: 12 }}>
          <Tag selected>Cerca de mí</Tag><Tag>Disponible hoy</Tag><Tag>Mejor calificados</Tag><Tag>Verificados</Tag>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
          <span className="it-eyebrow">{cat ? cat + " cerca de ti" : "Profesionales cerca de ti"}</span>
          <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>{workers.length} resultados</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {workers.map((w) => (
            <WorkerCard key={w.id} {...w} onClick={() => onWorker(w)} />
          ))}
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { HomeScreen });
