# asi-research.com

Jekyll site for ASI Research: essays (`_posts/`), a catalogued library of
papers and methods (`_papers/`), deployed on GitHub Pages at
https://asi-research.com.

## Deploy (one-time setup)

1. **Create a public GitHub repo** (e.g. `asi-research`) and push this folder:

   ```bash
   cd asi-research
   git init && git add -A && git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOURUSERNAME/asi-research.git
   git push -u origin main
   ```

2. **Enable Pages**: repo → Settings → Pages → Source: "Deploy from a branch"
   → Branch: `main`, folder `/ (root)`. GitHub builds Jekyll automatically.

3. **DNS at Spaceship** (domain → Advanced DNS):
   - Four `A` records, host `@`, pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record, host `www`, value `YOURUSERNAME.github.io`

4. **Custom domain**: repo → Settings → Pages → Custom domain →
   `asi-research.com` → Save. (The `CNAME` file in this repo keeps the
   setting across deploys.) Once DNS propagates, check **Enforce HTTPS**.

5. **Verify the domain** (important): GitHub account Settings → Pages →
   "Add a domain" → `asi-research.com` → add the TXT record GitHub gives
   you at Spaceship. This prevents anyone else from ever claiming the
   domain on GitHub Pages.

## Writing content

- **New essay**: add `_posts/YYYY-MM-DD-slug.md` with front matter
  (`title`, `subtitle`, `catalog_id`, `date`). See the existing post.
- **New library entry**: add a file to `_papers/` with `track: technical`
  or `track: governance`, plus optional `status`, `abstract`, `authors`,
  `pdf`, `external_url`. See the two existing entries.
- **Catalog IDs**: essays use `ASI-2026-NNN`, library entries `ASI-LIB-NNN`.
  Increment manually.
- Push to `main` and the site rebuilds in ~1 minute.

## Local preview (optional)

Requires Ruby:

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## Structure

```
_config.yml       Site config, papers collection
_layouts/         default / post / paper templates
_posts/           Essays
_papers/          Library entries (technical + governance tracks)
assets/css/       style.css — design tokens at the top of the file
index.html        Homepage
writing.html      Essay index
library.html      Library index, grouped by track
about.md          About page
CNAME             Custom domain for GitHub Pages
```


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