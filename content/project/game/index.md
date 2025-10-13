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
이 프로젝트는 **강화학습(Reinforcement Learning)** 알고리즘을 이용해  
AI 에이전트가 **보상 함수를 기반으로 스스로 학습하여 게임을 플레이**하도록 구현한 2D 시뮬레이션 게임입니다.  
게임 환경과 AI 로직을 직접 설계하여, **AI의 학습·탐색·전략 수립 과정**을 시각적으로 확인할 수 있도록 했습니다.

### ⚙️ 주요 기능 및 구현 내용  
- **강화학습 알고리즘 적용:**  
  DQN(Deep Q-Network)과 PPO(Proximal Policy Optimization)을 실험적으로 적용하여  
  AI가 환경 내에서 최적의 행동 정책(policy)을 스스로 학습하도록 구현  
- **자체 게임 엔진 개발:**  
  Python의 **Pygame**을 기반으로 캐릭터 이동, 충돌 판정, 보상 피드백 등 핵심 로직을 직접 구현  
- **시각화 및 학습 로그 분석:**  
  학습 단계별 보상 변화 및 행동 패턴을 **그래프 및 애니메이션 형태로 시각화**  
- **성능 비교 및 실험:**  
  알고리즘별 학습 속도와 성능을 비교 분석하여 **효율적인 학습 전략 도출**

### 🧩 사용 기술  
Python · Pygame · NumPy · Matplotlib · TensorFlow (or PyTorch)

### 💡 성과 및 배운 점  
- 강화학습의 **탐색(Exploration)과 이용(Exploitation)** 개념을 실제 게임 환경에 적용하며 심층 이해  
- AI가 환경과 상호작용하며 전략을 최적화하는 과정을 직접 관찰  
- 게임 로직과 AI 모델을 결합한 **“인터랙티브 AI 시스템”** 개발 경험 획득  
- 단순 학습 실험을 넘어, **AI와 게임 개발의 융합 가능성**을 탐색한 프로젝트
