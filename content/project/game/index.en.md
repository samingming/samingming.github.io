---
title: "AI Game Development"
summary: "An AI game project where reinforcement learning algorithms and a custom-built game engine were used to train autonomous agents to play and strategize."
tags: ["AG"]
date: 2025-10-09
draft: false
aliases: ["/en/project/game/"]
featured: true
image:
  filename: "featured.jpg"
  focal_point: "Center"
---
### 🎮 Project Overview  
- **Improved search efficiency by approximately 40%** through the integration of **Minimax and Alpha-Beta Pruning**  
- Implemented **game tree structure** and **search depth control** to create a **real-time decision-making AI**  
- Built an **interactive player-vs-player interface** using **Python, NumPy, and Pygame**  
- Included **algorithm comparison, analysis, and visualization** in the project report  

### ⚙️ Key Features and Implementation  
- **Look-ahead engine**: Variable search depth, intelligent cutoff, and heuristic evaluation  
- **Alpha-Beta Pruning**: Eliminates unnecessary branches → significantly reduces node expansion  
- **Real-time gameplay**: Pygame UI with turn switching, stone placement, and win detection for Omok  
- **Configurable settings**: Adjustable difficulty (depth), time limit, and player order (AI or human first)  

### 🧩 Technologies Used  
- **Language/Runtime**: Python 3.x  
- **Libraries**: NumPy, Pygame  
- **Structure**: `Board`, `Game`, `Agent (Minimax/AlphaBeta)`, `Evaluator (Heuristic)` modules  

### 💡 Algorithm  
#### 1) Minimax  
- Implements **adversarial search** assuming win/loss/draw outcomes  
- Evaluation function \(E(state)\) reflects features such as **open 2/3/4 lines**, and optionally considers **overlines and forbidden moves**  

#### 2) Alpha-Beta Pruning  
- Controls branch thresholds \( \alpha, \beta \) to perform **effective pruning**  
- Reduces node expansion by **approximately 40%** compared to baseline Minimax *(see benchmark results in the report)*  


