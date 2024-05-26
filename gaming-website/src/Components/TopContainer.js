import React from 'react';
import { Link } from 'react-router-dom';
import './styles/TopContainer.css';
import backgroundImage from "./styles/Images/WarriorImage.jpg"


const TopContainer = () => {
  return (
    <main className="main">
      <section className="topContainer">
        <figure>
          <img src={backgroundImage} alt="Background" className="backgroundImage" />
          <figcaption className="figCaption">
            <h1>Bringing Fantasy to Life!</h1>
            <p>Here we look at more than just games, we look at our players. <br></br>
                Join us on our journey into exploring our players minds and the psychology <br></br>
                behind the games we love most!</p>
                <Link to="/about">
            <button className="learnMoreButton">Learn More</button>
            </Link>
          </figcaption>
        </figure>
      </section>

      {/* Add other sections or components here */}
    </main>
  );
};

export default TopContainer;