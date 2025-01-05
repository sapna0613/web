import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import "./Fabrication.css";

const Fabrication: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="fabrication-page">
      {/* Header Section */}
      <div className="fabrication-header">
        <div className="header-image">
          {/* Logo Overlay */}
          <img
            src="/img/svg/logo.jpeg" // Adjust the path to your logo
            alt={t("Company Logo")}
            className="header-logo"
          />
          {/* Overlay Text */}
          <div className="overlay-text">
            <p className="tagline">{t("Your Trusted Fabrication Partner")}</p>
          </div>
        </div>
      </div>

      {/* Fabrication Description */}
      <div className="fabrication-description" style={{ marginTop: "30px" }}>
        <p>
          {t(
            "Fabrication is the art of transforming raw materials into functional and visually appealing creations. Whether it’s crafting robust structures for industrial use or intricate designs for homes and businesses, fabrication demands precision, strength, and high-quality materials."
          )}
        </p>
        <p>
          {t(
            "At Aqua Enterprises, we specialize in providing Fabrication Steel of the finest quality. Our structural steel is designed to meet the highest standards of durability and adaptability, empowering you to create exceptional results in every project."
          )}
        </p>
        <p>
          {t(
            "Just as countless customers trust Aqua Enterprises for premium steel solutions, you can rely on us to bring your fabrication ideas to life. With our Fabrication Steel, you can seamlessly merge beauty with resilience, creating structures that are not only dependable but also captivating."
          )}
        </p>
      </div>

      
      

      {/* Projects Title */}
      <div className="projects-title" style={{ marginTop: "50px", textAlign: "center" }}>
        <h2>{t("Our Projects")}</h2>
      </div>

      {/* Image Gallery Section */}
      <div className="image-gallery">
        <Row gutter={[24, 24]}> {/* Increased gutter size */}
          <Col span={8}>
            <div className="image-container">
              <img
                src="/img/svg/fabimage2.jpg"
                alt={t("Fabrication Project 1")}
                className="fabrication-image"
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="image-container">
              <img
                src="/img/svg/fabimage3.jpg"
                alt={t("Fabrication Project 2")}
                className="fabrication-image"
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="image-container">
              <img
                src="/img/svg/fabimage4.jpg"
                alt={t("Fabrication Project 3")}
                className="fabrication-image"
              />
            </div>
          </Col>
        </Row>
      </div>

    {/* Features Section */}

      <div className="features" style={{ marginTop: "50px", textAlign: "center" }}>
        <h2>{t("Why Choose Aqua Enterprises Fabrication Services?")}</h2>
        <div className="features-list" style={{ marginTop: "30px" }}>
          {/* Feature 1 */}
          <div className="feature-item">
            <h3>{t("High-Quality Materials")}</h3>
            <p>{t("We use only the finest materials to ensure durability and superior finish for every fabrication project.")}</p>
          </div>
          {/* Feature 2 */}
          <div className="feature-item">
            <h3>{t("Expert Craftsmanship")}</h3>
            <p>{t("Our experienced team ensures precise fabrication with superior attention to detail, resulting in flawless execution.")}</p>
          </div>
          {/* Feature 3 */}
          <div className="feature-item">
            <h3>{t("Advanced Technology")}</h3>
            <p>{t("With cutting-edge machinery and technology, we ensure the most accurate results for even the most complex designs.")}</p>
          </div>
          {/* Feature 4 */}
          <div className="feature-item">
            <h3>{t("Custom Fabrication Solutions")}</h3>
            <p>{t("Tailored fabrication services that cater to unique client needs and complex project specifications.")}</p>
          </div>
          {/* Feature 5 */}
          <div className="feature-item">
            <h3>{t("End-to-End Service")}</h3>
            <p>{t("From consultation to installation, we handle all aspects of the fabrication process, providing you with peace of mind.")}</p>
          </div>
          {/* Feature 6 */}
          <div className="feature-item">
            <h3>{t("Timely Delivery")}</h3>
            <p>{t("We ensure on-time delivery, avoiding delays that could impact your project schedule.")}</p>
          </div>
          {/* Feature 7 */}
          <div className="feature-item">
            <h3>{t("Eco-Friendly Practices")}</h3>
            <p>{t("Our sustainable approach reduces waste and utilizes recyclable materials to minimize our environmental footprint.")}</p>
          </div>
          {/* Feature 8 */}
          <div className="feature-item">
            <h3>{t("Competitive Pricing")}</h3>
            <p>{t("Aqua Enterprises offers high-quality services at competitive and transparent pricing to fit your budget.")}</p>
          </div>
          {/* Feature 9 */}
          <div className="feature-item">
            <h3>{t("Exceptional Customer Service")}</h3>
            <p>{t("Our dedicated team is always available for consultations, adjustments, and to ensure the satisfaction of every client.")}</p>
          </div>
          {/* Feature 10 */}
          <div className="feature-item">
            <h3>{t("Proven Track Record")}</h3>
            <p>{t("With years of experience and numerous completed projects, Aqua Enterprises has a proven track record of excellence.")}</p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div
  className="contact"
  style={{
    marginTop: "50px",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
  }}
>
  <h2 style={{ textAlign: "center" }}>{t("Contact Us")}</h2>
  <p style={{ textAlign: "center", marginBottom: "20px" }}>
    {t(
      "Feel free to reach out to discuss your fabrication needs. We’re here to help with any project."
    )}
  </p>

  <div
    className="contact-container"
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "30px",
      maxWidth: "1000px",
      margin: "0 auto",
    }}
  >
    {/* Contact Details on the Left */}
    <div
      className="contact-details"
      style={{
        flex: "1",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3>{t("Our Details")}</h3>
      <p>
        <strong>{t("Address")}:</strong>{" "}
        {t("Gujrat")}
      </p>
      <p>
        <strong>{t("Phone")}:</strong>{" "}
        <a
          href=""
          style={{ color: "#007BFF", textDecoration: "none" }}
        >
          +123 456 7890
        </a>
      </p>
      <p>
        <strong>{t("Email")}:</strong>{" "}
        <a
          href="@aquaenterprises.com"
          style={{ color: "#007BFF", textDecoration: "none" }}
        >
          info@aquaenterprises.com
        </a>
      </p>
      {/* Social Media Links */}
      <div className="social-media" style={{ marginTop: "20px" }}>
        <p>{t("Follow us on")}:</p>
        <a href="#" style={{ margin: "0 10px" }}>
          <img src="/img/svg/facebook-icon.svg" alt="Facebook" width="30" />
        </a>
        <a href="#" style={{ margin: "0 10px" }}>
          <img src="/img/svg/twitter-icon.svg" alt="Twitter" width="30" />
        </a>
        <a href="#" style={{ margin: "0 10px" }}>
          <img src="/img/svg/linkedin-icon.svg" alt="LinkedIn" width="30" />
        </a>
        <a href="#" style={{ margin: "0 10px" }}>
          <img src="/img/svg/instagram-icon.svg" alt="Instagram" width="30" />
        </a>
      </div>
    </div>

    {/* Contact Form on the Right */}
    <div
      className="contact-form"
      style={{
        flex: "1",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3>{t("Send Us a Message")}</h3>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder={t("Your Name")}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            placeholder={t("Your Email")}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <textarea
            rows={4}
            placeholder={t("Your Message")}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          {t("Submit")}
        </button>
      </form>
    </div>
  </div>
</div>

    </div>
  );
};

export default Fabrication;

