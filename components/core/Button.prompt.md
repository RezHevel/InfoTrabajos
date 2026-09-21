The action control — one `primary` per screen, everything else `secondary` or `ghost`.

```jsx
<Button icon="send">Enviar solicitud</Button>
<Button variant="secondary" icon="message-square">Mensaje</Button>
<Button variant="accent" size="touch" block>Estoy disponible</Button>
```

Sizes: `sm` 34px (table rows), `md` 40px (default web), `lg` 48px, `touch` 52px (mobile app). `variant="link"` drops all padding and underlines.
