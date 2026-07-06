# Appearance update: seraph icon + neural background

Copy these folders/files into your repo root, overwriting the two existing
files (_layouts/default.html and assets/css/style.css), then commit and push:

    _layouts/default.html        (updated: favicon links, canvas, header mark, script)
    assets/css/style.css         (updated: appended background/mark styles at the end)
    assets/js/neural-bg.js       (new: the animated neural field)
    assets/img/seraph.svg        (new: favicon — adapts to light/dark browser themes)
    assets/img/favicon-32.png    (new: PNG fallback favicon)
    assets/img/seraph-180.png    (new: apple-touch-icon)

If you have edited default.html or style.css yourself since the initial
scaffold, merge instead of overwriting: the CSS changes are purely appended
at the end of the file under the "appearance pass 2" comment, and the layout
changes are the <canvas>, the icon <link> tags, the inline SVG in the
wordmark, and the <script> tag before </body>.

Notes:
- The background respects prefers-reduced-motion (renders a static field,
  still parallaxes on scroll, no animation loop).
- It pauses when the tab is hidden and caps devicePixelRatio at 2 to stay
  cheap on high-DPI screens.
- Favicon may take a hard refresh (Ctrl/Cmd+Shift+R) to appear — browsers
  cache favicons aggressively.
