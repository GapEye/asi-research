---
title: "ASI Technical Reading List: Compounding Intelligence"
catalog_id: ASI-LIB-001
date: 2026-07-06
track: technical
status: living document
abstract: >-
  A curated map of the papers that matter most for building ASI: post-AGI
  pathways, recursive self-improvement, automated AI research, architecture
  discovery, and code-evaluable scientific search.
external_url: https://arxiv.org/abs/2606.12683
---

This reading list organizes the current ASI literature around one claim:
superintelligence is less likely to arrive as a single artifact than as a
stack of compounding loops. Models write code, code evaluates models, agents
design stronger agents, and scientific workflows become cheaper, faster, and
more parallel.

## North star

[From AGI to ASI](https://arxiv.org/abs/2606.12683) is the best current
orientation document. It frames the transition from AGI to artificial general
superintelligence around four pathways: scaling AGI, AI paradigm shifts,
recursive improvement, and large-scale multi-agent collectives.

## Core technical clusters

- **Recursive self-improvement:** Darwin Godel Machine, Hyperagents, Huxley-Godel Machine, and MetaAI recursive self-design.
- **Automated AI R&D:** AI Scientist, Live-SWE-agent, CodeEvolve, AlphaEvolve, and agentic architecture discovery.
- **Evaluation-grounded discovery:** systems that accept only changes validated by tests, benchmarks, proof checks, simulations, or domain evaluators.
- **Collective intelligence:** ensembles of specialized agents that produce stronger search, review, repair, and synthesis than a single prompt loop.

## Build pattern

The practical pattern across these papers is simple:

```python
archive = seed_systems()
while budget.remaining():
    parent = select_promising_or_diverse(archive)
    proposal = model.modify(parent.code, parent.logs, objective)
    score = evaluate_in_sandbox(proposal)
    if score.valid and score.beats_acceptance_bar:
        archive.add(proposal, score)
```

The hard research problems are not the loop syntax. They are evaluator design,
sample efficiency, transfer across domains, keeping the search open-ended, and
making the resulting systems inspectable enough for deployment.

## Current priority

Treat every paper in this library as a component in an ASI research stack:
scaling tells us what raw capability can buy, automated R&D shows how progress
can compound, and governance measurement keeps that acceleration legible.
