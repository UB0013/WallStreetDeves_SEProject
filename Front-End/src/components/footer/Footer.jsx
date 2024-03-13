// Footer.js
import React from "react";
import "./Footer.css"; // Importing the CSS file

function Footer() {
  return (
    <footer className="footer-container">
      <div className="wrapper">
        <p className="footer-p">
          @2024 <strong>University of North Texas</strong>, All Rights Reserved
        </p>
        <nav className="footer-nav">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
        </nav>
        
      </div>
    </footer>
  );
}

export default Footer;
