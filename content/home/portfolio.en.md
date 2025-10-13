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
    folders: ["project"]   #
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
  columns: 3           
  view: masonry
  flip_alt_rows: false
  background: {}
  spacing: {padding: [0, 0, 0, 0]}
  options:
    justify: center
---
<!-- ↓↓↓ 필터 바 가운데 정렬 전용 스타일 (CSS 파일 없이 적용) ↓↓↓ -->
<style>
  /* 필터 바를 강제로 가운데 정렬 */
  .home-section .isotope-filters,
  .home-section .portfolio-filters,
  .home-section .project-filter,
  .home-section .filter-buttons,
  .home-section .js-isotope-filter {
    display: flex !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
    gap: 0.5rem !important;
    margin: 1rem auto 1.5rem auto !important;
  }
</style>

<style>
  .home-section .section-content { text-align: center !important; }
  .home-section .isotope-filters { display: inline-flex !important; }
</style>
