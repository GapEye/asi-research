---
title: "Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents"
catalog_id: ASI-LIB-015
date: 2026-03-12
track: technical
status: code available
authors:
  - Jenny Zhang
  - Shengran Hu
  - Cong Lu
  - Robert Lange
  - Jeff Clune
abstract: >-
  A self-improving coding-agent system that modifies its own code, validates
  changes on benchmarks, and keeps a growing archive of diverse agents.
external_url: https://arxiv.org/abs/2505.22954
code_url: https://github.com/jennyzzt/dgm
---

DGM is one of the clearest empirical steps toward recursive self-improvement:
the system edits its own codebase and validates those edits against software
engineering benchmarks.

## Results

The reported run improved SWE-bench performance from 20.0% to 50.0% and
Polyglot from 14.2% to 30.7%, while maintaining an archive of many generated
agents instead of climbing a single hill.

## ASI relevance

Open-ended archives matter. ASI progress may depend less on one perfect update
and more on preserving diverse stepping stones, including changes that look
locally odd but unlock later improvements.
