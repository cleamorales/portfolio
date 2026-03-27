import React from "react";
import "./Styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {currentYear} Clea Morales. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;