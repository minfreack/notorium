import React from 'react'
import helper from '../../helper';
import app from '../../images/app.png';
import logo from '../../images/logo.png';
import svg_welcome from '../../images/titleVector.svg'
import menu_mobile from '../../images/menu.svg'
import './welcome.css'

export const Welcome = () => {

  const handleButtonMenu = (e) => {
    const menuMobile = document.querySelector('#menu-mobile-items');
    menuMobile.classList.toggle('nav-bar-mobile');
  }


  return (
      <div className="main-section">
      <div className="menu">
        <div className="menu-logo">
            <img src={logo} className="nav-logo" alt="" />
        </div>
        <div className="nav-bar">
          <ul>
            <li><a className="nav-item" href="">Inicio</a></li>
            <li><a className="nav-item" href="">¿Por qué Notorium?</a></li>
            <li><a className="nav-item" href="">Características</a></li>
            <li><a className="nav-item" href="">Versión Web</a></li>
          </ul>
        </div>
      </div>
      {/*MENÚ MÓVIL}*/}
      <div className="menu-mobile">
        <div className="menu-open-close">
          <div className="menu-header">
            <div className="menu-logo">
              <img src={logo} className="nav-logo" alt="" />
            </div>
            <div className="menu-ham">
            <a href="#" onClick={handleButtonMenu} id="buttonMenu">
              <img src={menu_mobile} alt="" />
            </a>
            </div>
          </div>
          <div id="menu-mobile-items" className="nav-bar-mobile">
            <ul className="mobile-ul">
              <li><a className="nav-item" href="">Inicio</a></li>
              <li><a className="nav-item" href="">¿Por qué Notorium?</a></li>
              <li><a className="nav-item" href="">Características</a></li>
              <li><a className="nav-item" href="">Versión Web</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/*BIENVENIDA DE PÁGINA*/}
      <section className="main-welcome">
        <div className="welcome-text">
          <img src={svg_welcome} className="svg_welcome" alt="" />
          <h2>Notorium</h2>
          <h3>Tu app de productividad</h3>
        </div>
        <div className="welcome-image">
          <img src={app} alt="" />
        </div>
      </section>
      </div>
  );
}



