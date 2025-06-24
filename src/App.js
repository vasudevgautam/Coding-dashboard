// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProblemDetail from "./pages/ProblemDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <nav
        style={{
          backgroundColor: "#1d4ed8",
          color: "#fff",
          padding: "8px 20px",
          textAlign: "center",
          opacity: "0.9",

          alignItems: "center",
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#fff",
              textDecoration: "none",
              border: "2px solid #e0f2ff",
              borderRadius: "8px",
              padding: "4px",
            }}
          >
            Coding Dashboard
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/problem/:id" element={<ProblemDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
