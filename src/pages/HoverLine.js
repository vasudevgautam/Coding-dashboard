import React, { useState } from "react";

const HoverLine = ({ label, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <strong>{label}</strong>
      <br />
      <pre
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? "#ffffc0" : "#f0f0f0",
          opacity: "0.785",
          padding: "4px 4px",
          borderRadius: "6px",
          margin: "2px",
          fontFamily: "inherit",
          fontSize: "14px",
          transition: "background-color 0.3s ease",
        }}
      >
        {content}
      </pre>
    </div>
  );
};

export default HoverLine;
