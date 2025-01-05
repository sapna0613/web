// src/pages/AutomationSolutions.tsx
import React from "react";

const AutomationSolutions = () => {
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
        Industrial Automation Solutions
      </h1>
      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "1.2rem", color: "#555" }}>
        <p>We provide modern industrial automation solutions using the latest technologies in PLC, SCADA, and IoT systems to improve efficiency and reduce downtime in operations.</p>
        <p>Our solutions include:</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>PLC System Integration</li>
          <li>SCADA System Implementation</li>
          <li>Automated Process Control</li>
          <li>Real-time Monitoring & Analytics</li>
        </ul>
        <p>Get in touch with us to enhance the automation of your operations!</p>
      </div>
    </div>
  );
};

export default AutomationSolutions;
