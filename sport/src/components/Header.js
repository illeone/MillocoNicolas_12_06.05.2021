import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';


/**
 * Création de la barre de navigation
 * @returns {JSX}
 */

const Header = () => {
  return (
    <header className="header">
        <img src={logo} className="header_logo" alt="" />
        <ul className="header_list">
          <NavLink to="/" style={{ textDecoration: 'none' }}> <li className="header_list_name">Accueil</li></NavLink>
          <li className="header_list_name">Profil</li>
          <li className="header_list_name">Réglages</li>
          <li className="header_list_name">Communauté</li>
        </ul>
    </header>
  );
};

export default Header;