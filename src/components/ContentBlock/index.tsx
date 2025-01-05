import React from "react";

interface ContentBlockProps {
  title: string;
  content: string;
  direction: "left" | "right"; // Alternates content alignment
  icon?: string;
  id: string;
}

const ContentBlock = ({ title, content, direction, icon, id }: ContentBlockProps) => {
  // Styling for the container
  const containerStyle: React.CSSProperties = {
   
    display: "flex",
    flexDirection: "column", // Stack items vertically
    alignItems: direction === "left" ? "flex-start" : "flex-end", // Alternate alignment
    textAlign: direction,
    padding: "20px",
    margin: "20px 0",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "80%", // Keep box narrow for better spacing
    marginLeft: direction === "left" ? "0" : "auto", // Push to either side
    marginRight: direction === "right" ? "0" : "auto", // Push to either side
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "10px",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle} id={id}>
      <h2 style={titleStyle}>{title}</h2>
      <p style={textStyle}>{content}</p>
    </div>
  );
};


export default ContentBlock;
