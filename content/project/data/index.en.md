---
title: "Cloud Computing"
summary: "A pre-scheduled carpool matching platform designed to reduce anxiety and cost for commuters."
tags: ["Carpool", "Mobility", "Cloud"]
date: 2025-10-09
featured: true
draft: false
aliases: ["/en/project/data/"]
image:
  filename: "featured.jpg"
  focal_point: "Center"
---
### 🚖 Project Overview
**Kkokkotak** is a **pre-scheduled carpool matching service** that aims to reduce users’ anxiety about catching a taxi and to minimize high fare costs.  
Before departure, users can confirm fellow passengers, pickup points, and estimated fares — creating a more predictable and affordable mobility experience.

- **Service Name Meaning:**  
  The mascot changes with the number of participants:  
  → 1 person: Egg → 2 people: Chick → 3 people: Chicken → 4 people: Fried Chicken → When matched with a driver: "On Delivery"  

---

### 🎯 Core Values & Target Users
- **Reduce Uncertainty:** 10-minute interval booking system  
- **Fair Cost Sharing:** Estimated fare paid in advance (1/n split) with automatic settlement  
- **Minimize Walking Distance:** Prioritizes carpools based on shortest walking distance within a defined radius  

> **Target Users:**  
> - College students and office workers with fixed schedules  
> - Residents in areas with limited late-night taxi availability  

---

### ⚙️ Key Features
1. **Kakao Account Login Integration** — Kakao OAuth2 authentication  
2. **Carpool Room Creation** — Up to 4 members, booking available up to 30 minutes ahead  
3. **Search & Join Rooms** — Sort by shortest walking distance to departure/arrival points  
4. **Real-time Communication** — In-room chat and notifications  
5. **Payment & Settlement** — Prepaid fares, automatic billing, and no-show penalties  
6. **Matching & Dispatch** — Host-initiated ride request  
7. **Ratings & Reviews** — Behavior-based scores and penalties for lateness or no-shows  

---

### 🧠 System Architecture
#### Client
- **React Native mobile app**  
- Map SDK (WebView + Native Bridge)

#### Backend
- **Node.js / Python API server**  
- **Real-time communication:** WebSocket / Server-Sent Events  
- **Authentication:** Kakao OAuth2 → JWT issuance  
- **Payments:** KakaoPay, Toss, etc.  
- **Mapping & Routing:** Kakao Map / Naver Map API  
- **Database:** PostgreSQL + PostGIS, Redis  
- **Storage:** AWS S3 compatible bucket  
- **Deployment:** AWS EC2 + ALB + CloudFront + WAF  
- **Monitoring:** CloudWatch, Grafana, Prometheus, Sentry  

> **System Flow**  
> Mobile App ↔ API Gateway ↔ App Server (NestJS) ↔ PostgreSQL (PostGIS)  
> Mobile App ↔ Real-time Server (WebSocket)  
> Mobile App ↔ Payment Gateway  
> App Server ↔ Map/Route APIs  

---

### 🧩 Technology Decision
- **Kakao T Deep Link Integration**
  - Simple implementation and high accessibility  
  - One-way call (no return of fare or driver data)
- **Uber API Integration**
  - Bi-directional communication (supports fare and driver info)
  - More complex and less used domestically  
  → **Decision:** Kakao T Deep Link is optimal for Korean market

---

### 📈 Project Goal
- Build a reliable reservation-based carpool environment  
- Provide a user-centered, intuitive interface  
- Complete real-time matching and payment system  
- Future expansion: GPS-based carpool recommendation & visualization dashboard


[📄 kokotak file download (PDF)](/files/taxi.pdf)
[📄 presentation file download (PDF)](/files/taxipre.pdf)