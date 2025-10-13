---
title: "AI Image Generation"
summary: "텍스트 입력을 기반으로 이미지를 생성하는 딥러닝 프로젝트로, Stable Diffusion과 DALL·E 모델을 참고하여 텍스트-이미지 생성 기능을 직접 구현하였습니다."
tags: ["AI"]
date: 2025-10-09
draft: false
aliases: ["/ko/projectai/", "/en/project/ai/"]
featured: true
image:
  filename: "featured.jpg"
  focal_point: "Center"
---

### 🧠 프로젝트 개요  
이 프로젝트는 **Stable Diffusion**과 **DALL·E** 모델의 구조를 참고하여  
**텍스트 명령어를 입력하면 해당 내용을 반영한 이미지를 자동 생성**하는 딥러닝 기반 생성 AI 시스템입니다.  
사용자가 자연어로 프롬프트(prompt)를 입력하면, 모델이 문맥을 분석해  
스타일·구도·색감을 해석하고 새로운 이미지를 생성하도록 설계했습니다.

### ⚙️ 주요 구현 내용  
- **Diffusion 기반 이미지 생성 원리 이해 및 경량화 실험**  
- 사전 학습된 Stable Diffusion 모델을 활용해 **텍스트-이미지 매핑 파이프라인 구축**  
- 프롬프트 엔지니어링(prompt engineering)을 통해 결과물 품질 최적화  
- **배경 제거, 해상도 향상(upsampling)** 등의 후처리 스크립트 작성  
- Streamlit을 사용한 **간단한 웹 인터페이스 프로토타입 구현**

### 🧩 사용 기술  
Python · PyTorch · Hugging Face Diffusers · OpenAI API · Streamlit · Pillow

### 💡 성과 및 배운 점  
- 이미지 생성 과정에서 **텍스트 임베딩과 노이즈 제거 과정의 상관관계**를 이해함  
- 생성 결과의 다양성을 높이기 위해 **샘플링 파라미터 (guidance scale, steps)** 조절 실험 진행  
- 웹 UI를 통해 비전공자도 쉽게 사용할 수 있는 **AI 이미지 생성 도구의 프로토타입** 완성
