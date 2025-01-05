import React from "react";
import { Card, Row, Col } from "antd";
import { BuildOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

const HydraulicEquipmentPage = () => {
  return (
    <div style={{ padding: "50px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "2.5rem",
          color: "#4B0082",
          fontWeight: "bold",
        }}
      >
        Hydraulic Equipment Supply
      </h1>
      <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#555", marginBottom: "40px" }}>
        We provide top-quality hydraulic equipment and exceptional service to meet your industry's unique needs.
      </p>

      {/* Equipment Features Section */}
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              padding: "30px",
            }}
          >
            <BuildOutlined style={{ fontSize: "48px", color: "#4B0082", marginBottom: "20px" }} />
            <h2 style={{ fontSize: "1.5rem", color: "#4B0082", marginBottom: "10px" }}>Reliable Equipment</h2>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              Our hydraulic equipment is sourced from trusted manufacturers worldwide, ensuring reliability and long-term performance. 
              Whether you need pumps, motors, cylinders, or valves, we supply equipment that exceeds industry standards.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              padding: "30px",
            }}
          >
            <SafetyCertificateOutlined style={{ fontSize: "48px", color: "#4B0082", marginBottom: "20px" }} />
            <h2 style={{ fontSize: "1.5rem", color: "#4B0082", marginBottom: "10px" }}>Certified Quality</h2>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              All our hydraulic  come with proper certification, meeting global standards such as ISO, ASTM, and ASME. 
              With our quality-assured products, you can expect maximum operational efficiency and minimal downtime.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Service and Support Section */}
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "50px" }}>
        <Col xs={24} sm={12} md={8}>
          <Card
            bordered={false}
            style={{
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              padding: "30px",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", color: "#4B0082", marginBottom: "10px" }}>Comprehensive Support</h2>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              We don't just supply hydraulic equipment; we provide complete service solutions including installation, maintenance, and troubleshooting. 
              Our expert team is always ready to help you maximize the performance of your equipment.
            </p>
          </Card>
        </Col>
      </Row>
      
      {/* Call to Action */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Looking for more information or to request a quote? Get in touch with us today, and we'll provide tailored hydraulic solutions to meet your needs!
        </p>
        <button
          style={{
            backgroundColor: "#4B0082",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onClick={() => window.alert("Contact form will be available soon!")}
        >
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default HydraulicEquipmentPage;
