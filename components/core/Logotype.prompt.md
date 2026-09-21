Renders the real logo asset. Set `base` to the relative path of `assets/` from your page.

```jsx
<Logotype variant="word-only" height={20} base="../../assets" />   // app/web header
<Logotype variant="lockup" height={140} base="../../assets" />      // splash / login
<Logotype variant="mark" height={28} tile base="../../assets" />    // on navy surfaces
```

The logo has a navy half and a bright-blue half: on dark backgrounds always use `tile` (white plate) or the light-blue-only contexts. Do not recolor, outline or redraw it.
