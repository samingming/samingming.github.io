---
widget: portfolio
headless: true
active: true
weight: 20
title: ""
subtitle: ""

content:
  page_type: project
  count: 9
  filters:
    folders: ["project"]
    featured_only: false
  filter_field: "tags"
  filter_default: 0
  filter_button:
    - name: All
      tag: "*"
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
  spacing: { padding: [0, 0, 0, 0] }
  options:
    justify: center
---

<!-- 필터 바(파란 버튼 묶음) 정확히 가운데 정렬 -->
<style>
  /* 섹션 본문을 중앙 정렬로 만들고 */
  .home-section .section-content { text-align: center !important; }

  /* 실제 필터 컨테이너를 내용 너비만큼만 줄여서 중앙 배치 */
  .home-section .isotope-filters,
  .home-section .filter-button-group,
  .home-section .project-filters,
  .home-section .portfolio-filters,
  .home-section .js-isotope-filter {
    display: inline-flex !important;     /* 부모가 center면 inline-flex가 중앙에 옴 */
    justify-content: center !important;
    align-items: center !important;
    flex-wrap: wrap !important;
    gap: .5rem !important;
    width: max-content !important;       /* 버튼 길이만큼만 차지 → 시각적으로 딱 가운데 */
    margin: 1rem auto 1.5rem auto !important;
  }

  /* 테마/브라우저 기본 여백 제거(왼쪽 들여쓰기 때문에 한쪽으로 쏠리는 것 방지) */
  .home-section .isotope-filters ul,
  .home-section .filter-button-group ul {
    padding-left: 0 !important;
    margin: 0 !important;
  }
  .home-section .isotope-filters li,
  .home-section .filter-button-group li {
    list-style: none !important;
  }
</style>
