/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div className="navBar" style={{
      position: "fixed",
      background: "rgba(255,255,255,0.75)",
      top: 0,
      width: "100%",
      zIndex: 10,
    }}>
      <div style={{
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
        gap: 3,
        width: "80%",
        margin:"auto",
    }}>
      <h1>NM</h1>
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </div>
    </div>
    </div>
  );
};

export default Header;
