# Web Development Projects

This repository contains web development applications and projects:

## Projects

### 1. [interface](./interface)
- **Description**: An interactive React web application demonstrating **GET, POST, PUT, and DELETE** HTTP operations using the native JavaScript `fetch()` API.
- **Backend**: Built with pure Node.js (no Express) using `node:http` and `node:fs/promises`.
- **Features**:
  - Yellow action buttons for GET, POST, PUT, DELETE.
  - File Name text box and File Content text area.
  - Dynamic API URL connection bar.
  - Live fetch code visualizer and response inspector.
  - Real file storage in `./storage`.
- **Getting Started**:
  ```bash
  cd interface
  npm install
  node server.js   # Starts pure Node.js API on http://localhost:5000
  npm run dev      # Starts React frontend on http://localhost:5173
  ```

---

### 2. [text-analyzer](./text-analyzer)
- **Description**: A comprehensive React and Vite text analyzer application featuring metrics grid, sentiment analysis, topic extraction, and reading readability calculations.
- **Getting Started**:
  ```bash
  cd text-analyzer
  npm install
  npm run dev
  ```
