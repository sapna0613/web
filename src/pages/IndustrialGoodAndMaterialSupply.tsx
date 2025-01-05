import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./IndustrialGoodAndMaterialSupply.css";

const IndustrialGoodAndMaterialSupply: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleNavigation = () => {
    history.push("/contact");
  };

  // Array of image paths for Mechanical Materials
  const mechanicalImages = [
    "/img/svg/1.webp",
    "/img/svg/2.webp",
    "/img/svg/3.webp",
    "/img/svg/4.webp",
    "/img/svg/5.webp",
    "/img/svg/6.webp",
    "/img/svg/7.webp",
    "/img/svg/8.webp",
    "/img/svg/9.webp",
  ];

  // Array of image paths for Electrical Materials
  const electricalImages = [
    "/img/svg/etc1.webp",
    "/img/svg/etc2.webp",
    "/img/svg/etc3.webp",
    "/img/svg/etc4.webp",
    "/img/svg/etc5.webp",
    "/img/svg/etc6.webp",
    "/img/svg/etc7.webp",
    "/img/svg/etc8.webp",
    "/img/svg/etc9.webp",
  ];

  const [currentMechanicalIndex, setCurrentMechanicalIndex] = useState(0);
  const [currentElectricalIndex, setCurrentElectricalIndex] = useState(0);

  const itemsPerSlide = 3; // Number of items per slide

  // Set up timers to cycle through images
  useEffect(() => {
    const mechanicalInterval = setInterval(() => {
      setCurrentMechanicalIndex(
        (prevIndex) => (prevIndex + 1) % mechanicalImages.length
      );
    }, 5000);

    const electricalInterval = setInterval(() => {
      setCurrentElectricalIndex(
        (prevIndex) => (prevIndex + 1) % electricalImages.length
      );
    }, 5000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(mechanicalInterval);
      clearInterval(electricalInterval);
    };
  }, [mechanicalImages.length, electricalImages.length]);

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Top Banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "450px",
          marginBottom: "50px",
          overflow: "hidden",
        }}
      >
        <img
          src="/img/svg/top-banner.jpg"
          alt="Industrial Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div>
          <h2
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            70% of industries rely on durable material supply!
          </h2>
        </div>
      </div>

      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "2.5rem" }}>
          {t("Industrial Good & Material Supply")}
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          {t(
            "Providing top-notch solutions for all your industrial material needs, focusing on reliability and excellence."
          )}
        </p>
      </div>

      {/* Mechanical Material Supply */}
      <div style={{ marginBottom: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {t("Mechanical Material Supply")}
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
          {t(
            "We supply a large range of products, materials, and spares to support your plant and equipment maintenance needs."
          )}
        </p>

        {/* Mechanical Slider */}
        <div className="carousel-container">
          <div
            className="carousel-images"
            style={{
              transform: `translateX(-${
                currentMechanicalIndex * (100 / itemsPerSlide)
              }%)`,
              transition: "transform 1s ease",
            }}
          >
            {mechanicalImages.map((imgSrc, index) => (
              <div
                key={index}
                className="carousel-item"
                style={{
                  flex: `0 0 ${100 / itemsPerSlide}%`,
                  padding: "5px",
                }}
              >
                <img
                  src={imgSrc}
                  alt={`Mechanical Product ${index + 1}`}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Electrical Material Supply */}
      <div style={{ marginBottom: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {t("Electrical Material Supply")}
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
          {t(
            "We provide a range of electrical components, wiring, and accessories essential for your electrical system setup."
          )}
        </p>

        {/* Electrical Slider */}
        <div className="carousel-container">
          <div
            className="carousel-images"
            style={{
              transform: `translateX(-${
                currentElectricalIndex * (100 / itemsPerSlide)
              }%)`,
              transition: "transform 1s ease",
            }}
          >
            {electricalImages.map((imgSrc, index) => (
              <div
                key={index}
                className="carousel-item"
                style={{
                  flex: `0 0 ${100 / itemsPerSlide}%`,
                  padding: "5px",
                }}
              >
                <img
                  src={imgSrc}
                  alt={`Electrical Product ${index + 1}`}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3>{t("Get in Touch")}</h3>
        <p>{t("Let us help you find the right materials for your projects.")}</p>
        <button
          onClick={handleNavigation}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          {t("Contact Us")}
        </button>
      </div>
    </div>
  );
};

export default IndustrialGoodAndMaterialSupply;
