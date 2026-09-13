# 🔎 CodeLens — Frontend

> A modern, interactive frontend for **CodeLens**, an AI-powered multi-agent code review platform.

CodeLens helps developers analyze their GitHub repositories and identify **bugs, security vulnerabilities, and code-quality issues** using AI-powered agents.

The frontend provides a clean workspace where users can submit repositories, view AI-generated reviews, track review history, and manage their account.

---

## ✨ Features

* 🔐 **Authentication** — Signup and login with JWT-based authentication
* 🔍 **AI Code Review** — Submit a GitHub repository for automated analysis
* 📊 **Review Dashboard** — View code health scores and issue severity
* 🐛 **Bug Detection** — Review results from the Bug Analysis Agent
* 🛡️ **Security Analysis** — Identify potential security vulnerabilities
* 🧹 **Code Quality** — Detect maintainability and quality issues
* 📜 **Review History** — Access previous repository reviews
* ⚡ **Animated UI** — Smooth interactions and page transitions
* 📱 **Responsive Design** — Works across desktop and mobile screens
* 🌙 **Dark Developer-Focused UI** — Designed for a modern coding experience

---

## 🛠️ Tech Stack

| Technology       | Purpose                     |
| ---------------- | --------------------------- |
| **React.js**     | Frontend framework          |
| **Vite**         | Development & build tooling |
| **Tailwind CSS** | Styling                     |
| **GSAP**         | Animations & interactions   |
| **React Router** | Client-side routing         |
| **Lucide React** | UI icons                    |
| **Fetch API**    | Backend communication       |

---

## 📁 Project Structure

```text
frontend/
│
├── public/
│   └── assets/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Review.jsx
│   │   ├── History.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## 🔗 Backend Connection

The frontend communicates with the CodeLens backend through REST APIs.

For local development, make sure the backend is running on:

```text
http://localhost:5000
```

Example review request:

```text
POST /api/review
```

Authentication is handled using a JWT Bearer token.

---

## 🔄 Application Flow

```text
User
 │
 ▼
Login / Signup
 │
 ▼
CodeLens Workspace
 │
 ▼
Enter GitHub Repository URL
 │
 ▼
Submit Review
 │
 ▼
CodeLens Backend
 │
 ▼
AI Review Agents
 ├── Bug Agent
 ├── Security Agent
 └── Quality Agent
 │
 ▼
Review Results
 │
 ├── Code Health Score
 ├── Critical Issues
 ├── High Issues
 ├── Medium Issues
 └── Detailed Feedback
 │
 ▼
Review History
```

---

## 🎨 Design Philosophy

The CodeLens frontend focuses on creating a **developer-first experience** rather than a typical AI dashboard.

The interface combines:

* Minimal visual hierarchy
* Smooth animations
* Dark, earthy tones
* Rounded UI elements
* Interactive transitions
* Clear review feedback
* Focused developer workflows

The goal is to make automated code review feel like an integrated developer tool rather than another generic AI interface.

---

## 🧑‍💻 Development

Run the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## ⭐ Support

If you find **CodeLens** useful or interesting, consider giving the repository a **⭐ Star** on GitHub.

Your support helps the project gain visibility and motivates further development.

---

<p align="center">
  Built with ❤️ for developers who want better code.
</p>

