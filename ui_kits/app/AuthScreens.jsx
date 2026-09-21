const { Logotype, Icon, Button } = window.InfoTrabajosDesignSystem_1be5a5;

const authWrap = { minHeight: "100%", background: "var(--auth-bg)", padding: "28px 20px 24px", display: "flex", flexDirection: "column", gap: 20, color: "var(--auth-text)" };
const authCard = { background: "var(--auth-card)", border: "1px solid var(--auth-card-border)", borderRadius: "var(--radius-4)", padding: "20px", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", flexDirection: "column", gap: 14 };
const authLabel = { font: "var(--type-eyebrow)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--auth-text-muted)" };
const authInput = { height: 44, width: "100%", boxSizing: "border-box", borderRadius: "var(--radius-2)", background: "var(--auth-field)", border: "1px solid var(--auth-card-border)", padding: "0 12px", font: "var(--type-body)", color: "var(--auth-text)", outline: "none" };
function ThemeToggle({ theme, onToggle }) {
  const dark = theme === "dark";
  return (
    <button
      type="button" onClick={onToggle}
      aria-label={dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      title={dark ? "Tema claro" : "Tema oscuro"}
      style={{
        width: 34, height: 34, borderRadius: "var(--radius-pill)", cursor: "pointer",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: "var(--auth-field)", border: "1px solid var(--auth-card-border)",
        color: "var(--auth-text-muted)", transition: "var(--transition-control)",
      }}
    >
      <Icon name={dark ? "sun" : "moon"} size={17} />
    </button>
  );
}

const authCta = { height: 48, width: "100%", border: 0, borderRadius: "var(--radius-2)", background: "var(--auth-cta)", color: "#fff", font: "var(--type-button)", cursor: "pointer", boxShadow: "var(--shadow-2)" };

function LoginScreen({ onLogin, onRegister, theme, onToggleTheme }) {
  const [show, setShow] = React.useState(false);
  return (
    <div style={authWrap}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: -12 }}>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, paddingTop: 0 }}>
        <Logotype variant="mark" height={68} tile={theme === "dark"} base="../../assets" />
        <Logotype variant="word-only" height={22} base="../../assets" style={theme === "dark" ? { filter: "brightness(0) invert(1)" } : null} />
        <div style={{ font: "var(--type-body-sm)", color: "var(--auth-text-muted)" }}>Conecta tu talento, encuentra oportunidades</div>
      </div>
      <div style={authCard}>
        <div>
          <div style={authLabel}>Correo o teléfono</div>
          <input style={{ ...authInput, marginTop: 6 }} placeholder="tu@correo.com" />
        </div>
        <div>
          <div style={{ ...authLabel, display: "flex", justifyContent: "space-between" }}>
            <span>Contraseña</span>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--blue-300)", textTransform: "none", letterSpacing: 0, font: "var(--type-caption)" }}>¿La olvidaste?</a>
          </div>
          <div style={{ position: "relative", marginTop: 6 }}>
            <input type={show ? "text" : "password"} style={authInput} placeholder="••••••••" />
            <button onClick={() => setShow(!show)} aria-label="Ver contraseña" style={{ position: "absolute", right: 8, top: 10, border: 0, background: "transparent", color: "var(--auth-text-muted)", cursor: "pointer", padding: 4 }}>
              <Icon name="eye" size={18} />
            </button>
          </div>
        </div>
        <label style={{ display: "flex", gap: 9, alignItems: "center", font: "var(--type-body-sm)", color: "var(--auth-text-muted)" }}>
          <input type="checkbox" defaultChecked style={{ width: 16, height: 16, accentColor: "var(--blue-500)" }} />
          <span style={{ whiteSpace: "nowrap" }}>Mantener sesión por 30 días</span>
        </label>
        <button style={authCta} onClick={onLogin}>Iniciar sesión</button>
        <div style={{ display: "flex", alignItems: "center", gap: 10, font: "var(--type-caption)", color: "var(--auth-text-muted)" }}>
          <span style={{ flex: 1, height: 1, background: "var(--auth-card-border)" }} />o continúa con<span style={{ flex: 1, height: 1, background: "var(--auth-card-border)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[["Google", "user-round"], ["WhatsApp", "phone"]].map(([l, i]) => (
            <button key={l} style={{ height: 44, border: "1px solid var(--auth-card-border)", background: "var(--auth-field)", color: "var(--auth-text)", borderRadius: "var(--radius-2)", font: "var(--type-label)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
              <Icon name={i} size={16} />{l}
            </button>
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center", font: "var(--type-body-sm)", color: "var(--auth-text-muted)" }}>
        ¿No tienes cuenta? <a href="#" onClick={(e) => { e.preventDefault(); onRegister(); }} style={{ color: "var(--blue-300)" }}>Crear cuenta</a>
      </div>
    </div>
  );
}

function RegisterScreen({ onDone, onBack, theme, onToggleTheme }) {
  const [role, setRole] = React.useState("cliente");
  const [step, setStep] = React.useState(1);
  const roles = [
    ["cliente", "user-round", "Busco un profesional", "Publica solicitudes y recibe cotizaciones"],
    ["trabajador", "hard-hat", "Ofrezco mis servicios", "Crea tu perfil y recibe trabajos de tu zona"],
  ];
  return (
    <div style={authWrap}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={onBack} style={{ border: 0, background: "transparent", color: "var(--auth-text-muted)", display: "inline-flex", gap: 6, alignItems: "center", font: "var(--type-label)", cursor: "pointer", padding: 0 }}>
          <Icon name="arrow-left" size={16} />Volver
        </button>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <div>
        <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--track-eyebrow)", textTransform: "uppercase", color: "var(--blue-300)" }}>Paso {step} de 3</div>
        <h1 style={{ font: "var(--type-h1)", color: "var(--auth-text)", marginTop: 6 }}>
          {step === 1 ? "¿Cómo vas a usar InfoTrabajos?" : step === 2 ? "Tus datos" : "Verifica tu identidad"}
        </h1>
      </div>
      <div style={authCard}>
        {step === 1 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {roles.map(([k, icon, title, desc]) => (
              <button key={k} onClick={() => setRole(k)} style={{
                display: "flex", gap: 12, alignItems: "flex-start", textAlign: "left", cursor: "pointer",
                padding: 14, borderRadius: "var(--radius-3)", color: "var(--auth-text)",
                background: role === k ? "color-mix(in oklab, var(--blue-500) 24%, transparent)" : "var(--auth-field)",
                border: "1px solid " + (role === k ? "var(--blue-400)" : "var(--auth-card-border)"),
              }}>
                <Icon name={icon} size={20} />
                <span>
                  <span style={{ display: "block", font: "var(--type-h4)" }}>{title}</span>
                  <span style={{ display: "block", font: "var(--type-caption)", color: "var(--auth-text-muted)", marginTop: 3 }}>{desc}</span>
                </span>
              </button>
            ))}
          </div>
        ) : step === 2 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[["Nombre completo", "Ej. Marta Quiñones"], ["Correo", "tu@correo.com"], ["Teléfono (WhatsApp)", "33 1234 5678"], ["Contraseña", "Mínimo 8 caracteres"]].map(([l, ph]) => (
              <div key={l}>
                <div style={authLabel}>{l}</div>
                <input style={{ ...authInput, marginTop: 6 }} placeholder={ph} type={l === "Contraseña" ? "password" : "text"} />
              </div>
            ))}
            {role === "trabajador" ? (
              <div>
                <div style={authLabel}>Oficio principal</div>
                <select style={{ ...authInput, marginTop: 6, appearance: "none" }}>
                  {window.TRADES.map((t) => <option key={t.label}>{t.label}</option>)}
                </select>
              </div>
            ) : null}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ font: "var(--type-body-sm)", color: "var(--auth-text-muted)", margin: 0 }}>
              La verificación (KYC) se hace una sola vez y es lo que muestra el sello “Identidad verificada” en tu perfil.
            </p>
            {[["camera", "Foto de tu INE por ambos lados"], ["user-round", "Selfie para comparar con tu INE"], ["map-pin", "Comprobante de domicilio"]].map(([i, l]) => (
              <div key={l} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 14px", borderRadius: "var(--radius-2)", background: "var(--auth-field)", border: "1px dashed var(--auth-card-border)" }}>
                <Icon name={i} size={18} />
                <span style={{ flex: 1, font: "var(--type-body-sm)" }}>{l}</span>
                <span style={{ font: "var(--type-caption)", color: "var(--blue-300)" }}>Subir</span>
              </div>
            ))}
          </div>
        )}
        <button style={authCta} onClick={() => (step < 3 ? setStep(step + 1) : onDone(role))}>
          {step < 3 ? "Continuar" : "Crear mi cuenta"}
        </button>
        {step === 3 ? (
          <button onClick={() => onDone(role)} style={{ border: 0, background: "transparent", color: "var(--auth-text-muted)", font: "var(--type-label)", cursor: "pointer" }}>
            Hacerlo después
          </button>
        ) : null}
      </div>
    </div>
  );
}
Object.assign(window, { LoginScreen, RegisterScreen, ThemeToggle });
