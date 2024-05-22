// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import Logo from './styles/Images/Logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav className="navLinks">
        <Link to="/design">Design</Link>
        <Link to="/theory">Theory</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;

