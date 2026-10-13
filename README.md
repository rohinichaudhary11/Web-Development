# 🚀 Web Development Projects

Welcome to the **Web-Development** repository! This repository contains multiple full-stack and frontend applications, organized into dedicated branches and folders with full source code.

---

## 📌 Quick Branch Navigation

Switch between branches directly on GitHub to view each project at the root level:

| Project | Dedicated Branch | Main Branch Folder | Description |
| :--- | :--- | :--- | :--- |
| **Fetch API & Node.js File Operations** | [🌿 View `interface` Branch](https://github.com/rohinichaudhary11/Web-Development/tree/interface) | [📁 View `interface/` Folder](https://github.com/rohinichaudhary11/Web-Development/tree/main/interface) | React 19 app + Pure Node.js API with GET, POST, PUT, DELETE & Yellow Buttons |
| **Text Analyzer** | [🌿 View `text-analyzer` Branch](https://github.com/rohinichaudhary11/Web-Development/tree/text-analyzer) | [📁 View `text-analyzer/` Folder](https://github.com/rohinichaudhary11/Web-Development/tree/main/text-analyzer) | React + Vite app for text metrics, sentiment, readability, and topic extraction |

---

## 📂 Project 1: Interface (Fetch API & Pure Node.js File Server)

A clean, sober web application with a white background, yellow action buttons, and a live pure Node.js backend demonstrating the 4 core HTTP methods.

### 🔗 Direct File Links:
- [📄 `server.js`](https://github.com/rohinichaudhary11/Web-Development/blob/main/interface/server.js) — Pure Node.js REST API (Zero Express)
- [📄 `src/App.jsx`](https://github.com/rohinichaudhary11/Web-Development/blob/main/interface/src/App.jsx) — React UI with Filename box, Content area & 4 Yellow Buttons
- [📄 `src/App.css`](https://github.com/rohinichaudhary11/Web-Development/blob/main/interface/src/App.css) — Stylesheet with yellow button styling
- [📄 `vite.config.js`](https://github.com/rohinichaudhary11/Web-Development/blob/main/interface/vite.config.js) — Vite configuration & API proxy
- [📄 `package.json`](https://github.com/rohinichaudhary11/Web-Development/blob/main/interface/package.json) — Dependencies & run scripts
- [📁 `storage/`](https://github.com/rohinichaudhary11/Web-Development/tree/main/interface/storage) — Local file storage directory

### 🚀 How to Run:
```bash
# 1. Navigate to the interface folder
cd interface

# 2. Install dependencies
npm install

# 3. Start the pure Node.js API server (Port 5000)
node server.js

# 4. Start the React frontend (in a separate terminal)
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) to use the app!

---

## 📂 Project 2: Text Analyzer

An interactive text analytics dashboard built with React and Vite.

### 🔗 Direct File Links:
- [📄 `src/App.jsx`](https://github.com/rohinichaudhary11/Web-Development/blob/main/text-analyzer/src/App.jsx) — Main text analyzer interface
- [📄 `src/hooks/useTextAnalyzer.js`](https://github.com/rohinichaudhary11/Web-Development/blob/main/text-analyzer/src/hooks/useTextAnalyzer.js) — Text metrics calculation hook
- [📄 `src/context/AuthContext.jsx`](https://github.com/rohinichaudhary11/Web-Development/blob/main/text-analyzer/src/context/AuthContext.jsx) — Authentication context
- [📄 `package.json`](https://github.com/rohinichaudhary11/Web-Development/blob/main/text-analyzer/package.json) — Package configuration

### 🚀 How to Run:
```bash
# 1. Navigate to text-analyzer folder
cd text-analyzer

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

---

## 🌿 Git Branches in this Repository:
- **`main`**: Central hub with all folders, documentation, and working links.
- **`interface`**: Standalone branch dedicated to the Fetch API & Pure Node.js File Operations project.
- **`text-analyzer`**: Standalone branch dedicated to the Text Analyzer project.
