// import React, { useState, useEffect } from "react";

// const About: React.FC = () => {
//   // State to track the flipped state of all three boxes
//   const [flippedStates, setFlippedStates] = useState([false, false, false]);

//   // Automatically flip images back after 1 second
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setFlippedStates([false, false, false]);
//     }, 1000);

//     return () => clearTimeout(timer); // Cleanup timer to avoid memory leaks
//   }, [flippedStates]);

//   // Handle flip on click
//   const handleFlip = (index: number) => {
//     setFlippedStates((prevStates) =>
//       prevStates.map((state, i) => (i === index ? !state : state))
//     );
//   };

//   const content = [
//     {
//       img: "/img/svg/Innovation.jpeg",
//       title: "Innovation",
//       text: "Crafting state-of-the-art engineering solutions tailored to your needs.",
//     },
//     {
//       img: "/img/svg/Reliability.jpeg",
//       title: "Reliability",
//       text: "Your trusted partner in mechanical, electrical, and civil projects.",
//     },
//     {
//       img: "/img/svg/Sustainability.jpeg",
//       title: "Sustainability",
//       text: "Focusing on sustainable practices for a greener tomorrow.",
//     },
//   ];

//   return (
//     <div
//       style={{
//         padding: "2rem",
//         textAlign: "center",
//         background: "linear-gradient(135deg, #f9f9f9, #e3e4fa)",
//         color: "#333",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* Headline */}
//       <h1
//         style={{
//           fontSize: "3rem",
//           fontWeight: "bold",
//           marginBottom: "1rem",
//           color: "#4B0082",
//         }}
//       >
//         Building Tomorrow, Together.
//       </h1>

//       {/* Subheadline */}
//       <p style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#6d6e74" }}>
//         Expertise in Engineering Solutions That Empower.
//       </p>

//       {/* Developer Image */}
//       <div style={{ position: "relative", marginBottom: "2rem" }}>
//         <img
//           src="/img/svg/developer.jpg"
//           alt="About Us"
//           style={{
//             width: "50%",
//             maxWidth: "800px",
//             height: "auto",
//             borderRadius: "12px",
//             boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             bottom: "10px",
//             left: "10px",
//             background: "rgba(75, 0, 130, 0.8)",
//             color: "white",
//             padding: "5px 10px",
//             borderRadius: "4px",
//             fontSize: "0.9rem",
//           }}
//         >
//           Transforming Vision Into Reality
//         </div>
//       </div>

//       {/* Highlighted Points */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "1.5rem",
//           marginBottom: "2rem",
//         }}
//       >
//         {content.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => handleFlip(index)}
//             style={{
//               perspective: "1000px",
//               cursor: "pointer",
//             }}
//           >
//             <div
//               style={{
//                 transform: flippedStates[index] ? "rotateY(180deg)" : "rotateY(0deg)",
//                 transformStyle: "preserve-3d",
//                 transition: "transform 0.8s",
//                 position: "relative",
//                 width: "100%",
//                 height: "400px", // Increased height for more space
//                 background: "#fff",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 borderRadius: "8px",
//                 textAlign: "center",
//               }}
//             >
//               {/* Front of Card */}
//               <div
//                 style={{
//                   backfaceVisibility: "hidden",
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: "1rem",
//                 }}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   style={{
//                     width: "180px", // Increased width
//                     height: "180px", // Increased height
//                     objectFit: "cover",
//                     marginBottom: "1rem",
//                   }}
//                 />
//                 <h3
//                   style={{
//                     color: "#4B0082",
//                     fontSize: "1.2rem",
//                   }}
//                 >
//                   {item.title}
//                 </h3>
//               </div>

//               {/* Back of Card */}
//               <div
//                 style={{
//                   backfaceVisibility: "hidden",
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: "1rem",
//                   transform: "rotateY(180deg)",
//                   backgroundColor: "#4B0082",
//                   color: "#fff",
//                   borderRadius: "8px",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontSize: "0.95rem",
//                     color: "#fff",
//                     textAlign: "center",
//                   }}
//                 >
//                   {item.text}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Description */}
//       <p style={{ fontSize: "1.1rem", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto" }}>
//         Specializing in Mechanical, Electrical, Civil, and Industrial Services for Your Success.
//         Our team is dedicated to delivering innovative, reliable, and efficient solutions tailored to meet the needs of diverse industries.
//         From turnkey engineering projects to maintenance and supply, we are here to make your vision a reality.
//       </p>
//     </div>
//   );
// };

// export default About;

import React, { useState } from "react";

const About: React.FC = () => {
  const [flippedStates, setFlippedStates] = useState([false, false, false]);

  const handleFlip = (index: number) => {
    setFlippedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const content = [
    {
      img: "/img/svg/Innovation.jpeg",
      title: "Innovation",
      text: "Crafting state-of-the-art engineering solutions tailored to your needs.",
    },
    {
      img: "/img/svg/Reliability.jpeg",
      title: "Reliability",
      text: "Your trusted partner in mechanical, electrical, and civil projects.",
    },
    {
      img: "/img/svg/Sustainability.jpeg",
      title: "Sustainability",
      text: "Focusing on sustainable practices for a greener tomorrow.",
    },
  ];

  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        background: "linear-gradient(135deg, #f9f9f9, #e3e4fa)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#4B0082",
        }}
      >
        Building Tomorrow, Together.
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#6d6e74" }}>
        Expertise in Engineering Solutions That Empower.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {content.map((item, index) => (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            style={{
              perspective: "1000px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                transform: flippedStates[index] ? "rotateY(180deg)" : "rotateY(0deg)",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
                position: "relative",
                width: "100%",
                height: "400px",
              }}
            >
              {/* Front */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backfaceVisibility: "hidden",
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Back */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backfaceVisibility: "hidden",
                  backgroundColor: "#4B0082",
                  transform: "rotateY(180deg)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    textAlign: "center",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
        Specializing in Mechanical, Electrical, Civil, and Industrial Services for Your Success.
        Our team is dedicated to delivering innovative, reliable, and efficient solutions tailored
        to meet the needs of diverse industries.
      </p>
    </div>
  );
};

export default About;
