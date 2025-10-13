---
title: "Fake Review Detection"
summary: "A machine learning project for detecting fake reviews in e-commerce platforms by collecting real-world data, preprocessing text, and comparing multiple classification models."
tags: ["FR"]
date: 2025-10-09
draft: false
aliases: ["/en/project/review/"]
featured: true
image:
  filename: "featured.jpg"
  focal_point: "Center"
---

### 🧠 Overview  
This project focuses on detecting **fake reviews** on **e-commerce platforms** such as Coupang and Amazon.  
Using natural language processing (NLP) techniques, the system analyzes review text patterns, word frequencies, and linguistic structures to classify reviews as genuine or deceptive.

### ⚙️ Key Implementation Steps  
- **Data Collection:**  
  Collected over **2,000 real reviews** from online shopping platforms using **Selenium-based web crawling**  
  Stored data in structured CSV format for analysis  
- **Data Preprocessing:**  
  Applied stopword removal, lowercasing, tokenization, and lemmatization  
  Built a **bilingual text-cleaning pipeline** for both Korean and English reviews  
- **Feature Extraction:**  
  Generated TF-IDF and CountVectorizer matrices to represent text semantics  
  Calculated feature ratios such as sentiment word frequency and average word length  
- **Model Training:**  
  Trained and compared multiple classifiers — Logistic Regression, SVM, Random Forest, and Naive Bayes  
  Tuned hyperparameters using **GridSearchCV**, achieving **92% accuracy and 0.89 F1-score**  
- **Visualization & Evaluation:**  
  Visualized performance using confusion matrix, precision-recall curve, and word cloud plots

### 🧩 Tech Stack  
Python · scikit-learn · Pandas · NumPy · Selenium · Matplotlib · NLTK

### 💡 Outcome & Learnings  
- Developed hands-on understanding of **text preprocessing and vectorization techniques**  
- Built a practical **language-pattern-based fake review detection model**  
- Completed an **end-to-end machine learning workflow** from data collection to model evaluation
