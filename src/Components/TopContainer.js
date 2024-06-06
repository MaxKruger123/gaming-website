import React, { useState, useEffect } from 'react';
import './styles/TopContainer.css';
import slides from './Slides';

const TopContainer = () => {
  const [content, setContent] = useState(slides[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = slides.findIndex(item => item === content);
      setContent(slides[(currentIndex + 1) % slides.length]);
    }, 5000);

    return () => clearInterval(interval);
  }, [content]);

  // Dynamically set top position of slides
  useEffect(() => {
    const handleScroll = () => {
      const slideContainer = document.querySelector('.gallery');
      const topContainer = document.querySelector('.topContainer');
      const top = Math.max(window.pageYOffset - topContainer.offsetTop, 0);
      slideContainer.style.top = `${top}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDotClick = (index) => {
    setContent(slides[index]);
  };

  return (
    <div className="mainContainer">
      <section className="topContainer">
        <div className="gallery">
          {slides.map((item, i) => (
            <div
              key={i}
              className={`slide ${content === item ? 'active' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <figcaption className="figCaption">
                <h1>{item.title}</h1>
                <p>{item.caption}</p>
              </figcaption>
            </div>
          ))}
        </div>
        <div className="scrollIndicator">
          <div className="arrow"></div>
        </div>
      </section>

      <div className="relativeContainer"></div>

      <div className="scrollOverlay">
        <div className="overlayContent">
          <h2>Overlay Content</h2>
          <p>This content will scroll over the slides.</p>
        </div>
      </div>
      <div className="extraContent">
        <p>Extra content to enable scrolling. Add more content here to make the page scrollable.</p>
      </div>
    </div>
  );
};

export default TopContainer;
