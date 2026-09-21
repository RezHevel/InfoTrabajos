const { Dialog, Button, Switch, Icon, Avatar, Badge } = window.InfoTrabajosDesignSystem_1be5a5;

const THEMES = [
  ["light", "sun", "Claro", "Fondo blanco, ideal a plena luz"],
  ["dark", "moon", "Oscuro", "Menos brillo y menos batería de noche"],
  ["auto", "monitor-smartphone", "Automático", "Sigue la configuración del teléfono"],
];

function ThemeOption({ value, icon, title, desc, selected, onSelect }) {
  return (
    <button
      type="button" onClick={() => onSelect(value)} role="radio" aria-checked={selected}
      style={{
        display: "flex", gap: 12, alignItems: "center", textAlign: "left", width: "100%",
        minHeight: 56, padding: "10px 12px", cursor: "pointer",
        borderRadius: "var(--radius-3)", transition: "var(--transition-control)",
        background: selected ? "var(--brand-soft)" : "var(--surface-card)",
        border: "1px solid " + (selected ? "var(--brand-soft-border)" : "var(--border-default)"),
        color: "var(--text-strong)",
      }}
    >
      <span style={{
        width: 34, height: 34, flex: "none", borderRadius: "var(--radius-2)",
        background: selected ? "var(--surface-card)" : "var(--surface-sunken)",
        color: selected ? "var(--brand)" : "var(--text-muted)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}><Icon name={icon} size={18} /></span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: "block", font: "var(--type-h4)" }}>{title}</span>
        <span style={{ display: "block", font: "var(--type-caption)", color: "var(--text-muted)", marginTop: 2 }}>{desc}</span>
      </span>
      <span style={{
        width: 20, height: 20, flex: "none", borderRadius: "var(--radius-circle)",
        display: "flex", alignItems: "center", justifyContent: "center",
        border: "1px solid " + (selected ? "var(--brand)" : "var(--border-strong)"),
        background: selected ? "var(--brand)" : "transparent", color: "var(--text-on-brand)",
      }}>{selected ? <Icon name="check" size={13} strokeWidth={3} /> : null}</span>
    </button>
  );
}

function SettingsRow({ icon, label, hint, right, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex", gap: 12, alignItems: "center", minHeight: 52, padding: "8px 2px",
        borderTop: "1px solid var(--border-hairline)", cursor: onClick ? "pointer" : "default",
      }}
    >
      <Icon name={icon} size={18} style={{ color: "var(--text-muted)" }} />
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: "block", font: "var(--type-body-sm)", color: "var(--text-strong)" }}>{label}</span>
        {hint ? <span style={{ display: "block", font: "var(--type-caption)", color: "var(--text-muted)", marginTop: 1 }}>{hint}</span> : null}
      </span>
      {right}
    </div>
  );
}

function SettingsSheet({ theme, onTheme, onClose, onLogout }) {
  const [push, setPush] = React.useState(true);
  const [geo, setGeo] = React.useState(true);
  return (
    <Dialog sheet title="Ajustes" onClose={onClose} footer={<Button block variant="secondary" onClick={onClose}>Listo</Button>}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxHeight: 430, overflowY: "auto" }}>
        <div style={{ display: "flex", gap: 11, alignItems: "center" }}>
          <Avatar name="Marta Quiñones" size="md" verified />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ font: "var(--type-h4)" }}>Marta Quiñones</div>
            <div style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: 2 }}>marta@correo.com</div>
          </div>
          <Badge tone="go" icon="badge-check">Verificada</Badge>
        </div>

        <div>
          <div className="it-eyebrow" style={{ marginBottom: 8 }}>Apariencia</div>
          <div role="radiogroup" aria-label="Tema de la aplicación" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {THEMES.map(([value, icon, title, desc]) => (
              <ThemeOption key={value} value={value} icon={icon} title={title} desc={desc}
                selected={theme === value} onSelect={onTheme} />
            ))}
          </div>
        </div>

        <div>
          <div className="it-eyebrow" style={{ marginBottom: 2 }}>Cuenta y permisos</div>
          <SettingsRow icon="bell" label="Notificaciones push" hint="Cotizaciones y mensajes nuevos"
            right={<Switch checked={push} onChange={() => setPush(!push)} />} />
          <SettingsRow icon="map-pin" label="Ubicación" hint="Para mostrarte trabajos cercanos"
            right={<Switch checked={geo} onChange={() => setGeo(!geo)} />} />
          <SettingsRow icon="user-round" label="Editar mi perfil"
            right={<Icon name="chevron-right" size={18} style={{ color: "var(--text-subtle)" }} />} />
          <SettingsRow icon="shield-check" label="Verificación de identidad" hint="Completada en enero de 2026"
            right={<Icon name="chevron-right" size={18} style={{ color: "var(--text-subtle)" }} />} />
          <SettingsRow icon="file-text" label="Términos y privacidad"
            right={<Icon name="chevron-right" size={18} style={{ color: "var(--text-subtle)" }} />} />
        </div>

        <Button variant="ghost" icon="log-out" onClick={onLogout} style={{ color: "var(--state-stop)", justifyContent: "flex-start" }}>
          Cerrar sesión
        </Button>
      </div>
    </Dialog>
  );
}
Object.assign(window, { SettingsSheet, ThemeOption, SettingsRow });
