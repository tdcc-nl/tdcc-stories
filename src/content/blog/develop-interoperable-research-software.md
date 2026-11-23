---
title: Develop interoperable research software
description: Practical starting points for research software developers who want their tools to work well with other software, data and infrastructure.
pubDatetime: 2026-11-23
author: TDCC LSH
draft: false
featured: true
storyType: how-to
audience:
  - research-software-engineers
  - researchers
organisations:
  - TDCC LSH
tags:
  - interoperability
  - research-software
  - fair
  - standards
links:
  - label: FAIR principles for research software (FAIR4RS)
    url: https://doi.org/10.15497/RDA00068
  - label: bio.tools registry
    url: https://bio.tools
  - label: EDAM ontology
    url: https://edamontology.org
  - label: WorkflowHub
    url: https://workflowhub.eu
  - label: RO-Crate
    url: https://www.researchobject.org/ro-crate/
  - label: Research Software Directory
    url: https://research-software-directory.org
---

> This is a short version to get the conversation started. A longer story based on the interoperability white paper will follow.

## The problem

Developers often lack clear guidance on how to design and implement interoperable research software. Many tools work well on their own but are hard to combine with other tools, data or infrastructure. This costs researchers time and makes results harder to reuse.

## The idea

Give software developers practical guidance and point them to resources that already exist, so they don't have to work it out from scratch.

## Where to start

- **Describe your software with standard metadata.** Add a [CodeMeta](https://codemeta.github.io) file or a [CITATION.cff](https://citation-file-format.github.io) file so others can find, cite and reuse your software.
- **Register your tool.** Make it findable in [bio.tools](https://bio.tools) and the [Research Software Directory](https://research-software-directory.org).
- **Use shared vocabularies.** Describe operations, inputs and outputs with the [EDAM ontology](https://edamontology.org) so other tools and workflow systems can tell what your tool does.
- **Use open, documented interfaces.** Use standard file formats, and describe web services with an OpenAPI specification.
- **Make workflows portable.** Use a workflow language such as CWL or Nextflow, and share workflows on [WorkflowHub](https://workflowhub.eu).
- **Package results with context.** Use [RO-Crate](https://www.researchobject.org/ro-crate/) to bundle outputs together with their metadata and provenance.
- **Follow the FAIR4RS principles** as a checklist for findable, accessible, interoperable and reusable software.

## Based on

- Outputs from the interoperability white paper <!-- TODO add link -->
- Existing standards, resources and examples from the community

## Next steps

<!-- TODO expand with examples and lessons from the paper -->

This story will grow with concrete examples and lessons learned. Do you have an example of interoperable research software in life sciences and health? Let us know.
