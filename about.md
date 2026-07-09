---
layout: default
title: Method
description: The purpose, selection criteria, evidence standard, and editorial method behind the ASI Research map.
permalink: /about/
---

<header class="method-hero">
  <div class="wrap method-hero-grid">
    <div>
      <p class="eyebrow mono">Method / purpose / standard</p>
      <h1>Make the road to ASI understandable—and the next useful problem easier to find.</h1>
    </div>
    <div class="method-hero-copy">
      <p>ASI Research is an independent working map for people who want to understand artificial superintelligence and for researchers who want to help build the knowledge, systems, and assurance it will require.</p>
      <p>It is optimistic about the potential of machine intelligence and exacting about evidence. Progress is most useful when its mechanisms, limitations, and open questions are visible.</p>
    </div>
  </div>
</header>

<section class="single-metric">
  <div class="wrap single-metric-grid">
    <span class="mono">The single success metric</span>
    <blockquote>Did this help someone understand the roadmap and choose a credible next piece of work?</blockquote>
    <p>There is no commercial funnel behind the site today. Corpus counts describe the map; they are not the goal. The goal is researcher and reader progress.</p>
  </div>
</section>

<section class="section method-audiences">
  <div class="wrap">
    <div class="section-intro compact">
      <div>
        <p class="section-kicker mono">Who it serves</p>
        <h2>Curiosity and contribution are one continuum.</h2>
      </div>
    </div>
    <div class="audience-grid">
      <article>
        <span class="mono">01 / Understand</span>
        <h3>For the curious</h3>
        <p>See a legible roadmap: what ASI means, which capability loops could lead there, what is already working, and where the largest uncertainties remain.</p>
        <a class="text-link" href="{{ '/roadmap/' | relative_url }}">Start with the canonical roadmap →</a>
      </article>
      <article>
        <span class="mono">02 / Enter the field</span>
        <h3>For emerging researchers</h3>
        <p>Move from broad interest to a grounded view of architectures, benchmarks, codebases, research groups, and tractable open questions.</p>
        <a class="text-link" href="{{ '/library/technical-reading-list/' | relative_url }}">Follow the technical field guide →</a>
      </article>
      <article>
        <span class="mono">03 / Make progress</span>
        <h3>For active researchers</h3>
        <p>Trace adjacent work across subfields, find primary sources and public code, and identify weak links in the compounding-intelligence loop.</p>
        <a class="text-link" href="{{ '/library/' | relative_url }}?code=1">Find systems with open code →</a>
      </article>
    </div>
  </div>
</section>

<section class="section method-scope">
  <div class="wrap method-scope-grid">
    <div class="method-sticky">
      <p class="section-kicker mono">Scope</p>
      <h2>Six connected research areas.</h2>
      <p>The map follows the full loop: capability, agency, automated discovery, scientific impact, and the methods that keep increasingly powerful systems measurable and steerable.</p>
    </div>
    <ol class="method-area-list">
      {% for area in site.research_areas %}
      {% assign area_papers = site.papers | where: "area", area.id %}
      <li>
        <span class="mono">{{ area.index }}</span>
        <div><strong>{{ area.name }}</strong><p>{{ area.question }}</p></div>
        <span class="mono">{{ area_papers | size }} signals</span>
      </li>
      {% endfor %}
    </ol>
  </div>
</section>

<section class="section method-process">
  <div class="wrap">
    <div class="section-intro">
      <div>
        <p class="section-kicker mono">Editorial method</p>
        <h2>From source to usable signal.</h2>
      </div>
      <p>The library is selective, not exhaustive. An entry belongs when it clarifies a mechanism, reports meaningful evidence, exposes a useful implementation, or improves the way progress is measured and governed.</p>
    </div>
    <ol class="process-grid">
      <li><span class="mono">01</span><h3>Select</h3><p>Prefer primary papers, official technical reports, benchmarks, and public implementations over secondhand coverage.</p></li>
      <li><span class="mono">02</span><h3>Place</h3><p>Locate the work in one primary research area and identify the artifact it actually is—not everything is a “paper.”</p></li>
      <li><span class="mono">03</span><h3>Synthesize</h3><p>Extract the central mechanism, reported evidence, and ASI relevance, then state one open research question the work leaves behind.</p></li>
      <li><span class="mono">04</span><h3>Connect</h3><p>Link related systems and source code so an interested reader can continue from orientation into the work itself.</p></li>
    </ol>
  </div>
</section>

<section class="section evidence-standard">
  <div class="wrap evidence-grid">
    <div>
      <p class="section-kicker mono">Evidence standard</p>
      <h2>Ambitious thesis.<br>Calibrated claims.</h2>
    </div>
    <div class="evidence-copy">
      <p>ASI Research distinguishes what a source demonstrates from what it suggests. A benchmark gain is not automatically a general capability gain. A self-editing agent is not automatically recursive self-improvement. A roadmap is not a forecast.</p>
      <p>Notes are intended as concise analytical entry points, not substitutes for the source. Where code is public, it is linked. Where evidence is incomplete, the uncertainty should remain visible.</p>
      <div class="evidence-principles mono">
        <span>Primary sources</span><span>Mechanism first</span><span>Limits stated</span><span>Inference labeled</span>
      </div>
    </div>
  </div>
</section>

<section class="method-contact">
  <div class="wrap method-contact-grid">
    <div>
      <p class="section-kicker mono">Improve the map</p>
      <h2>Found a missing paper, unclear route, or research gap?</h2>
    </div>
    <div>
      <p>This is an independent research effort and a living work in progress. Corrections, source suggestions, and serious research conversations are welcome.</p>
      <a class="button button-primary" href="mailto:hello@asi-research.com">hello@asi-research.com ↗</a>
    </div>
  </div>
</section>
