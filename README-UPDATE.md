# Cyber theme update

Two files, both full replacements — overwrite them in your repo and push:

    assets/css/style.css     (dark cyber-blue theme, full rewrite)
    assets/js/neural-bg.js   (brighter + denser neural field with node halos)

No layout/HTML changes needed; everything else stays as-is.

What changed:
- Background: deep cyber blue (#0A1428) with two faint radial glows for
  depth; light ink text (#E8ECF5).
- Accents brightened for dark bg: electric ultramarine #5B79FF (technical),
  neon teal #19C99A (governance). Track cards now glow on hover.
- Neural field: up to 130 nodes (was 90), link distance 135px (was 110),
  roughly double the base opacity, brighter cursor reactions, and a soft
  halo behind every node.
- Article bodies sit on a translucent dark panel so long-form text stays
  readable over the field.

Tuning knobs if you want more/less after seeing it live (neural-bg.js):
  0.17  base link opacity        (line ~85)
  3.0   cursor link multiplier   (line ~87)
  130 / 11500  node count cap and density (initNodes)
