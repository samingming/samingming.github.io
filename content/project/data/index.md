---
title: "Cloud Computing"
summary: "클라우드 컴퓨팅을 사용한 택시 카풀 앱"
tags: ["Carpool", "Mobility", "Cloud"]
date: 2025-10-09
featured: true
draft: false
aliases: ["/ko/project/data/", "/en/project/data/"]
image:
  filename: "featured.jpg"
  focal_point: "Center"
---

### 🚖 프로젝트 개요
**꼬꼬택(Kkokkotak)**은 일정이 있는 사용자가 택시를 잡지 못할까 하는 불안감과  
높은 비용 문제를 해결하기 위해 고안된 **사전 예약형 카풀 매칭 서비스**입니다.  
출발 전 동승 인원, 픽업 지점, 예상 비용을 확정해 **예측 가능한 이동 경험**을 제공합니다.

- **서비스명 의미**:  
  인원 수에 따라 상태가 바뀌는 메타포  
  → 1명: 알 → 2명: 병아리 → 3명: 닭 → 4명: 치킨 → 기사 매칭 시: 배달 중  

---

### 🎯 핵심 가치 및 타깃
- **시간 불안 최소화**: 10분 단위 예약 시스템  
- **비용 절감 & 정산 안정화**: 예상 요금 1/n 선결제 + 자동 정산  
- **도보 최소화**: 출발·도착 반경 내 도보 시간 예측 기반 정렬  

> 주요 타깃:  
> - 대학생, 직장인 등 일정이 고정된 사용자  
> - 야간/심야 호출이 어려운 지역 거주자  

---

### ⚙️ 주요 기능
1. **카카오 계정 연동 로그인** — Kakao OAuth2 인증  
2. **카풀 방 생성 및 예약** — 최대 4인, 10분 단위 예약  
3. **탐색/참여 시스템** — 도보 거리 기반 매칭 우선순위  
4. **실시간 커뮤니케이션** — 방 내 실시간 채팅  
5. **결제 및 정산** — 선결제/자동 정산/노쇼 패널티  
6. **매칭 및 배차 호출** — 방장 중심 호출 프로세스  
7. **평가 및 후기 시스템** — 매너 점수, 패널티 반영  

---

### 🧠 기술 아키텍처
#### 클라이언트
- **React Native**  
- 지도 SDK(WebView + Native Bridge)  

#### 백엔드
- **Node.js / Python 기반 API 서버**  
- **실시간 통신:** WebSocket / Server-Sent Events  
- **인증:** Kakao OAuth2 → JWT 발급  
- **결제:** KakaoPay, Toss 등  
- **지도/경로:** Kakao Map / Naver Map API  
- **DB:** PostgreSQL + PostGIS, Redis  
- **스토리지:** AWS S3 호환 버킷  
- **배포:** AWS EC2 + ALB + CloudFront + WAF  
- **모니터링:** CloudWatch, Grafana, Prometheus, Sentry  

> 흐름도  
> 모바일앱 ↔ API Gateway ↔ App Server(NestJS) ↔ PostgreSQL(PostGIS)  
> 모바일앱 ↔ 실시간 서버(WebSocket)  
> 모바일앱 ↔ 결제(PG)  
> App Server ↔ 지도/경로 API  

---

### 🧩 기술 선택 근거
- **카카오 T 딥링크 연동**  
  - 간단한 구현, 높은 사용자 접근성  
  - 단방향 호출 기반(요금·배차 피드백 불가)  
- **우버 API 연동**  
  - 양방향 통신 가능(예상 요금, 운전자 정보 등)  
  - 국내 이용자 적고 복잡도 높음  
  → 결론: **국내 환경 고려 시 카카오 T 딥링크 채택**

---

### 📈 프로젝트 목표
- 안정적 예약형 카풀 환경 구축  
- 사용자 중심의 UX 제공  
- 실시간 매칭 + 결제 프로세스 완성  
- 향후 GPS 기반 자동 추천 기능 및 시각화 대시보드 확장 예정

[📄 꼬꼬택 계획서 다운로드 (PDF)](/files/taxi.pdf)
[📄 프로젝트 발표자료 다운로드 (PDF)](/files/taxipre.pdf)