Mutually exclusive choice. Wrap siblings in RadioGroup.

```jsx
<RadioGroup>
  <Radio name="tipo" label="Busco un profesional" checked={t === "cliente"} onChange={...} />
  <Radio name="tipo" label="Ofrezco mis servicios" description="Vas a poder publicar tu perfil" />
</RadioGroup>
```
