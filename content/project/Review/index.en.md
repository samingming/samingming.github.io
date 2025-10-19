---
title: "MalaTang Game"
summary: "A Python-based game built with Pygame and the Random module, where players collect MalaTang ingredients within a time limit while avoiding obstacles. The game features dynamic difficulty, scoring, and collision detection."
tags: ["GameDev", "Python", "Pygame"]
date: 2025-10-19
draft: false
aliases: ["/en/project/review/", "/ko/project/review/"]
featured: true
image:
  filename: "featured.jpg"
  focal_point: "Center"
---

### 🧠 Project Overview  
This project is a **Python game developed with Pygame** titled **“MalaTang Game.”**  
Players control a character using arrow keys to collect ingredients — **vegetables, noodles, and skewers** — within a limited time.  
If the player reaches the target number of ingredients, the game displays “clear!”; otherwise, “you fail!” appears.  
The game integrates time limits, collision detection, scoring, and level-based difficulty adjustment.

---

### ⚙️ Key Features & Implementation  
- **Idea & Collaboration:**  
  - Brainstormed as a team, inspired by a “Sandwich-making” assignment in class, and reimagined it as a **MalaTang ingredient collection game**  
  - Divided tasks into: image randomization, scoring/level system, and success/failure logic  
  - Used both in-person and online meetings for **code review, debugging, and integration**

- **Game Logic:**  
  - Implemented **player movement** via arrow keys and **ingredient drops** using `pygame`  
  - Used the `random` module to randomize ingredient type, falling speed, and spawn position  
  - Added collision handling: each collected ingredient adds +10 to score and +1 to the counter  

- **Level & Difficulty Adjustment:**  
  - Levels increase at **50, 100, and 150 points**  
  - `change_difficulty()` dynamically adjusts ingredient speed based on level  
  - A **15-second timer** determines success or failure depending on target completion  

- **Visual & Interactive Elements:**  
  - Real-time display of targets (`veges`, `noodle`, `skewer`) and player’s score  
  - Success screen: “clear!” / Failure screen: “you fail!”  
  - Countdown animation, color transitions, and level-up effects  

---

### 🧩 Technologies Used  
Python · Pygame · Random · Sys · Time  

---

### 💡 Achievements & Learnings  
- **Collaborative Development:**  
  Learned how to **merge and debug** individual code segments into a cohesive game  
- **AI Tool Utilization:**  
  Used ChatGPT and Bard for idea generation and error fixing, but **relied on human verification and experimentation**  
  → Understood the importance of **critical thinking and human creativity** in programming  
- **Applied Knowledge:**  
  Strengthened understanding of **loops, conditions, event handling, and game design** through real implementation  
- **Teamwork & Communication:**  
  Enhanced collaboration and problem-solving skills through structured teamwork and discussion  

---

### 🎮 Game Highlights  
- Time limit: **15 seconds**  
- Random target counts (1–5 ingredients each)  
- Score-based level-up system  
- Collision detection with obstacles  
- Success/failure evaluation  
- Automatic difficulty scaling (increasing speed)

[📄 douwnload file (PDF)](/files/hw1.pdf)