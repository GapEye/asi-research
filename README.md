# ASI Research

Jekyll site for [asi-research.com](https://asi-research.com): an independent
research map for understanding the roadmap to artificial superintelligence and
finding credible next work.

## Content model

- `_papers/` contains catalogued research signals.
- `_posts/` contains essays.
- Every research signal has a controlled `area`, `kind`, and editorial `track`.
- `_config.yml` defines the research-area and artifact vocabularies used by the
  homepage, filters, research notes, and related-entry system.

Required paper front matter:

```yaml
title: "Entry title"
catalog_id: ASI-LIB-041
date: 2026-07-09
track: technical
area: agents-self-improvement
kind: system
status: code available
authors:
  - Example Author
abstract: >-
  A concise statement of the mechanism, evidence, and relevance.
open_question: "What important research question does this entry leave open?"
external_url: https://example.com/primary-source
```

Optional fields include `code_url`, `pdf`, `featured`, `hero_image`,
`hero_image_alt`, `hero_image_credit`, and `hero_image_url`.

## Research areas

- `foundations-pathways`
- `frontier-models`
- `agents-self-improvement`
- `automated-ai-rd`
- `ai-for-science`
- `evals-control-governance`

Artifact kinds are `paper`, `model-release`, `benchmark`, `system`,
`framework`, and `living-guide`.

## Local preview

The production site is built by GitHub Pages. Use the Ruby version pinned in
`.ruby-version` with Bundler:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. The generated `_site/` directory and local Jekyll
caches are ignored. The GitHub Pages version of Liquid uses Ruby's legacy taint
API, so Ruby 3.2+ is not compatible with this dependency set.

## Deployment

The site deploys from the `main` branch through GitHub Pages. The tracked
`CNAME` preserves the `asi-research.com` custom domain.
