import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <p className="header__title">Nombre</p>
      <nav className="header__menu">
        <a href="/">Inicio</a>
        <a href="/">Iniciar sesion</a>
        <a href="/">Registro</a>
      </nav>
    </div>
  );
};

export default Header;
