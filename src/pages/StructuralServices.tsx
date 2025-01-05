
import React from "react";
import { Card, Row, Col } from "antd";

const StructuralServices = () => {
  return (
    <div style={{ padding: "50px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "2.5rem",
          color: "#4B0082",
          fontWeight: "bold",
        }}
      >
        Structural and Piping Works, Equipment Erection, Painting, and Manpower Supply
      </h1>

      <Row gutter={[16, 24]} justify="center" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Detailed Description */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Structural Works"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            <p>
              Specializing in steel fabrication, on-site construction, and design implementation with top-notch quality assurance.
            </p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Piping Works"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            <p>
              Expertise in industrial, oil & gas, and water pipeline systems, ensuring precision and durability for critical operations.
            </p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Equipment Erection"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            <p>
              Professional handling of heavy-duty machinery, turbines, and boilers with adherence to international safety standards.
            </p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Painting Services"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            <p>
              Industrial coatings, anti-corrosion treatments, and high-temperature painting to extend the life of your assets.
            </p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            title="Manpower Supply"
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            <p>
              Certified professionals tailored to meet your project demands, from welders to electricians and engineers.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us Section */}
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#4B0082", marginBottom: "20px" }}>Why Choose Us?</h2>
        <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto" }}>
          We deliver exceptional results by combining highly skilled personnel, advanced technology, and strict safety standards. Whether you need structural works, precise piping systems, or
          manpower supply, our expertise ensures timely and cost-effective solutions with zero safety violations.
        </p>
      </div>

      {/* Call to Action Section */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button
          style={{
            backgroundColor: "#4B0082",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onClick={() => window.alert("Contact us for more details!")}
        >
          Contaact Us
        </button>
      </div>
    </div>
  );
};

export default StructuralServices;


// import React from "react";

// const EngineeringWorks = () => {
//   return (
//     <div style={{ padding: "20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
//       <h1 style={{ textAlign: "center", color: "#4B0082", fontWeight: "bold" }}>
//         Engineering Works Expertise
//       </h1>
//       <p style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
//         We provide exceptional structural and piping works, equipment erection, painting
//         services, and manpower supply. With a team of seasoned experts and advanced tools,
//         we ensure top-notch quality for all your engineering needs.
//       </p>
//     </div>
//   );
// };

// export default EngineeringWorks;
