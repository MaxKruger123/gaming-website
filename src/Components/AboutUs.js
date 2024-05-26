import React from 'react';
import './styles/AboutUs.css'
import Logoo from './styles/Images/Logo.png'
import Physch from './styles/Images/Phych.jpg'



const AboutUsPage = () => {
    return (

        <section className="aboutUsPage">
        <img src={Logoo} className="logo" alt="Logo"/>

        <section className="aboutContainer">
            <div className="textSection">
                <h1>About Us!</h1>
                <p>Here we prioritize our players by analyzing whats going on behind the scenes! Our focus is on finding our what makes players tick! Thanks to
                    phychology we are able to find out exactly how games are created in order to sway our player in certin directions whilst maintaining the fun!
                </p>
            </div>
            <div className="imageSection">
                <img src={Physch} alt="About Us Image"/>
            </div>
        </section>
    </section>

    );

};

export default AboutUsPage;