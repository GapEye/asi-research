---
title: "AI Agent Systems: Architectures, Applications, and Evaluation"
catalog_id: ASI-LIB-036
date: 2026-01-05
track: technical
status: survey
authors:
  - Bin Xu
abstract: >-
  A 2026 survey of AI agent architectures, orchestration patterns, deployment
  settings, evaluation practices, and open reliability challenges.
external_url: https://arxiv.org/abs/2601.01743
---

This survey is useful as scaffolding for the whole library. It organizes agent
systems around model cores, memory, world models, planners, tool routers,
critics, orchestration patterns, and deployment settings.

## Why it matters

Agent evaluation is hard because long-horizon workflows are non-deterministic,
tool-dependent, and sensitive to retry budgets, context growth, and environment
variation. That is exactly the measurement problem ASI-oriented systems have to
solve.

## ASI relevance

As agents become the default interface for frontier models, architectural
taxonomy becomes operational. It tells us what must improve: memory, planning,
tool use, verification, guardrails, and reproducible evals under realistic
workloads.
