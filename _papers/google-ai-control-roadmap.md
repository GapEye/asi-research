---
title: "Google DeepMind AI Control Roadmap"
catalog_id: ASI-LIB-031
date: 2026-06-23
track: governance
area: evals-control-governance
kind: framework
status: agent security framework
open_question: "How effective are layered controls against capable agents that actively evade monitoring across long-horizon tasks?"
authors:
  - Google DeepMind
abstract: >-
  Google DeepMind's defense-in-depth roadmap for securing advanced AI agents
  even when alignment is imperfect.
external_url: https://deepmind.google/blog/securing-the-future-of-ai-agents/
hero_image: /assets/img/library/google-ai-control-roadmap.jpg
hero_image_alt: "Google DeepMind AI control roadmap graphic"
hero_image_credit: "Google DeepMind AI Control Roadmap image"
hero_image_url: https://deepmind.google/blog/securing-the-future-of-ai-agents/
---

Google DeepMind's AI Control Roadmap is a governance entry because it treats
advanced agents as systems that need layered control, not just aligned model
weights.

## Control model

The roadmap combines sandboxing, endpoint security, prompt-injection
resistance, model alignment, monitoring, prevention, and response. It maps
security protocols to capability levels, including detection evasion and attack
execution.

## ASI relevance

Self-improving and tool-using agents will need permissioning, monitoring, and
graduated access. A control roadmap is one way to let capability scale while
keeping deployment incremental and auditable.
