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

        <div className="overlayContainer">

      <h1 className="heading">Latest Games Trailers</h1>

        <section className="trailer1">
          <div className="text">
          <h2>Overlay Content</h2>
          <p>This content will scroll over the slides.</p>
          </div>
          <div className="video">
          <iframe width="560" 
          height="315" 
          src="https://www.youtube.com/embed/vovkzbtYBC8?si=t1Q43RT9xz3zKi-f" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen></iframe>
            </div>
        </section>

        </div>

      </div>
      
    </div>
  );
};

export default TopContainer;
