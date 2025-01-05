import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ValveAndPump.css";

const ValveAndPump: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleNavigation = () => {
    history.push("/contact");
  };

  // Array of image paths for Valves
  const valveImages = [
    "/img/valve/valve1.webp",
    "/img/valve/valve2.webp",
    "/img/valve/valve3.webp",
    "/img/valve/valve4.webp",
    "/img/valve/valve5.webp",
    "/img/valve/valve6.webp",
  ];

  // Array of image paths for Pumps
  const pumpImages = [
    "/img/pump/pump1.webp",
    "/img/pump/pump2.webp",
    "/img/pump/pump3.webp",
    "/img/pump/pump4.webp",
    "/img/pump/pump5.webp",
    "/img/pump/pump6.webp",
  ];

  const [currentValveIndex, setCurrentValveIndex] = useState(0);
  const [currentPumpIndex, setCurrentPumpIndex] = useState(0);

  const itemsPerSlide = 3; // Number of items per slide

  // Set up timers to cycle through images
  useEffect(() => {
    const valveInterval = setInterval(() => {
      setCurrentValveIndex((prevIndex) => (prevIndex + 1) % valveImages.length);
    }, 5000);

    const pumpInterval = setInterval(() => {
      setCurrentPumpIndex((prevIndex) => (prevIndex + 1) % pumpImages.length);
    }, 5000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(valveInterval);
      clearInterval(pumpInterval);
    };
  }, [valveImages.length, pumpImages.length]);

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
          src="/img/valve-and-pump-banner.jpg"
          alt="Valve and Pump Banner"
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
            {t("Explore Our Range of Valves and Pumps!")}
          </h2>
        </div>
      </div>

      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "2.5rem" }}>{t("Valve and Pump Supply")}</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          {t(
            "Reliable valves and pumps to meet the requirements of various industrial applications."
          )}
        </p>
      </div>

      {/* Valve Section */}
      <div style={{ marginBottom: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {t("Valves")}
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
          {t(
            "High-performance valves for industrial flow control, designed for durability and efficiency."
          )}
        </p>

        {/* Valve Image Slider */}
        <div className="carousel-container">
          <div
            className="carousel-images"
            style={{
              transform: `translateX(-${currentValveIndex * (100 / itemsPerSlide)}%)`,
              transition: "transform 1s ease",
            }}
          >
            {valveImages.map((imgSrc, index) => (
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
                  alt={`Valve ${index + 1}`}
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

      {/* Pump Section */}
      <div style={{ marginBottom: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {t("Pumps")}
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
          {t(
            "Efficient and reliable pumps for various applications, ensuring smooth operations."
          )}
        </p>

        {/* Pump Image Slider */}
        <div className="carousel-container">
          <div
            className="carousel-images"
            style={{
              transform: `translateX(-${currentPumpIndex * (100 / itemsPerSlide)}%)`,
              transition: "transform 1s ease",
            }}
          >
            {pumpImages.map((imgSrc, index) => (
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
                  alt={`Pump ${index + 1}`}
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
        <p>{t("Let us help you find the right valves and pumps for your projects.")}</p>
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

export default ValveAndPump;
