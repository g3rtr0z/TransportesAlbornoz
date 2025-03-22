import React from 'react';
import '../css/Header.css';
import Logo from '../assets/logo.png'

function Header() {
  return (
    <header className="header">
      <div className="contenedor">
        <img src={Logo} alt="" className="logo-img"/>
        <nav className="nav">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
