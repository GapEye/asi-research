---
title: "A Shared Playbook for Trustworthy Third-Party Evaluations"
catalog_id: ASI-LIB-025
date: 2026-05-29
track: governance
area: evals-control-governance
kind: framework
status: eval practice
open_question: "Which harness configurations best predict deployed agent behavior while remaining reproducible across independent evaluators?"
authors:
  - OpenAI
abstract: >-
  OpenAI's recommendations for independent evaluations of frontier-model
  capabilities and safeguards, with emphasis on harness design and validity.
external_url: https://openai.com/index/trustworthy-third-party-evaluations-foundations/
---

This note matters because frontier evaluations are no longer simple prompt and
answer tests. OpenAI argues that the evaluation harness now shapes the result:
tool access, retries, context management, scoring, and environment setup can
materially change measured capability.

## Practical takeaways

- Eval reports should state what claim the setup is meant to support.
- Harness choices should be documented because they are part of the result.
- Agentic evaluations should test the interfaces users actually rely on.
- Intermediate artifacts can matter for assessing deception, sandbagging, and
  evaluation awareness.

## ASI relevance

As models become more agentic, governance lives or dies on whether evaluations
measure deployed systems rather than stripped-down model calls. This is a useful
operational standard for a fast-moving ASI lab.
