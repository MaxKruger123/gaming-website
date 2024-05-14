import React from 'react';
import './App.css';
import topImage from './Images/WarriorImage.jpg';

function App() {
  return (
    <main className="main">
      <section className="topContainer">
        <figure>
          <img src={topImage} alt="Painted Image of a Female Warrior" className="backgroundImage" />
          <figcaption className="figCaption">
            {/* Your news content goes here */}
            <h1>Bringing Fantasy to Life!</h1>
            <p>Our interests lie beyond fantasy but rather within our players.<br></br>
             Join us in our journey where we adventure through the <br></br>
             design and intent behind video games and more.</p>
             <button className="learnMoreButton">Learn More</button>
          </figcaption>
        </figure>
      </section>
      {/* Other content of your homepage */}
    </main>
  );
}

export default App;
