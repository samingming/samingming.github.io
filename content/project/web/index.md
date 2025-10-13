---
title: "Web Project"
summary: "Hugo와 GitHub Pages를 이용해 포트폴리오 웹사이트를 구축한 프로젝트로, 디자인 커스터마이징, 다국어 구조 설정, SEO 최적화까지 직접 구현하였습니다."
tags: ["WP"]
date: 2025-10-09
draft: false
aliases: ["/ko/project/web/", "/en/project/web/"]
featured: true
image:
  filename: "featured.jpg"
  focal_point: "Center"
---

### 🌐 프로젝트 개요  
이 프로젝트는 정적 사이트 생성기 **Hugo**와 **GitHub Pages**를 이용해 구축한  
개인 포트폴리오 웹사이트 개발 프로젝트입니다.  
단순한 테마 적용을 넘어, **다국어(한국어/영어) 구조 설정**, **페이지 라우팅 개선**,  
**SEO(Search Engine Optimization)** 설정 등 웹사이트 운영에 필요한 전 과정을 직접 수행했습니다.  

또한, 학습·프로젝트·디자인 작업물을 모두 한 곳에서 관리할 수 있는  
**개인 브랜딩 플랫폼**으로 확장하는 것을 목표로 했습니다.

### ⚙️ 주요 구현 내용  
- **Hugo Blox 테마 기반 커스터마이징:**  
  메뉴 구조, 페이지 섹션, 슬라이더, 버튼 디자인, 포트폴리오 카드 등 세부 구성요소 수정  
- **다국어 시스템 구축:**  
  `languages.yaml` 설정을 통해 **한국어/영어 버전 자동 전환** 구현  
  각 섹션(`project`, `experience`, `education`)별로 언어별 콘텐츠 동기화  
- **SEO 및 검색 엔진 노출 개선:**  
  `robots.txt`, `sitemap.xml`, 메타데이터를 수정하여 **Google Search Console** 색인 최적화  
  “Jeong Saim 전북대학교” 검색 시 노출 가능성 향상  
- **CI/CD 자동 배포:**  
  **GitHub Actions**를 이용해 커밋 시 자동 빌드 및 배포  
  Hugo Extended 환경 변수 충돌 문제를 해결하고 빌드 성공률 향상  
- **디자인 일관성 확보:**  
  Custom CSS를 통해 사이트 전체 색상 팔레트, 버튼 스타일, 필터 정렬 등을 통일  
  모바일 반응형(Responsive) 디자인 적용

### 🧩 사용 기술  
Hugo · GitHub Pages · YAML · HTML/CSS · JavaScript · Git · Google Search Console

### 💡 성과 및 배운 점  
- 정적 웹사이트 빌드/배포 전 과정을 직접 경험하며 **풀스택 웹 운영 프로세스 이해**  
- SEO 최적화, 다국어 지원, 빌드 자동화 등 **실제 포트폴리오 운영 노하우 습득**  
- 디자인 요소와 기술 요소를 함께 고려한 **UI/UX 중심 포트폴리오 사이트 완성**
