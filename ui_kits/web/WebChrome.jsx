const { Logotype, Button, Icon, IconButton } = window.InfoTrabajosDesignSystem_1be5a5;

function WebHeader({ page, onNav }) {
  const links = [["buscar","Buscar profesionales"],["solicitudes","Solicitudes"],["trabajar","Trabajá con nosotros"],["admin","Panel"]];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 10, background: "var(--bar-veil)", backdropFilter: "var(--blur-bar)", boxShadow: "var(--shadow-sticky)" }}>
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "0 var(--layout-gutter)", height: 64, display: "flex", alignItems: "center", gap: 28 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav("home"); }} style={{ textDecoration: "none" }}><Logotype variant="word-only" height={22} base="../../assets" /></a>
        <nav style={{ display: "flex", gap: 20, flex: 1 }}>
          {links.map(([k, l]) => (
            <a key={k} href="#" onClick={(e) => { e.preventDefault(); onNav(k); }}
              style={{ font: "var(--type-label)", fontSize: 14, textDecoration: "none", color: page === k ? "var(--text-strong)" : "var(--text-muted)",
                borderBottom: "var(--bar-w) solid " + (page === k ? "var(--brand)" : "transparent"), paddingBottom: 3 }}>{l}</a>
          ))}
        </nav>
        <a href="#" onClick={(e) => e.preventDefault()} style={{ font: "var(--type-label)", fontSize: 14, textDecoration: "none" }}>Ingresar</a>
        <Button icon="plus" onClick={() => onNav("publicar")}>Publicar solicitud</Button>
      </div>
    </header>
  );
}

function WebFooter() {
  const cols = [
    ["Clientes", ["Buscar profesionales", "Publicar una solicitud", "Cómo funciona", "Seguridad y verificación"]],
    ["Profesionales", ["Crear perfil", "Recibir solicitudes", "Planes", "Centro de ayuda"]],
    ["InfoTrabajos", ["Sobre el proyecto", "Categorías", "Términos", "Privacidad"]],
  ];
  return (
    <footer style={{ background: "var(--surface-inverse)", color: "var(--text-on-inverse)", marginTop: "var(--space-11)" }}>
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-9) var(--layout-gutter) var(--space-7)", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <Logotype variant="mark" height={38} tile base="../../assets" />
          <p style={{ font: "var(--type-body-sm)", color: "var(--slate-300)", marginTop: 12, maxWidth: 260 }}>
            Oficios y trabajos independientes, cerca tuyo. App y web con la misma cuenta.
          </p>
        </div>
        {cols.map(([title, items]) => (
          <div key={title}>
            <div className="it-eyebrow" style={{ color: "var(--slate-400)", marginBottom: 10 }}>{title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {items.map((i) => <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{ font: "var(--type-body-sm)", color: "var(--slate-200)", textDecoration: "none" }}>{i}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid var(--border-inverse)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "16px var(--layout-gutter)", font: "var(--type-caption)", color: "var(--slate-400)", display: "flex", justifyContent: "space-between" }}>
          <span>© 2026 InfoTrabajos</span><span>Guadalajara, México</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { WebHeader, WebFooter });
