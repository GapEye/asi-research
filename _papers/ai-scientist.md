---
title: "The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery"
catalog_id: ASI-LIB-020
date: 2024-09-01
track: technical
status: code available
authors:
  - Chris Lu
  - Cong Lu
  - Robert Tjarko Lange
  - Jakob Foerster
  - Jeff Clune
  - David Ha
abstract: >-
  A framework for automated scientific discovery in which frontier models
  generate ideas, write code, run experiments, plot results, write papers, and
  simulate review.
external_url: https://arxiv.org/abs/2408.06292
code_url: https://github.com/SakanaAI/AI-Scientist
---

The AI Scientist is an early full-stack research automation system. Its value
is not that it replaces a strong research lab today; it is that it makes the
research loop explicit and executable.

## Loop

```python
idea = generate_research_idea(literature_context)
experiment = write_experiment_code(idea)
results = run_and_plot(experiment)
paper = draft_paper(idea, results)
score = automated_reviewer(paper)
```

## ASI relevance

ASI depends on accelerating discovery itself. Systems like this make it
possible to ask which parts of science are still human-bottlenecked and which
can be moved into cheaper, parallel, evaluator-driven loops.
