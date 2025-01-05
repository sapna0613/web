import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory if using React Router v5
// Use import { useNavigate } from "react-router-dom"; for React Router v6

interface TeaserProps {
  images: { src: string; alt: string }[];
}

const Teaser: React.FC<TeaserProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const history = useHistory(); // Initialize useHistory hook for navigation
  // const navigate = useNavigate(); // If you're using React Router v6

  // Cycle through images on a timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);

  const handleExploreClick = () => {
    history.push("/Services"); // Navigate to Services page (React Router v5)
    // navigate("/services"); // If you're using React Router v6
  };

  return (
    <div
      style={{
        position: "relative",
        width: "135%",
        height: "80vh",
        right: "20%",
        overflow: "hidden",
      }}
    >
      {/* Overlay for darkening the background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // 30% black overlay
          zIndex: 0,
        }}
      />

      {/* Display the current image */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          style={{
            position: "absolute",
            top: 0,
            left: 20,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}

      {/* Overlay content */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "5%",
          color: "#fff",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            margin: 0,
            color: "#fff",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Text shadow for better contrast
          }}
        >
          Let's build together
        </h1>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
          {/* Explore Button */}
          <button
            style={{
              backgroundColor: "#4B0082",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleExploreClick} // Navigate on button click
          >
            Explore
          </button>

          {/* Learn More Button */}
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              padding: "10px 20px",
              border: "2px solid #fff",
              borderRadius: "4px",
              cursor: "pointer",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Optional shadow
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teaser;
