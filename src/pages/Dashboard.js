import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useQuestions } from "../hooks/useQuestions";

const Dashboard = () => {
  const { questions, loading } = useQuestions();
  const [hoveredId, setHoveredId] = useState(null);
  if (loading)
    return (
      <p style={{ padding: "1rem", fontSize: "18px" }}>Loading questions...</p>
    );

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "1.5rem" }}>
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        📚 Coding Questions 📚
      </h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {questions.map((q) => {
          const isHovered = hoveredId === q.id;
          return (
            <li key={q.id} style={{ marginBottom: "1rem" }}>
              <Link
                to={`/problem/${q.id}`}
                onMouseEnter={() => setHoveredId(q.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  display: "block",
                  padding: "1rem",
                  backgroundColor: isHovered ? "#e0f2ff" : "#f9f9f9",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "500",
                  transform: isHovered ? "scale(1.02)" : "scale(1)",
                  transition: "all 0.2s ease-in-out",
                  boxShadow: isHovered ? "0 4px 10px rgba(0,0,0,0.1)" : "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: isHovered ? "#2563eb" : "#333", 
                    transition: "color 0.3s ease",
                  }}
                >
                  {q.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
