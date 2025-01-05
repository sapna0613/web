

// import React from "react";
// import { Card, Row, Col } from "antd";
// import { BuildOutlined, SettingOutlined } from "@ant-design/icons";
// import { useHistory } from "react-router-dom";// Import useNavigate hook

// const services = [
//   {
//     icon: <BuildOutlined style={{ fontSize: "48px", color: "#4B0082" }} />,
//     title: "Engineering Works Expertise",
//     description:
//       "Structural and piping works, equipment erection, painting, and manpower supply.",
//     path: "/StructuralServices", // Path for navigation
//   },
//   {
//     icon: <SettingOutlined style={{ fontSize: "48px", color: "#4B0082" }} />,
//     title: "Maintenance and Repair Services",
//     description: "Preventive maintenance contracts and emergency machinery repairs.",
//     path: "/MaintenanceServices", // Path for navigation
//   },
//   {
//     icon: <SettingOutlined style={{ fontSize: "48px", color: "#4B0082" }} />,
//     title: "Hydraulic Equipment Supply",
//     description: "Supply and servicing of high-quality hydraulic equipment.",
//     path: "/HydraulicEquipment", // Example future route
//   },
//   {
//     icon: <BuildOutlined style={{ fontSize: "48px", color: "#4B0082" }} />,
//     title: "Industrial Materials Supply",
//     description: "Industrial materials according to ISO, ASTM, and ASME standards.",
//     path: "/IndustrialMaterials", // Example future route
//   },
//   {
//     icon: <SettingOutlined style={{ fontSize: "48px", color: "#4B0082" }} />,
//     title: "Industrial Automation Solutions",
//     description:
//       "Modernizing systems with PLCs and SCADA setups to improve operations.",
//     path: "/AutomationSolutions", // Example future route
//   },
// ];


//   const Services = () => {
//   const history = useHistory(); // Correctly instantiate history function

//   const handleNavigate = () => {
//     history.push("/StructuralServices"); // Use history.push to navigate
//   };

//   return (
//     <div style={{ padding: "50px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
//       <h1
//         style={{
//           textAlign: "center",
//           marginBottom: "50px",
//           fontSize: "2.5rem",
//           color: "#4B0082",
//           fontWeight: "bold",
//         }}
//       >
//         Our Services
//       </h1>
//       <Row
//         gutter={[16, 24]}
//         justify="center"
//         style={{
//           marginLeft: "auto",
//           marginRight: "auto",
//           maxWidth: "1200px",
//         }}
//       >
//         {services.map((service, index) => (
//           <Col key={index} xs={24} sm={12} md={8} lg={6}>
//             <Card
//               title={service.title}
//               bordered={false}
//               style={{
//                 textAlign: "center",
//                 boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
//                 borderRadius: "12px",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//               }}
//               hoverable={true}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <div style={{ marginBottom: "20px" }}>{service.icon}</div>
//               <p style={{ fontSize: "1rem", color: "#555" }}>{service.description}</p>
//               {service.title === "Engineering Works Expertise" ? (
//                 <button
//                   style={{
//                     backgroundColor: "#4B0082",
//                     color: "#fff",
//                     border: "none",
//                     padding: "10px 15px",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     marginTop: "15px",
//                   }}
//                   onClick={handleNavigate} // Use navigate function
//                 >
//                   Learn More
//                 </button>
//               ) : (
//                 <button
//                   style={{
//                     backgroundColor: "#4B0082",
//                     color: "#fff",
//                     border: "none",
//                     padding: "10px 15px",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     marginTop: "15px",
//                   }}
//                   onClick={() => window.alert("More details coming soon!")}
//                 >
//                   Learn More
//                 </button>
//               )}
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default Services;






import React from "react";
import { Card, Row, Col } from "antd";
import { BuildOutlined, SettingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom"; // React Router v5

const services = [
  {
    icon: <BuildOutlined style={{ fontSize: "48px", color: "#4B0082" }} />,
    title: "Engineering Works Expertise",
    description: "Structural and piping works, equipment erection, painting, and manpower supply.",
    path: "/structuralServices",
  },
  {
    icon: <SettingOutlined style={{ fontSize: "48px", color: "#4B0082" }} />,
    title: "Maintenance and Repair Services",
    description: "Preventive maintenance contracts and emergency machinery repairs.",
    path: "/maintenanceServices",
  },
  {
    icon: <SettingOutlined style={{ fontSize: "48px", color: "#4B0082" }} />,
    title: "Hydraulic Equipment Supply",
    description: "Supply and servicing of high-quality hydraulic equipment.",
    path: "/hydraulicEquipment",
  },
  {
    icon: <BuildOutlined style={{ fontSize: "48px", color: "#4B0082" }} />,
    title: "Industrial Materials Supply",
    description: "Industrial materials according to ISO, ASTM, and ASME standards.",
    path: "/industrialMaterials",
  },
  {
    icon: <SettingOutlined style={{ fontSize: "48px", color: "#4B0082" }} />,
    title: "Industrial Automation Solutions",
    description: "Modernizing systems with PLCs and SCADA setups to improve operations.",
    path: "/automationSolutions",
  },
];

const Services = () => {
  const history = useHistory(); // Correct hook for React Router v5

  // Define path type explicitly to avoid TS7006 error
  const handleNavigate = (path: string) => {
    history.push(path); // Use history.push instead of navigate
  };

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
        Our Services
      </h1>
      <Row
        gutter={[16, 24]}
        justify="center"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1200px",
        }}
      >
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={service.title}
              bordered={false}
              style={{
                textAlign: "center",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              hoverable={true}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ marginBottom: "20px" }}>{service.icon}</div>
              <p style={{ fontSize: "1rem", color: "#555" }}>{service.description}</p>
              <button
                style={{
                  backgroundColor: "#4B0082",
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "15px",
                }}
                onClick={() => handleNavigate(service.path)} // Correct navigation
              >
                Learn More
              </button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
