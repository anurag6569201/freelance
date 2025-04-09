import React from "react";

const WhatsappBtn = () => {
  const btnStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25d366",
    color: "white",
    padding: "12px",
    fontSize: "24px",
    borderRadius: "50%",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    transition: "background 0.3s ease",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex:'100000',
    border:'2px solid white'
  };

  return (
    <a
      href="https://wa.me/yourwhatsapplink"
      target="_blank"
      rel="noopener noreferrer"
      style={btnStyle}
    >
      <i className="fas fa-phone"></i>
    </a>
  );
};

export default WhatsappBtn;
