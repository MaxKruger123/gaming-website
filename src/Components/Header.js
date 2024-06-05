// Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.css';
import Logo from './styles/Images/Logo.png';
import slides from './Slides';

const Header = () => {
  const location = useLocation();

  const [currentSlide, setCurrentSlide] = useState(0); // Assuming initial slide is 0

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      
      <nav className="navLinks">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
        <Link to="/design" className={location.pathname === '/design' ? 'active' : ''}>DESIGN</Link>
        <Link to="/theory" className={location.pathname === '/theory' ? 'active' : ''}>THEORY</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Link>
        <Link to="/profile" className={location.pathname === '/about' ? 'active' : ''}>PROFILE</Link>
      </nav>
    </header>
  );
};

export default Header;
