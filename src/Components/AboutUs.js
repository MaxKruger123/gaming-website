import React from 'react';
import { Link } from 'react-router-dom';
import './styles/AboutUs.css'
import Logoo from './styles/Images/Logo.png'
import gif from './styles/Images/gaming-game-on.gif'
import SignUp from './SignUp';



const AboutUsPage = () => {
    return (

        <section className="aboutUsPage">
        <img src={Logoo} className="logo" alt="Logo"/>

        <section className="aboutContainer">
            <div className="textSection">
                <h1 className="Heading1">About Us!</h1>
                <p>Here at Game we bring the latest news on the latest games! Whether its trailers, controversy, or HUGE updates, we are on it. 
                    If you like what we do we would appreciate you signing up to our page so you never miss anything in games.
                </p>
            </div>
            <div className="imageSection">
                <img src={gif} alt="About Us Image"/>
            </div>
        </section>

        
        <SignUp />
        <Link to="/design">      
        <button className="aboutButton">Our Design Page</button>
              
      </Link> 
      
    </section>

    );

};

export default AboutUsPage;