The worker result row — search results, saved lists, recommendations.

```jsx
<WorkerCard name="Marta Quispe" trade="Electricista" tradeIcon="zap"
  rating={4.8} reviews={126} zone="Villa Urquiza" distance="2,4 km"
  rate="$4.500/h" available verified skills={["Tablero", "Urgencias 24 h"]}
  onContact={openChat} onClick={goProfile} />
```

Omit `rating` for new workers — the card falls back to "Sin reseñas todavía" instead of showing zero stars.
