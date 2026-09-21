const { WorkerCard, Tag, Icon, Badge, Card } = window.InfoTrabajosDesignSystem_1be5a5;

/* El mapa real se resuelve con Google Maps Platform (documento técnico).
   Acá queda declarado como hueco: no se dibuja un mapa falso. */
function MapPlaceholder({ height = 260 }) {
  return (
    <div style={{
      height, borderRadius: "var(--radius-3)", border: "1px dashed var(--border-strong)",
      background: "var(--surface-sunken)", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 8, color: "var(--text-muted)", textAlign: "center", padding: 16,
    }}>
      <Icon name="map-pin" size={22} />
      <div style={{ font: "var(--type-h4)", color: "var(--text-body)" }}>Mapa de resultados</div>
      <div style={{ font: "var(--type-caption)", maxWidth: 240 }}>
        Hueco reservado para Google Maps Platform con búsqueda por radio (PostGIS). No se ilustra un mapa ficticio.
      </div>
    </div>
  );
}

function MapScreen({ onWorker }) {
  const workers = window.WORKERS.filter((w) => w.available);
  return (
    <div style={{ padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 6, overflowX: "auto" }}>
        <Tag icon="map-pin" selected>5 km</Tag><Tag>10 km</Tag><Tag>Toda la ZMG</Tag>
      </div>
      <MapPlaceholder />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="it-eyebrow">Disponibles ahora cerca de ti</span>
        <Badge tone="go" dot>{workers.length} en línea</Badge>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {workers.map((w) => <WorkerCard key={w.id} {...w} onClick={() => onWorker(w)} />)}
      </div>
    </div>
  );
}
Object.assign(window, { MapScreen, MapPlaceholder });
