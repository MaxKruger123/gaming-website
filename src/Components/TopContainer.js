import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/TopContainer.css';
import slides from './Slides';
import blog1Image from './styles/Images/Balance.png'
import blog2Image from './styles/Images/Balance.png'

const TopContainer = () => {
  const [content, setContent] = useState(slides[0]);

  // Created 5s times to rotate between 3 images for landingm page
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = slides.findIndex(item => item === content); // finds index of current slide in the array
      setContent(slides[(currentIndex + 1) % slides.length]); // updates state variable 'content' to the next slide in array 
    }, 5000); // 5000 = 5s time interval

    return () => clearInterval(interval); // clears interval of 5s to restart it and prevents memory leaks :D
  }, [content]);

  // Dynamically set top position of slides
  useEffect(() => {
    const handleScroll = () => { // handles the upward scrolling effect 
      const slideContainer = document.querySelector('.gallery'); // finds gallery
      const topContainer = document.querySelector('.topContainer'); //  finds topContainer
      const top = Math.max(window.pageYOffset - topContainer.offsetTop, 0); //finds the amount of distance scrolled past the .topContainer
      slideContainer.style.top = `${top}px`;
    };

    window.addEventListener('scroll', handleScroll); // connects the handleScroll function to the scroll event

    return () => {
      window.removeEventListener('scroll', handleScroll); //removes listener
    };
  }, []);

  // unused funtion
  const handleDotClick = (index) => {
    setContent(slides[index]);
  };

  //JSX
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
          <h2>AC: Shadows Reveal</h2>
          <p>Live the intertwined stories of Naoe, an adept shinobi Assassin from Iga Province, and Yasuke, 
            the powerful African samurai of historical legend. Against the backdrop of the turbulent late 
            Sengoku period, this remarkable duo will discover their common destiny as they usher in a new era for Japan. Releasing 15 November on Xbox, Playstation and PC.</p>
          </div>
          <div className="video">
          <iframe width="560" 
          height="315" 
          src="https://www.youtube.com/embed/vovkzbtYBC8?si=t1Q43RT9xz3zKi-f" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen="true"
          ></iframe>
            </div>
        </section>

        <section className="trailer2">
        <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uc66OGGtNMo?si=8n78_ox3XwaQMm7s" title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
            </div>
          <div className="text">
          <h2>Star Wars: Outlaws</h2>
          <p>Set in the one-year gap between the events of 1980's Empire Strikes Back and 1983's Return of the Jedi
            , the single-narrative game follows Kay Vess (Humberly González), a plucky street thief from Canto Bight, 
            and her Merqaal sidekick Nix.</p>
          </div>
          
        </section>

        <section className="trailer3">
          <div className="text">
          <h2>Shadow of Erdtree</h2>
          <p>The Land of Shadow.
              A place obscured by the Erdtree.
              Where the goddess Marika first set foot.
              A land purged in an unsung battle. Set ablaze by Messmer’s flame.
              It was to this land that Miquella departed.
              Divesting himself of his flesh, his strength, his lineage.
              Of all things Golden.</p>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/a8k8R0Q2ubY?si=d2ClkX8ICd0mShS_" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen="true"></iframe>
            </div>
        </section>

        <h2 className="blogsHeading">Latest Blogs</h2>
          <div id="blogPosts" className="blogLinks">
            
            <div className='blog1'>
            <Link to="/blog1">
              <div className="overlay">              
              <h3>JSX Basics!</h3>
              </div>
            </Link>            

            </div>

            <div className='blog2'>
            <Link to="/blog2">
              <div className="overlay">              
              <h3>Academic Comeback</h3>
              </div>
            </Link>            

            </div>

            <div className='blog3'>
            <Link to="/blog3">
              <div className="overlay">              
              <h3>The difficulties</h3>
              </div>
            </Link>            

            </div>
            
           
          </div>

        </div>

      </div>
      
    </div>
  );
};

export default TopContainer;
