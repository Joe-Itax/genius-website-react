import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import tailwindContext from "../../context/tailwind-context";


function Header() {
  const myCustomClassName = useContext(tailwindContext);
  return (
    <header className={`flex justify-between items-center w-full bg-[#191919] text-gray-100 z-30 text-base transition-all duration-75 ease-in-out border-b border-solid border-[#262626]`}>
      <div className="logo-box">
        <NavLink to="./" className={`${myCustomClassName.flexJCC_AIC} p-8 pl-0`}>
          <i className="ri-at-line"></i>
          <span>Genius</span>
        </NavLink>
      </div>
      <nav className={``}>
        <ul className={`${myCustomClassName.flexJCC_AIC}`}>
          <li className="a-active"><NavLink to="./">Accueil</NavLink></li>
          <li><NavLink to="./services">Services</NavLink></li>
          <li><NavLink to="./realisations">Nos Réalisations</NavLink></li>
          <li><NavLink to="./about">A Propos</NavLink></li>
          <li><NavLink to="./contact">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="cta-contact_us">
        <Link to="./contact" className="btn">Nous Contacter</Link>
      </div>
      <div className="menu-icon-box">
        <i className="ri-menu-4-line menu-icon open-menu"></i>
      </div>
    </header>
  )
}

export default Header;