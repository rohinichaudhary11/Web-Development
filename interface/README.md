# ⚡ File Operations using Fetch API (React + Pure Node.js)

A clean, sober web application with a white background and yellow buttons, demonstrating the 4 core HTTP operations (**GET**, **POST**, **PUT**, **DELETE**) using JavaScript's native `fetch()` API and a pure Node.js backend (no Express).

---

## 📌 Repository Links
- 🌿 **Repository Home**: [https://github.com/rohinichaudhary11/Web-Development](https://github.com/rohinichaudhary11/Web-Development)
- 🌿 **Switch to `main` Branch**: [https://github.com/rohinichaudhary11/Web-Development/tree/main](https://github.com/rohinichaudhary11/Web-Development/tree/main)
- 🌿 **Switch to `text-analyzer` Branch**: [https://github.com/rohinichaudhary11/Web-Development/tree/text-analyzer](https://github.com/rohinichaudhary11/Web-Development/tree/text-analyzer)

---

## 🔍 Features & Architecture

1. **Frontend (React 19 & Vite)**:
   - **File Name (Text Box)**: Input to target any file (e.g. `sample.txt`, `notes.txt`, `data.json`).
   - **File Content (Text Area)**: Multi-line editor to read, write, or update file contents.
   - **4 Yellow Action Buttons**:
     - `GET (Read)`: Reads the file from disk using `fetch()`.
     - `POST (Create)`: Creates a new file on disk with JSON payload.
     - `PUT (Update)`: Updates an existing file on disk.
     - `DELETE (Delete)`: Deletes the file from disk using `fs.unlink`.
   - **Connected API Endpoint Bar**: Connect to any custom API URL dynamically with live status indicator.
   - **Fetch Function Used & Response Inspector**: Displays the exact JavaScript `fetch()` snippet executed and the formatted server response.
   - **Server Storage List**: Real-time list of files saved in the `./storage` folder.

2. **Backend ([server.js](server.js))**:
   - Built exclusively with **native `node:http`** and **`node:fs/promises`**.
   - Zero external framework dependencies — **no Express**.
   - Full CORS support with `OPTIONS` preflight handling.
   - Safe path sanitization with `path.basename` to prevent directory traversal.

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Pure Node.js API
```bash
node server.js
```
*API will run at [http://localhost:5000](http://localhost:5000)*

### 3. Start the React Frontend
```bash
npm run dev
```
*Frontend will run at [http://localhost:5173](http://localhost:5173)*

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description | Example Payload / Query |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/files` | List all files in storage | None |
| **GET** | `/api/files?name=filename` | Read file content | `?name=sample.txt` |
| **POST** | `/api/files` | Create a new file | `{"filename": "my-note.txt", "content": "Hello"}` |
| **PUT** | `/api/files` | Update / overwrite file | `{"filename": "my-note.txt", "content": "Updated"}` |
| **DELETE** | `/api/files?name=filename` | Delete file from disk | `?name=my-note.txt` |
