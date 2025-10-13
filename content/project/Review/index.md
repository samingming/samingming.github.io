---
title: "Fake Review Detection"
summary: "전자상거래 리뷰 데이터를 분석해 허위 후기 여부를 분류하는 머신러닝 프로젝트로, 실제 리뷰 데이터를 크롤링하고 텍스트 기반 특징을 활용해 분류 모델을 구축하였습니다."
tags: ["FR"]
date: 2025-10-09
draft: false
aliases: ["/ko/project/review/", "/en/project/review/"]
featured: true
image:
  filename: "featured.jpg"
  focal_point: "Center"
---

### 🧠 프로젝트 개요  
이 프로젝트는 **이커머스 플랫폼(쿠팡, 아마존 등)** 의 리뷰 데이터를 수집하여  
**허위 후기(Fake Review)** 를 탐지하는 머신러닝 모델을 구현한 것입니다.  
리뷰 텍스트를 기반으로 사용자의 후기 패턴, 단어 사용 빈도, 문장 구조 등을 분석하고  
**진짜 후기 vs 가짜 후기**를 분류할 수 있는 모델을 개발했습니다.

### ⚙️ 주요 구현 내용  
- **데이터 수집:**  
  Selenium을 활용하여 쿠팡·스마트스토어 등 실제 전자상거래 웹페이지에서 리뷰 데이터를 자동 크롤링  
  - 약 **2,000개 이상의 리뷰 텍스트** 수집 및 CSV 저장  
- **데이터 전처리:**  
  불용어 제거, 소문자 변환, 토큰화, Lemmatization 등 자연어 정제 과정 수행  
  - 한글·영문 리뷰 모두 처리 가능한 **이중 언어 전처리 파이프라인 구축**
- **특징 추출:**  
  TF-IDF, CountVectorizer 기반으로 문서-단어 행렬 생성  
  - 단어 중요도 및 감정 어휘 비율(feature ratio) 계산  
- **모델 학습:**  
  Logistic Regression, SVM, Random Forest, Naive Bayes 모델을 비교  
  - 하이퍼파라미터 튜닝(GridSearchCV)으로 정확도 및 재현율 개선  
  - 최고 성능 모델 기준 **정확도 92%, F1-score 0.89** 달성  
- **시각화 및 평가:**  
  Confusion Matrix, Precision-Recall Curve, Word Cloud 등으로 결과 시각화

### 🧩 사용 기술  
Python · scikit-learn · Pandas · NumPy · Selenium · Matplotlib · NLTK

### 💡 성과 및 배운 점  
- 텍스트 데이터의 **전처리 및 벡터화 과정**에 대한 실전 감각 습득  
- 단순한 키워드 탐지가 아닌, **언어적 패턴 분석 기반의 허위 리뷰 탐지 모델** 완성  
- 실제 웹 데이터를 수집하고 머신러닝 파이프라인을 구축한 **엔드 투 엔드(End-to-End)** 경험 확보
