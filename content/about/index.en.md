---
type: widget_page
headless: false
title: "About"

# ▼ 수정/정리
slug: "about"               # KO와 동일
translationKey: "about" 
---
{{< rawhtml >}}
<style>
/* 언어 드롭다운(지구본) 강제 노출 – 이 페이지(영문)에서만 */
a[aria-label="Languages"] i { display: none !important; }   /* 기존 FA 아이콘이 안 보이든 말든 숨기고 */
a[aria-label="Languages"]::before {
  content: "🌐";               /* 지구본 이모지로 항상 표시 */
  margin-right: .35rem;
  display: inline-block;
  line-height: 1;
  font-size: 1rem;
}
</style>
{{< /rawhtml >}}
