---
title: "The Llama 4 Herd"
catalog_id: ASI-LIB-034
date: 2025-04-05
track: technical
status: open-weight model drop
authors:
  - Meta AI
abstract: >-
  Meta's Llama 4 Scout and Maverick introduced open-weight natively multimodal
  mixture-of-experts models, distilled from the larger Behemoth teacher model.
external_url: https://ai.meta.com/blog/llama-4-multimodal-intelligence/
---

Llama 4 is older than the July 2026 frontier drops, but it belongs in the ASI
map because it anchors the open-weight side of the capability race. Meta
introduced Scout and Maverick as natively multimodal mixture-of-experts models.

## Technical signal

Llama 4 Maverick uses 17B active parameters and 400B total parameters, with
alternating dense and MoE layers. Meta also described Behemoth as a teacher
model for the released systems.

## ASI relevance

Open-weight frontier-adjacent models matter because they let outside labs
inspect, adapt, distill, and build agents without waiting for closed APIs. That
widens the experimentation surface for recursive and multi-agent systems.

Source trail: Meta announced Scout and Maverick on
[X](https://x.com/AIatMeta/status/1908598456144531660).
