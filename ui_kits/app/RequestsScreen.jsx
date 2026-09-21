const { RequestCard, Tabs, EmptyState, Button, StatTile, Switch } = window.InfoTrabajosDesignSystem_1be5a5;

function RequestsScreen({ onOpen }) {
  const [tab, setTab] = React.useState("abiertas");
  const [avail, setAvail] = React.useState(true);
  const open = window.REQUESTS.filter((r) => r.state === "abierta");
  const list = tab === "abiertas" ? open : window.REQUESTS.filter((r) => r.state === "en_curso");
  return (
    <div style={{ padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <StatTile label="Postulaciones" value="6" icon="file-text" style={{ flex: 1 }} />
        <StatTile label="Ganado en el mes" value="$62k" icon="trending-up" delta="+12%" tone="brand" style={{ flex: 1 }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--surface-card)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-3)", padding: "10px 14px" }}>
        <span style={{ font: "var(--type-body-sm)", color: "var(--text-strong)" }}>Recibir solicitudes</span>
        <Switch checked={avail} onChange={() => setAvail(!avail)} />
      </div>
      <Tabs value={tab} onChange={setTab} items={[{ value: "abiertas", label: "Abiertas", count: open.length }, { value: "curso", label: "En curso", count: 1 }, { value: "hist", label: "Historial" }]} />
      {tab === "hist" ? (
        <EmptyState icon="file-text" title="Todavía no cerraste trabajos" description="Cuando finalices una solicitud vas a verla acá con su reseña." action={<Button variant="secondary">Ver solicitudes abiertas</Button>} />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {list.map((r) => <RequestCard key={r.id} {...r} onOpen={onOpen} />)}
        </div>
      )}
    </div>
  );
}
Object.assign(window, { RequestsScreen });
