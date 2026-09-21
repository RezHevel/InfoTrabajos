const { Logotype, Icon, StatTile, Tabs, Badge, Button, IconButton, Avatar, SearchField, Card } = window.InfoTrabajosDesignSystem_1be5a5;

const adminNav = [["layout-dashboard", "Resumen"], ["users", "Usuarios"], ["file-text", "Solicitudes"], ["star", "Reseñas"], ["briefcase", "Categorías"], ["settings", "Configuración"]];

function AdminPage() {
  const [nav, setNav] = React.useState("Usuarios");
  const [tab, setTab] = React.useState("pendientes");
  const rows = [
    ["Marta Quispe", "Electricista", "Verificado", "go", "184", "4.8"],
    ["Ramiro Sosa", "Plomero", "Verificado", "go", "96", "4.6"],
    ["Lucía Ferreyra", "Pintora", "Pendiente", "warn", "53", "5.0"],
    ["Diego Ocampo", "Albañil", "Verificado", "go", "71", "4.4"],
    ["Nahuel Ibarra", "Herrero", "Pendiente", "warn", "2", "—"],
    ["Sofía Medina", "Limpieza", "Suspendido", "stop", "31", "3.2"],
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "var(--sidebar-w) 1fr", minHeight: 700, background: "var(--surface-page)" }}>
      <aside style={{ background: "var(--slate-900)", padding: "18px 14px", display: "flex", flexDirection: "column", gap: 20 }}>
        <Logotype variant="mark" height={26} tile base="../../assets" />
        <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {adminNav.map(([icon, label]) => {
            const active = nav === label;
            return (
              <button key={label} onClick={() => setNav(label)} style={{
                display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", border: 0, cursor: "pointer",
                borderRadius: "var(--radius-2)", font: "var(--type-label)", fontSize: 13.5,
                background: active ? "var(--slate-800)" : "transparent",
                color: active ? "var(--slate-0)" : "var(--slate-400)", textAlign: "left",
              }}>
                <Icon name={icon} size={17} />{label}
              </button>
            );
          })}
        </nav>
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 9, color: "var(--slate-400)", font: "var(--type-caption)" }}>
          <Avatar name="Ad Min" size="xs" /> admin@infotrabajos
        </div>
      </aside>
      <div style={{ padding: "var(--space-6) var(--space-7)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "var(--space-6)" }}>
          <div style={{ flex: 1 }}>
            <div className="it-eyebrow">Panel administrativo</div>
            <h1 style={{ font: "var(--type-h1)", marginTop: 4 }}>{nav}</h1>
          </div>
          <div style={{ width: 280 }}><SearchField size="md" placeholder="Buscar usuario o solicitud" /></div>
          <IconButton icon="bell" label="Alertas" variant="outline" badge />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: "var(--space-6)" }}>
          <StatTile label="Usuarios activos" value="1,640" icon="users" delta="+38 esta semana" />
          <StatTile label="Verificaciones pendientes" value="12" icon="shield-check" />
          <StatTile label="Solicitudes abiertas" value="94" icon="file-text" delta="+9%" />
          <StatTile label="Reseñas reportadas" value="3" icon="circle-alert" delta="-2" />
        </div>
        <Card flush>
          <div style={{ padding: "0 var(--inset-card)" }}>
            <Tabs value={tab} onChange={setTab} items={[{ value: "pendientes", label: "Verificación pendiente", count: 12 }, { value: "todos", label: "Todos los trabajadores", count: 1640 }, { value: "clientes", label: "Clientes" }]} />
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", font: "var(--type-body-sm)" }}>
            <thead>
              <tr style={{ background: "var(--surface-sunken)" }}>
                {["Profesional", "Oficio", "Estado", "Trabajos", "Calificación", ""].map((h) => (
                  <th key={h} style={{ textAlign: h === "Trabajos" || h === "Calificación" ? "right" : "left", font: "var(--type-eyebrow)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", padding: "9px var(--inset-card)", borderBottom: "1px solid var(--border-hairline)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([name, trade, state, tone, jobs, rating]) => (
                <tr key={name}>
                  <td style={{ padding: "10px var(--inset-card)", borderBottom: "1px solid var(--border-hairline)" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
                      <Avatar name={name} size="xs" />
                      <span style={{ color: "var(--text-strong)", fontWeight: 500 }}>{name}</span>
                    </span>
                  </td>
                  <td style={{ padding: "10px var(--inset-card)", borderBottom: "1px solid var(--border-hairline)", color: "var(--text-muted)" }}>{trade}</td>
                  <td style={{ padding: "10px var(--inset-card)", borderBottom: "1px solid var(--border-hairline)" }}><Badge tone={tone}>{state}</Badge></td>
                  <td style={{ padding: "10px var(--inset-card)", borderBottom: "1px solid var(--border-hairline)", textAlign: "right", font: "var(--type-mono)" }}>{jobs}</td>
                  <td style={{ padding: "10px var(--inset-card)", borderBottom: "1px solid var(--border-hairline)", textAlign: "right", font: "var(--type-mono)" }}>{rating}</td>
                  <td style={{ padding: "10px var(--inset-card)", borderBottom: "1px solid var(--border-hairline)", textAlign: "right", whiteSpace: "nowrap" }}>
                    <Button size="sm" variant="secondary">Revisar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: "10px var(--inset-card)", display: "flex", justifyContent: "space-between", alignItems: "center", font: "var(--type-caption)", color: "var(--text-muted)" }}>
            <span>6 de 1,640 · página 1</span>
            <span style={{ display: "flex", gap: 6 }}>
              <IconButton icon="chevron-left" label="Anterior" size="sm" variant="outline" />
              <IconButton icon="chevron-right" label="Siguiente" size="sm" variant="outline" />
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}
Object.assign(window, { AdminPage });
