import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src="https://nubi.uicore.co/advertising-agency/wp-content/uploads/sites/10/2023/04/nubi-logo-1.webp" />
      </div>
      <nav className="main-navbar">
        <a href="">Home</a>
        <a href="">Awards</a>
        <a href="">Services</a>
        <a href="">Team</a>
        <a href="">Why Nubi</a>
      </nav>
      <button className="btn">Contact Us</button>
    </div>
  );
}

export default Navbar;
