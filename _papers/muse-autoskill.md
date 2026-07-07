---
title: "MUSE-Autoskill"
catalog_id: ASI-LIB-037
date: 2026-05-26
track: technical
status: self-evolving agents
authors:
  - Huawei Lin
  - Peng Li
  - Jie Song
  - Fuxin Jiang
  - Tieying Zhang
abstract: >-
  A self-evolving agent framework that treats skills as long-lived, testable
  assets with creation, memory, management, evaluation, and refinement.
external_url: https://arxiv.org/abs/2605.27366
hero_image: /assets/img/library/muse-autoskill.jpg
hero_image_alt: "MUSE-Autoskill system overview diagram"
hero_image_credit: "Figure via ar5iv rendering of arXiv:2605.27366"
hero_image_url: https://ar5iv.labs.arxiv.org/html/2605.27366
---

MUSE-Autoskill focuses on a practical form of self-improvement: reusable skills.
Rather than treating skills as static prompt snippets, the framework gives them
a lifecycle: creation, memory, management, evaluation, and refinement.

## Why it matters

Skill-level memory lets an agent accumulate experience around each reusable
capability. The paper also emphasizes unit tests and runtime feedback, which
are necessary if skills are going to improve without becoming stale or unsafe.

## ASI relevance

Recursive improvement does not have to start by rewriting model weights. It can
begin with agents accumulating, testing, and refining the procedures they use
to solve tasks.
