---
title: "Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?"
catalog_id: ASI-LIB-017
date: 2025-11-24
track: technical
area: agents-self-improvement
kind: system
status: agent benchmark
open_question: "Can on-the-fly scaffold evolution improve performance on unseen software tasks without destabilizing the agent or overfitting task feedback?"
authors:
  - Chunqiu Steven Xia
  - Zhe Wang
  - Yan Yang
  - Yuxiang Wei
  - Lingming Zhang
abstract: >-
  A live software engineering agent that evolves its own scaffold while solving
  real software tasks, reporting strong SWE-bench Verified and SWE-Bench Pro
  results without test-time scaling.
external_url: https://arxiv.org/abs/2511.13646
hero_image: /assets/img/library/live-swe-agent.jpg
hero_image_alt: "Live-SWE-agent benchmark comparison charts"
hero_image_credit: "Figure via ar5iv rendering of arXiv:2511.13646"
hero_image_url: https://ar5iv.labs.arxiv.org/html/2511.13646
---

Live-SWE-agent is notable because it moves self-improvement into runtime. Rather
than performing an offline search for a better scaffold, the agent modifies its
own scaffold while solving software tasks.

## Why it matters

Software engineering is the natural proving ground for recursive improvement:
the agent's substrate is code, the task output is code, and feedback can be
partially automated through builds, tests, static checks, and benchmark
evaluation.

## ASI relevance

If live self-evolution becomes reliable, agents can adapt their tools and
control flow to the problem distribution they are currently facing. That is a
more fluid route to capability gains than fixed hand-authored scaffolds.
