import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import Logo from './styles/Images/Logo.png';
import slides from './Slides';

const Header = () => {
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
        <Link to="/design" className={currentSlide === 0 ? slides[0].className : ''}>Design</Link>
        <Link to="/theory" className={currentSlide === 1 ? slides[1].className : ''}>Theory</Link>
        <Link to="/about" className={currentSlide === 2 ? slides[2].className : ''}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
