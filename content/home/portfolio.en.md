---
widget: portfolio
headless: true
weight: 20
title: ''
subtitle: ''

content:
  page_type: project
  count: 9
  filter_default: 0
  filters:
    folders: ["project"]   # content/project留??쒖떆
    featured_only: false
  filter_field: "tags"
  filter_default: 0
  filter_button:
    - name: All
      tag: '*'
    - name: AI Game Development
      tag: AG
    - name: AI Image Generation
      tag: AI
    - name: Fake Review Detection
      tag: FR
    - name: Web
      tag: WP
    - name: Data
      tag: DP


design:
  columns: 3               # ?レ옄 3
  view: masonry
  flip_alt_rows: false
  background: {}
  spacing: {padding: [0, 0, 0, 0]}
  options:
    justify: center
---


