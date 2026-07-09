---
title: "From 0-to-1 to 1-to-N: Reproducible Engineering Evidence for MetaAI Recursive Self-Design"
catalog_id: ASI-LIB-011
date: 2026-06-08
track: technical
area: agents-self-improvement
kind: paper
status: reproducibility protocol
open_question: "What reproducibility criteria distinguish sustained recursive self-design from one-shot agent optimization across tasks and codebases?"
authors:
  - Dun Li
  - Jiatao Li
  - Hongzhi Li
abstract: >-
  A compact evidence framework for recursive self-design, mapping public
  systems such as DGM, STOP, Goedel Agent, and ShinkaEvolve against criteria
  for inspectable, feedback-directed self-modification.
external_url: https://arxiv.org/abs/2606.09663
code_url: https://github.com/DunLi-Tsinghua/MetaAI-Mini
---

This paper is useful because it tries to make "recursive self-improvement" less
vague. It asks whether a system has an inspectable target, a meta-level
modifier, feedback-directed selection, and recursive continuation.

## Technical contribution

The paper's most valuable role is taxonomic. It separates mature experimental
results from protocols and makes it easier to compare claims across DGM-like
systems, coding agents, and mini reproducibility packages.

## Code

The linked MetaAI-Mini repository is a small HumanEval-based protocol rather
than a completed frontier run. That is still useful: it gives researchers a
minimal scaffold for testing whether proposed self-design loops are actually
recursive or merely one-shot agent optimization.
