import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__title">Nombre</p>
      <nav className="footer__menu">
        <a href="/">Facebook</a>
        <a href="/">Twitter</a>
        <a href="/">Instagram</a>
      </nav>
    </div>
  );
};

export default Footer;
