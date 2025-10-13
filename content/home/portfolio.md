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
  columns: 3               # 숫자 3
  view: masonry
  flip_alt_rows: false
  background: {}
  spacing: {padding: [0, 0, 0, 0]}
  options:
    justify: center
---
<style>
  /* 필터 바 폭을 내용만큼만 줄이고, 정확히 가운데 */
  .home-section .isotope-filters {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-wrap: wrap !important;
    gap: .5rem !important;
    width: max-content !important;   /* ← 핵심 */
    margin: 1rem auto 1.5rem auto !important;
    padding-left: 0 !important;      /* ul 기본 들여쓰기 제거 대비 */
  }
  .home-section .isotope-filters ul { padding-left: 0 !important; margin: 0 !important; }
  .home-section .isotope-filters li { list-style: none !important; }
</style>

