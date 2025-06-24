import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import HoverLine from "./HoverLine";

const ProblemDetail = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade(true);
    axios
      .get(`http://localhost:5000/questions/${id}`)
      .then((res) => {
        setProblem(res.data);

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ padding: "1rem" }}>Loading...</p>;
  if (!problem) return <p style={{ padding: "1rem" }}>Problem not found.</p>;

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "1.5rem",
        opacity: fade ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1d4ed8" }}>
        {problem.title}
      </h2>
      <p style={{ margin: "1rem 0", color: "#444" }}>{problem.description}</p>

      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
          Test Cases:
        </h3>
        <ul
          style={{
            backgroundColor: "#f0f0f0",
            padding: "1rem",
            borderRadius: "6px",
            listStyleType: "none",
          }}
        >
          {problem.test_cases.map((tc, i) => (
            <HoverLine key={i} label={`Input ${i + 1}:`} content={tc} />
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
          Expected Outputs:
        </h3>
        <ul
          style={{
            backgroundColor: "#f0f0f0",
            padding: "1rem",
            borderRadius: "6px",
            listStyleType: "none",
          }}
        >
          {problem.output.map((op, i) => (
            <HoverLine key={i} label={`Input ${i + 1}:`} content={op} />
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
          Submit Test Cases:
        </h3>
        <ul
          style={{
            backgroundColor: "#f0f0f0",
            padding: "1rem",
            borderRadius: "6px",
            listStyleType: "none",
          }}
        >
          {problem.submit_test_cases.map((stc, i) => (
            <HoverLine key={i} label={`Input ${i + 1}:`} content={stc} />
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
          Submit Outputs:
        </h3>
        <ul
          style={{
            backgroundColor: "#f0f0f0",
            padding: "1rem",
            borderRadius: "6px",
            listStyleType: "none",
          }}
        >
          {problem.submit_output.map((sop, i) => (
            <HoverLine key={i} label={`Input ${i + 1}:`} content={sop} />
          ))}
        </ul>
      </div>

      <div>
        <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
          Solved Status:
        </h3>
        <p
          style={{
            color: problem.status ? "green" : "red",
            backgroundColor: "#f0f0f0",
            padding: "1rem",
            borderRadius: "6px",
            listStyleType: "none",
          }}
        >
          {problem.status ? "Solved ✅" : "Not Solved ❌"}
        </p>
      </div>

      <Link
        to="/"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "block",
          padding: "0.8rem",
          backgroundColor: hover ? "#e0f2ff" : "#f9f9f9",
          marginTop: "2rem",
          color: hover ? "#1d4ed8" : "#333",
          border: "1px solid #ccc",
          borderRadius: "8px",
          textDecoration: "none",
          transform: hover ? "translateX(-4px)" : "translateX(0)",
          transition: "all 0.3s ease",
          fontWeight: "bold",
          width: "160px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        🔙 Back to Dashboard
      </Link>
    </div>
  );
};

export default ProblemDetail;
// json-server --watch questions.json --port 5000
