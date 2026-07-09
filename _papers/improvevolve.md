---
title: "ImprovEvolve: Basin-Hopping Meets LLM-Guided Evolutionary Search"
catalog_id: ASI-LIB-038
date: 2026-06-26
track: technical
area: automated-ai-rd
kind: system
status: evolutionary search
open_question: "How well do evolved initialization, improvement, and perturbation operators transfer beyond the optimization problems on which they were discovered?"
authors:
  - Alexey Kravatskiy
  - Valentin Khrulkov
  - Ivan Oseledets
abstract: >-
  An AlphaEvolve-inspired algorithm that decomposes LLM-guided evolutionary
  search into initialization, local improvement, and perturbation operators.
external_url: https://arxiv.org/abs/2602.10233
hero_image: /assets/img/library/improvevolve.jpg
hero_image_alt: "ImprovEvolve method diagram"
hero_image_credit: "Figure via ar5iv rendering of arXiv:2602.10233"
hero_image_url: https://ar5iv.labs.arxiv.org/html/2602.10233
---

ImprovEvolve is a useful refinement of the AlphaEvolve pattern. Instead of
asking an LLM to evolve one monolithic optimizer, it evolves specialized
operators for initialization, local improvement, and perturbation.

## Results to watch

The paper reports new state-of-the-art packings for multiple hexagon-in-hexagon
cases, a stronger lower bound for the second autocorrelation inequality, and
improvements for many spherical-code instances.

## ASI relevance

The big lesson is cognitive load management. If we want LLM-guided search to
scale, we may need decomposed operator libraries rather than heroic single-shot
program synthesis.
