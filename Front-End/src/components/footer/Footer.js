import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center">
      <div className="wrapper mt-3">
        <small>
          @2024 <strong>University of North Texas</strong>, All Rights Reserved
        </small>
        <nav className="footer-nav">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;