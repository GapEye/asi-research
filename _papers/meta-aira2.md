---
title: "AIRA2: Overcoming Bottlenecks in AI Research Agents"
catalog_id: ASI-LIB-035
date: 2026-04-16
track: technical
area: automated-ai-rd
kind: system
status: AI research agents
open_question: "Which combinations of asynchronous execution, validation design, and adaptive operators let AI research agents scale search without overfitting?"
authors:
  - Meta AI
abstract: >-
  Meta AI's AIRA2 focuses on throughput, generalization, and operator limits in
  AI research agents for model and architecture discovery.
external_url: https://ai.meta.com/research/publications/aira-overcoming-bottlenecks-in-ai-research-agents/
---

AIRA2 is a useful companion to the existing AIRA architecture-discovery note.
Meta identifies three bottlenecks in AI research agents: synchronous single-GPU
execution, validation overfitting across long search horizons, and the ceiling
imposed by fixed single-turn LLM operators.

## Why it matters

These are practical bottlenecks, not vague AGI talk. Throughput, overfitting,
and operator expressivity determine whether AI research agents can keep
improving after the first few obvious wins.

## ASI relevance

Automated AI R&D will need scalable execution, selection that generalizes, and
operators that improve with the task. AIRA2 is a good marker for the field
moving from demos toward engineering constraints.
