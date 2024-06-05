import React, { useState, useEffect } from 'react';
import './styles/TopContainer.css';
import BackgroundImage1 from './styles/Images/ACShadows.jpg';
import BackgroundImage2 from './styles/Images/Outlaws.jpg';
import BackgroundImage3 from './styles/Images/EldenRingg.png';
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

  const handleDotClick = (index) => {
    setContent(slides[index]);
  };

  return (
    <section className="topContainer">
      <div className="gallery">
        {slides.map((item, i) => (
          <div
            key={i}
            className={`slide ${content === item ? 'active' : ''} ${item.className}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <img src={item.image} alt={item.title} />
            <figcaption className="figCaption">
              <h1>{item.title}</h1>
              <p>{item.caption}</p>
              <button className="learnMoreButton">Learn More</button>
            </figcaption>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${content === slides[i] ? 'active' : ''}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default TopContainer;
