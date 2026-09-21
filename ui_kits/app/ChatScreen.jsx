const { ChatBubble, Avatar, Icon, IconButton, Badge } = window.InfoTrabajosDesignSystem_1be5a5;

function ChatScreen({ worker }) {
  const [msgs, setMsgs] = React.useState(window.MESSAGES);
  const [draft, setDraft] = React.useState("");
  const w = worker || window.WORKERS[0];
  const send = () => {
    if (!draft.trim()) return;
    setMsgs(msgs.concat([{ from: "me", time: "10:45", text: draft }]));
    setDraft("");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ padding: "10px 16px", background: "var(--surface-card)", borderBottom: "1px solid var(--border-hairline)", display: "flex", gap: 10, alignItems: "center" }}>
        <Avatar name={w.name} trade={w.tradeIcon} size="sm" verified={w.verified} />
        <div style={{ flex: 1 }}>
          <div style={{ font: "var(--type-h4)" }}>{w.name}</div>
          <div style={{ font: "var(--type-caption)", color: "var(--go-500)" }}>En línea</div>
        </div>
        <IconButton icon="phone" label="Llamar" />
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10, background: "var(--surface-page)" }}>
        <div style={{ alignSelf: "center" }}><Badge>Solicitud SOL-20469 · Boiler</Badge></div>
        {msgs.map((m, i) => <ChatBubble key={i} from={m.from} time={m.time} read={m.read}>{m.text}</ChatBubble>)}
      </div>
      <div style={{ padding: "10px 12px", borderTop: "1px solid var(--border-hairline)", background: "var(--surface-card)", display: "flex", gap: 8, alignItems: "center" }}>
        <IconButton icon="camera" label="Adjuntar foto" />
        <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Escribí un mensaje"
          style={{ flex: 1, height: 40, border: "1px solid var(--border-default)", borderRadius: "var(--radius-pill)", padding: "0 14px", font: "var(--type-body-sm)", outline: "none", background: "var(--surface-card)" }} />
        <button onClick={send} aria-label="Enviar" style={{ width: 40, height: 40, border: 0, borderRadius: "var(--radius-circle)", background: "var(--brand)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Icon name="send" size={18} />
        </button>
      </div>
    </div>
  );
}
Object.assign(window, { ChatScreen });
