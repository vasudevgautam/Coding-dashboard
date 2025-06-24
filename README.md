# 🧠 React Coding Questions Dashboard

A sleek, minimal coding problem dashboard built with **React** and styled using **inline CSS** (or Tailwind CSS). Connects to a mock API powered by **JSON Server**.

---

## 🚀 Features

- 📋 Dashboard with list of coding questions
- 🔍 Problem detail page with:
  - Description
  - Test cases
  - Expected outputs
- 🎨 Hover animations (title, inputs, back link)
- 🖱 Clickable transitions and styling
- ⚡ JSON Server mock API integration

---

## 🛠 Tech Stack

- ⚛️ React (with React Router)
- 📦 JSON Server (Mock API)
- 🎨 Inline CSS (optional: Tailwind CSS)
- 🔄 Axios (data fetching)

---

## 📁 File Structure

# 🧠 React Coding Questions Dashboard

A sleek, minimal coding problem dashboard built with **React** and styled using **inline CSS** (or Tailwind CSS). Connects to a mock API powered by **JSON Server**.

---

## 🚀 Features

- 📋 Dashboard with list of coding questions
- 🔍 Problem detail page with:
  - Description
  - Test cases
  - Expected outputs
- 🎨 Hover animations (title, inputs, back link)
- 🖱 Clickable transitions and styling
- ⚡ JSON Server mock API integration

---

## 🛠 Tech Stack

- ⚛️ React (with React Router)
- 📦 JSON Server (Mock API)
- 🎨 Inline CSS (optional: Tailwind CSS)
- 🔄 Axios (data fetching)

---

## 📁 File Structure

- coding-dashboard/
- ├── public/
- ├── src/
- │ ├── hooks/
- │ ├── pages/
- │ ├── App.js
- │ ├── index.js
- │ └── index.css (if using Tailwind)
- ├── questions.json (API data)
- ├── README.md
- └── package.json

---

## ⚙️ Setup Instructions

### 1. 📦 Install dependencies

```bash
npm install

### 2. ▶️ Start React app
   npm start

### 3. 📡 Start JSON Server (in a separate terminal)
   json-server --watch questions.json --port 5000
### 4. 🌐 Open in browser
     App: http://localhost:3000
    JSON API: http://localhost:5000/questions
### 📦 Example Questions JSON
   {
  "questions": [
    {
      "id": 1,
      "title": "Frequency Minimizer",
      "description": "Given an array...",
      "test_cases": ["5 2 2 2 3 3"],
      "output": ["6"],
      "status": false
    }
  ]
}


