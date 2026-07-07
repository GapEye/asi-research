---
title: "Agentic Discovery of Neural Architectures: AIRA-Compose and AIRA-Design"
catalog_id: ASI-LIB-012
date: 2026-05-15
track: technical
status: architecture discovery
authors:
  - Alberto Pepe
  - Chien-Yu Lin
  - Despoina Magka
  - Bilge Acun
  - Yannan Nellie Wu
  - Anton Protopopov
  - Carole-Jean Wu
  - Yoram Bachrach
abstract: >-
  A 2026 paper showing LLM agents autonomously designing foundation-model
  architectures and training scripts, with AIRA-Compose and AIRA-Design
  producing models and mechanisms that match or beat hand-designed baselines.
external_url: https://arxiv.org/abs/2605.15871
hero_image: /assets/img/library/aira-architecture-discovery.jpg
hero_image_alt: "AIRA-Compose and AIRA-Design benchmark charts"
hero_image_credit: "Figure via ar5iv rendering of arXiv:2605.15871"
hero_image_url: https://ar5iv.labs.arxiv.org/html/2605.15871
---

AIRA matters because it moves automated AI R&D down into model architecture.
Agents are not just writing wrappers around existing models; they are exploring
computational primitives, scaling candidates, and designing mechanisms for
long-range dependencies.

## Results to watch

The paper reports AIRAformer and AIRAhybrid families, 1B-scale pretraining
runs, faster scaling frontiers than several baselines, and agent-written
attention mechanisms that approach human state of the art on Long Range Arena
tasks.

## ASI relevance

If automated architecture discovery becomes reliable, the capability frontier
stops depending only on human researchers proposing the next transformer-class
breakthrough. The loop becomes: generate architecture, train, evaluate,
extrapolate scaling, retain winners, and hand the archive to the next search.
