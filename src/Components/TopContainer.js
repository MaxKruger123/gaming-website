import React, { useState, useEffect } from 'react';
import './styles/TopContainer.css';
import BackgroundImage1 from './styles/Images/ACShadows.jpg';
import BackgroundImage2 from './styles/Images/Outlaws.jpg';
import BackgroundImage3 from './styles/Images/EldenRingg.png';

// 3 rotating images, title and captions
const figandCaption = [
  { image: BackgroundImage1, title: 'An New Era of Assassins', caption: 'Delve into medieval japan with the new entry of Assassins creed: Shadows.' },
  { image: BackgroundImage2, title: 'Become a Bounty Hunter', caption: 'Fly into your new journey as a bounty hunter.'},
  { image: BackgroundImage3, title: 'An all New Story', caption: 'Embark on an adventure with rich-story telling and an vast open-world' },
];

const TopContainer = () => {
  const [content, setContent] = useState(figandCaption[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = figandCaption.findIndex(item => item === content);
      setContent(figandCaption[(currentIndex + 1) % figandCaption.length]);
    }, 5000);

    return () => clearInterval(interval);
  }, [content]);

  const handleDotClick = (index) => {
    setContent(figandCaption[index]);
  };

  return (
    <section className="topContainer">
      <div className="gallery">
      {figandCaption.map((item, i) => (
  <div
    key={i}
    className={`slide ${content === item ? 'active' : ''}`}
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
        {figandCaption.map((_, i) => (
          <span
            key={i}
            className={`dot ${content === figandCaption[i] ? 'active' : ''}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default TopContainer;
