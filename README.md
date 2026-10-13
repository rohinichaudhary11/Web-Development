# React Search Dashboard with `useEffect` & Authentication

A clean, sober, light-themed React web application featuring a user authentication login system, a real-time topic information search box powered by React's `useEffect` hook, a live digital clock, and state management via React Context API (with zero props passed).

---

## 🚀 Features

- **User Authentication (Login Page)**: User login screen accepting Username and Password. State managed via React Context API (`AuthContext`) without using component props.
- **Personalized Dashboard**: Upon successful login, displays a welcome message with the logged-in username (`Welcome, [Username]`).
- **Live Digital Timer (`useEffect`)**: A real-time digital clock displayed on the top right-hand side of the dashboard, updating every second using `useEffect` and `setInterval`.
- **Topic Search Engine (`useEffect`)**: A search input box where typing any term (e.g. `java`, `react`, `python`, `javascript`, `ai`, `docker`) triggers `useEffect` to display contextual information about that topic in real time.
- **Sober & Simple Light Theme**: Minimalist, sober white background interface with clean typography and zero extra clutter.

---

## 🛠️ Project Structure

```text
text-analyzer/
├── public/
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx        # Login Form Component (No props)
│   │   └── DashboardPage.jsx    # Dashboard Page with Search & Top Timer (No props)
│   ├── context/
│   │   └── AuthContext.jsx      # React Context API for Auth State (No props)
│   ├── data/
│   │   └── knowledgeBase.js     # Topic dictionary & lookup logic
│   ├── App.jsx                  # Main App shell wrapping AuthProvider
│   ├── main.jsx                 # React DOM Entry point
│   └── index.css                # Simple sober light theme CSS
├── index.html                   # HTML Entry template
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

---

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-search-dashboard.git
   cd react-search-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173`

---

## 🐙 Pushing to GitHub

To push this project to your GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit: React search dashboard with login, useEffect search & live timer"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```
