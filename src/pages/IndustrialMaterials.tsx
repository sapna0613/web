// src/pages/IndustrialMaterials.tsx
import React from "react";

const IndustrialMaterials = () => {
  return (
    <div style={{ padding: "50px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#4B0082",
          fontWeight: "bold",
        }}
      >
        Industrial Materials Supply
      </h1>
      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "1.2rem", color: "#555" }}>
        <p>We supply industrial materials that adhere to ISO, ASTM, and ASME standards to ensure quality, reliability, and performance in various industries.</p>
        <p>
          Our inventory includes:
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>Structural Steels</li>
            <li>Piping Materials</li>
            <li>Pressure Vessels</li>
            <li>Heavy Equipment</li>
          </ul>
        </p>
        <p>Contact us for more information on our industrial materials supply services!</p>
      </div>
    </div>
  );
};

export default IndustrialMaterials;
