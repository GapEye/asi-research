---
title: "Huxley-Godel Machine: Human-Level Coding Agent Development"
catalog_id: ASI-LIB-018
date: 2025-10-29
track: technical
status: code available
authors:
  - Wenyi Wang
  - Piotr Piekos
  - Li Nanbo
  - Firas Laakom
  - Yimeng Chen
  - Mateusz Ostaszewski
  - Mingchen Zhuge
  - Juergen Schmidhuber
abstract: >-
  A self-improving coding-agent method that guides search by estimating the
  improvement potential of agent descendants rather than only current benchmark
  score.
external_url: https://arxiv.org/abs/2510.21614
hero_image: /assets/img/library/huxley-godel-machine.jpg
hero_image_alt: "Huxley-Godel Machine agent illustration"
hero_image_credit: "Figure via ar5iv rendering of arXiv:2510.21614"
hero_image_url: https://ar5iv.labs.arxiv.org/html/2510.21614
code_url: https://github.com/metauto-ai/HGM
---

HGM sharpens an important point: an agent that scores best now is not
necessarily the agent with the best descendants. The paper calls this a
metaproductivity-performance mismatch.

## Technical move

The proposed CMP metric aggregates descendant performance as a proxy for an
agent's self-improvement potential. Search is then guided toward lineages that
are productive, not only toward nodes that look best under the current
benchmark.

## ASI relevance

Recursive improvement is a lineage problem. If the objective only selects for
near-term benchmark wins, the search may discard systems that would have become
better improvers after a few generations.
