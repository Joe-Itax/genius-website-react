import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="logo-box">
        <NavLink to="./">
          <i className="ri-at-line"></i>
          <span>Genius</span>
        </NavLink>
      </div>
      <nav className="">
        <ul>
          <li className="a-active"><NavLink to="./" className="active">Accueil</NavLink></li>
          <li><NavLink to="./">Services</NavLink></li>
          <li><NavLink to="./">Nos Réalisations</NavLink></li>
          <li><NavLink to="./">A Propos</NavLink></li>
          <li><NavLink to="./">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="cta-contact_us">
        <Link to="./" className="btn">Nous Contacter</Link>
      </div>
      <div className="menu-icon-box">
        <i className="ri-menu-4-line menu-icon open-menu"></i>
      </div>
    </>
  )
}

export default Header;