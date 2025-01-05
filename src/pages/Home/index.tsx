import React, { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import Teaser from "../../common/SvgIcon/developer";
import AboutContent from "../../content/AboutContent.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

interface Value {
  value: string;
  description: string;
}

interface SectionContent {
  values?: Value[];
  [key: string]: any;
}

interface Section {
  id: string;
  title: string | undefined;
  content: string | SectionContent;
  style: React.CSSProperties;
  icon: string;
}

const Home = () => {
  // Sample images array for Teaser component
  const images = [
    { src: "/img/svg/developer.jpg", alt: "Image 1 description" },
    { src: "/img/svg/graphs.jpg", alt: "Image 2 description" },
    { src: "/img/svg/product-launch.jpeg", alt: "Image 3 description" },
    { src: "/img/svg/stainless.jpeg", alt: "Image 4 description" },
  ];

  // Valued Customers Logo Array
  const valuedCustomers = [
    { src: "/img/svg/logo1.jpg", alt: "Customer 1" },
    { src: "/img/svg/logo2.jpg", alt: "Customer 2" },
    { src: "/img/svg/logo3.jpg", alt: "Customer 3" },
    { src: "/img/svg/logo4.jpg", alt: "Customer 4" },
    { src: "/img/svg/logo5.jpg", alt: "Customer 5" },
  ];

  return (
    <Container>
      <ScrollToTop />

      {/* Render Teaser component */}
      <Teaser images={images} />

      {/* Render Middle Block */}
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />

      {/* Add "Why Choose Us" Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "40px",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            padding: "60px 20px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#333", marginBottom: "30px" }}>
            Why Choose Us?
          </h2>
          <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
            We provide solutions tailored to your needs with exceptional customer service, top-notch
            technology, and a passion for quality. Here's why we're your ideal choice:
          </p>

          {/* Cards */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {AboutContent.sections.map((section, index) => {
              const content =
                typeof section.content === "string"
                  ? section.content
                  : (section.content as SectionContent).values
                      ?.map((value: Value) => `${value.value}: ${value.description}`)
                      .join(", ");

              if (!section.title) return null;

              return (
                <div
                  key={section.id}
                  style={{
                    width: "270px",
                    textAlign: "center",
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    marginBottom: "30px",
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#eef5fc",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <img
                    src={`/img/svg/${section.icon}`}
                    alt={section.title || "Icon"}
                    style={{
                      width: "60px",
                      height: "60px",
                      marginBottom: "20px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      marginBottom: "20px",
                      color: "#333",
                    }}
                  >
                    {section.title}
                  </h3>
                  <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8" }}>{content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Valued Customers Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
          marginTop: "50px",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ fontSize: "30px", fontWeight: "bold", color: "#4B0082", marginBottom: "20px" }}>
          Our Valued Customers
        </h2>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "30px" }}>
          We are honored to work with a wide range of esteemed clients who trust us for their needs.
        </p>

        {/* Slider Configuration */}
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
        >
          {valuedCustomers.map((customer, index) => (
            <div key={index} style={{ padding: "10px" }}>
              <img
                src={customer.src}
                alt={customer.alt}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Home;
