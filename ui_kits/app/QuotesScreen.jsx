const { Card, Avatar, Badge, Rating, Button, Icon, EmptyState, Tabs } = window.InfoTrabajosDesignSystem_1be5a5;

function QuotesScreen({ onChat }) {
  const [tab, setTab] = React.useState("cotizaciones");
  const quotes = window.QUOTES;
  return (
    <div style={{ padding: "12px 16px 16px" }}>
      <Tabs value={tab} onChange={setTab} items={[{ value: "cotizaciones", label: "Cotizaciones", count: quotes.length }, { value: "historial", label: "Historial" }]} />
      {tab === "cotizaciones" ? (
        <div style={{ paddingTop: 14, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>
            Solicitud SOL-20469 · Cambiar boiler de 40 L
          </div>
          {quotes.map((q) => (
            <Card key={q.id} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                <Avatar name={q.worker.name} trade={q.worker.tradeIcon} size="md" verified={q.worker.verified} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 7, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ font: "var(--type-h4)", color: "var(--text-strong)" }}>{q.worker.name}</span>
                    {q.state === "nueva" ? <Badge tone="brand">Nueva</Badge> : null}
                  </div>
                  <div style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: 2 }}>{q.worker.trade} · {q.worker.zone}</div>
                  <Rating value={q.worker.rating} count={q.worker.reviews} size={13} style={{ marginTop: 5 }} />
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ font: "var(--type-price)", fontSize: 19, color: "var(--text-strong)" }}>{q.amount}</div>
                  <div style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>cotización</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 7, alignItems: "center", font: "var(--type-caption)", color: "var(--text-body)" }}>
                <Icon name="calendar" size={13} />{q.days}
              </div>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-body)", margin: 0 }}>{q.note}</p>
              <div style={{ display: "flex", gap: 8 }}>
                <Button size="sm">Aceptar cotización</Button>
                <Button size="sm" variant="secondary" icon="message-square" onClick={onChat}>Mensaje</Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div style={{ paddingTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          {window.HISTORY.map((h) => (
            <Card key={h.title} style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ font: "var(--type-h4)" }}>{h.title}</div>
                <div style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: 2 }}>{h.worker} · {h.date}</div>
                {h.rated ? <Rating value={h.rated} size={12} showValue={false} style={{ marginTop: 5 }} />
                  : <span style={{ font: "var(--type-caption)", color: "var(--text-link)" }}>Calificar el trabajo</span>}
              </div>
              <span style={{ font: "var(--type-price)" }}>{h.amount}</span>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
Object.assign(window, { QuotesScreen });
