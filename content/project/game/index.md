---
title: "AI Game Development"
summary: "강화학습과 자체 제작 게임 엔진을 활용해 AI 캐릭터가 스스로 전략을 학습하도록 구현한 인공지능 게임 프로젝트"
tags: ["AG"]
date: 2025-10-09
draft: false
aliases: ["/ko/project/game/", "/en/project/game/"]
featured: true
image:
  filename: "featured.jpg"
  focal_point: "Center"
---
### 🎮 프로젝트 개요 
- **Minimax + Alpha-Beta Pruning 적용으로 탐색 효율 약 40% 향상** 
- **게임 트리 구조 및 탐색 깊이(Depth) 조절**을 통해 **실시간 의사결정 AI** 제작 
- **Python, NumPy, Pygame** 기반의 **대전형 인터페이스** 구현
- 프로젝트 보고서에 **알고리즘 비교·분석 및 시각화** 포함 

### ⚙️ 주요 기능 및 구현 내용 
- **수 읽기(look-ahead) 엔진**: 가변 깊이 탐색, 합리적 컷오프와 휴리스틱 평가 
- **Alpha-Beta Pruning**: 불필요한 분기 제거 → 노드 전개 수 대폭 감소 
- **실시간 플레이**: Pygame UI, 턴 전환/돌 배치/승리 판정(오목) 처리 
- **설정 가능**: 난이도(깊이), 탐색 시간 제한, 선공/후공 선택 

### 🧩 사용 기술 
- **Language/Runtime**: Python 3.x 
- **Libraries**: NumPy, Pygame 
- **구조**: Board, Game, Agent(Minimax/AlphaBeta), Evaluator(휴리스틱) 모듈

### 💡알고리즘 
### 1) Minimax 
- 승패/무승부를 가정한 **대립적 탐색(Adversarial Search)** 
- 평가 함수 \(E(state)\) 로 **열린 2/3/4, 장목·금수 규칙(옵션)** 등을 반영해 점수화 
### 2) Alpha-Beta Pruning 
- 분기 한계치 \( \alpha, \beta \) 관리로 **가지치기** 수행

[📄 프로젝트 보고서 다운로드 (PDF)](/files/hw2.pdf)
