# safetyIQ


# 🛡️ Safety-IQ
### AI-Powered Industrial Safety Intelligence Platform

<p align="center">

![Python](https://img.shields.io/badge/Python-3.10+-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688?logo=fastapi)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

## 📌 Overview

**Safety-IQ** is an AI-powered Industrial Safety Intelligence platform that helps organizations monitor workplace safety, identify risks, and generate safety reports in real time.

The application provides a modern web dashboard where users can submit safety incidents, monitor operational status, and analyze workplace risk levels using a FastAPI backend.

This project was developed as a prototype for industrial safety monitoring and demonstrates a scalable architecture suitable for future AI integration.

---

# ✨ Features

✅ Real-Time Safety Monitoring

- Monitor the current safety status of the system.
- View operational health instantly.

---

✅ Risk Reporting

Users can submit:

- 📍 Location
- ⚠️ Current Status
- 📊 Risk Level (1–10)

---

✅ Fast API Backend

- Built using FastAPI
- Automatic request validation
- Interactive Swagger Documentation
- High performance REST APIs

---

✅ Lightweight Frontend

- Pure HTML
- CSS
- Vanilla JavaScript
- No framework required
- No build process

---

✅ Scalable Architecture

Backend and frontend are completely separated, making deployment and future upgrades easier.

---

# 🏗 System Architecture

```
                +----------------------+
                |      User Browser    |
                +----------+-----------+
                           |
                           |
                     HTTP Requests
                           |
                           ▼
                +----------------------+
                |     Frontend UI      |
                | HTML • CSS • JS      |
                +----------+-----------+
                           |
                     Fetch API Calls
                           |
                           ▼
                +----------------------+
                |    FastAPI Server    |
                |  REST API Backend    |
                +----------+-----------+
                           |
                     Data Validation
                     (Pydantic Models)
                           |
                           ▼
                  JSON Response
```

---

# 🛠 Tech Stack

## Backend

- FastAPI
- Uvicorn
- Pydantic

---

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

---

## API

- REST API
- JSON

---

# 📂 Project Structure

```
Safety-IQ
│
├── backend
│   │
│   ├── app
│   │   ├── api
│   │   │      routes.py
│   │   │
│   │   └── schemas
│   │          pydantic_schemas.py
│   │
│   ├── main.py
│   ├── requirements.txt
│   └── README.md
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── screenshots
│   ├── dashboard.png
│   └── report-form.png
│
├── LICENSE
└── README.md
```

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/Safety-IQ.git

cd Safety-IQ
```

---

## 2️⃣ Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run server

```bash
uvicorn main:app --reload
```

Server starts at

```
http://127.0.0.1:8000
```

Swagger Docs

```
http://127.0.0.1:8000/docs
```

---

## 3️⃣ Frontend

Open

```
frontend/index.html
```

in your browser.

No installation required.

---

# 📡 REST API

---

## GET

```
/api/status
```

Returns system status.

Example Response

```json
{
  "project": "Safety-IQ",
  "system_status": "Active",
  "alerts": 0
}
```

---

## POST

```
/api/report
```

Submit safety report.

Request

```json
{
  "location": "Warehouse A",
  "status": "Warning",
  "risk_level": 7
}
```

Response

```json
{
  "message": "Report submitted successfully",
  "data": {
    "location": "Warehouse A",
    "status": "Warning",
    "risk_level": 7
  }
}
```

---

# 📷 Screenshots

## Dashboard

```
screenshots/dashboard.png
```

---

## Report Submission

```
screenshots/report-form.png
```

---

# 🎯 Future Improvements

- 🤖 AI-based Hazard Detection
- 📹 CCTV Integration
- 🌍 Live GPS Tracking
- ☁ Cloud Deployment
- 📈 Analytics Dashboard
- 🔔 SMS & Email Alerts
- 📱 Mobile App
- 👤 User Authentication
- 🗄 Database Integration
- 📊 Predictive Risk Analysis

---

# 📈 Performance

- Fast API Response
- Lightweight Frontend
- Minimal Dependencies
- Clean Architecture
- Easy Deployment

---

# 🤝 Contributing

Contributions are always welcome.

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open Pull Request

---

# 📜 License

Distributed under the MIT License.

---

# 👨‍💻 Author

**Sachin Kumar**

B.Tech Computer Science Engineering

Industrial Safety AI Project

GitHub: https://github.com/yourusername

---

## ⭐ Support

If you found this project helpful,

⭐ Star this repository

🍴 Fork it

📢 Share it with others

---

<p align="center">

Made with ❤️ using FastAPI & JavaScript

</p>
