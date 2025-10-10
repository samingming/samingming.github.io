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
    folders: ["project"]   # content/project만 표시
  filter_button:
    - name: All
      tag: '*'
    - name: Machine Learning
      tag: ML
    - name: Computer Vision
      tag: CV
    - name: NLP
      tag: NLP

design:
  columns: 3               # 숫자 3
  view: masonry
  flip_alt_rows: false
  background: {}
  spacing: {padding: [0, 0, 0, 0]}
---
