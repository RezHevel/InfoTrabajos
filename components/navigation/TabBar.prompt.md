App-only bottom nav. Icon + 11px label, clay when active.

```jsx
<TabBar value={tab} onChange={setTab} items={[
  { value: "buscar", label: "Buscar", icon: "search" },
  { value: "mensajes", label: "Mensajes", icon: "message-square", badge: true },
  { value: "perfil", label: "Perfil", icon: "user-round" },
]} />
```
