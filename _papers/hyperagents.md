---
title: "Hyperagents"
catalog_id: ASI-LIB-014
date: 2026-03-19
track: technical
area: agents-self-improvement
kind: system
status: code available
open_question: "Can self-referential task and meta-agent improvement transfer reliably across domains where feedback is sparse or delayed?"
authors:
  - Jenny Zhang
  - Bingchen Zhao
  - Wannan Yang
  - Jakob Foerster
  - Jeff Clune
  - Minqi Jiang
  - Sam Devlin
  - Tatiana Shavrina
abstract: >-
  Self-referential agents that combine task and meta agents into an editable
  program, allowing the improvement process itself to be improved across
  domains.
external_url: https://arxiv.org/abs/2603.19461
hero_image: /assets/img/library/hyperagents.jpg
hero_image_alt: "Hyperagents system diagram comparing DGM and Hyperagents"
hero_image_credit: "Figure via ar5iv rendering of arXiv:2603.19461"
hero_image_url: https://ar5iv.labs.arxiv.org/html/2603.19461
code_url: https://github.com/facebookresearch/Hyperagents
---

Hyperagents generalize the DGM idea beyond coding tasks. The central move is to
put the task agent and the meta agent inside a single editable program so the
system can improve both what it does and how it improves.

## Why it matters

DGM works especially well when coding skill and self-modification skill align.
Hyperagents attack the harder case: any computable task where the path from
task performance to better self-improvement is not obvious.

## Code

The public repository includes domain code, task/meta-agent implementations,
and a generation loop. It also carries the right warning: generated code should
be executed in controlled environments.
