const { Field, Input, Textarea, Select, Button, Checkbox, RadioGroup, Radio, Icon } = window.InfoTrabajosDesignSystem_1be5a5;

function PublishScreen({ onPublish }) {
  const [urgency, setUrgency] = React.useState("semana");
  return (
    <div style={{ padding: "14px 16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
      <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)", margin: 0 }}>
        Cuéntanos qué necesitas. Los profesionales de la zona te responden con cotización.
      </p>
      <Field label="¿Qué trabajo necesitas?" required>
        <Input size="lg" placeholder="Ej. cambiar boiler de 40 L" />
      </Field>
      <Field label="Categoría" required>
        <Select placeholder="Elige una categoría" options={window.TRADES.map((t) => t.label)} />
      </Field>
      <Field label="Descripción" hint="Agrega medidas, materiales y fotos si tienes">
        <Textarea rows={3} placeholder="Boiler eléctrico, ya tengo el equipo comprado..." />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label="Zona"><Input icon="map-pin" defaultValue="Providencia" /></Field>
        <Field label="Cotización"><Input type="number" defaultValue="3200" suffix="MXN" /></Field>
      </div>
      <div>
        <div style={{ font: "var(--type-label)", marginBottom: 8, color: "var(--text-strong)" }}>¿Para cuándo?</div>
        <RadioGroup>
          <Radio name="u" label="Es urgente" description="Aparece primero en el feed, con etiqueta Urgente" checked={urgency === "urgente"} onChange={() => setUrgency("urgente")} />
          <Radio name="u" label="Esta semana" checked={urgency === "semana"} onChange={() => setUrgency("semana")} />
          <Radio name="u" label="Sin apuro" checked={urgency === "flexible"} onChange={() => setUrgency("flexible")} />
        </RadioGroup>
      </div>
      <Checkbox label="Compartir mi teléfono con los profesionales que postulen" />
      <Button size="touch" block icon="send" onClick={onPublish}>Publicar solicitud</Button>
    </div>
  );
}
Object.assign(window, { PublishScreen });
