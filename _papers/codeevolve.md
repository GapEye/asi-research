---
title: "CodeEvolve: Open-Source Evolutionary Coding Agent for Algorithmic Discovery"
catalog_id: ASI-LIB-013
date: 2026-05-28
track: technical
area: automated-ai-rd
kind: system
status: open-source code
open_question: "How does island-based evolutionary search compare with simpler optimization methods when evaluator calls and model inference are held to the same compute budget?"
authors:
  - Henrique Assumpcao
  - Diego Ferreira
  - Leandro Campos
  - Fabricio Murai
abstract: >-
  An open-source evolutionary coding agent that combines LLMs, island-based
  search, crossover, meta-prompting, refinement, and evaluator feedback for
  algorithmic discovery.
external_url: https://arxiv.org/abs/2510.14150
hero_image: /assets/img/library/codeevolve.jpg
hero_image_alt: "CodeEvolve algorithmic discovery workflow diagram"
hero_image_credit: "Figure via ar5iv rendering of arXiv:2510.14150"
hero_image_url: https://ar5iv.labs.arxiv.org/html/2510.14150
code_url: https://github.com/inter-co/science-codeevolve
---

CodeEvolve is important because it is a public implementation of the
AlphaEvolve-style thesis: when a problem can be scored automatically, a coding
agent can search the program space and retain improvements.

## Technical shape

The framework uses an island-based evolutionary search over candidate programs,
LLM-generated mutations, crossover, meta-prompting, refinement, and a structured
archive. The paper reports competitive results on AlphaEvolve-style benchmark
tasks under matched conditions.

## Build note

This is a practical starting point for ASI-adjacent experimentation because it
replaces vague "AI creativity" with a measurable loop: propose code, execute
tests, score the output, and keep only improvements.
