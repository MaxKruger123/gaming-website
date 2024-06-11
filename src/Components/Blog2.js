import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles/Blog2.css'

const Blog2Page = () => {
    return (

    <section className="Blog2">
        
        <h1>Week 12 Blog</h1>

        <div className="flexContainer">
            <Link to="/#blogPosts">
            <button className="backToHomeButton">Return</button>
            </Link>
        </div>

        <section className="blogText">
            <p>
                It has been many weeks since I started creating this website and over that time I have completely scratched my initial design and reworked it from the ground up. React has become far easier to understand for me
                since I have had to put in extra hours into developing this web app. It feels strange to me now that we even used just HTML and CSS without usig JS or react. I have found my new site to be far more engaging and atmospheric.
                Overall I see why react is an extremely popular tool to use and why so many great websites use it. <br></br><br></br>

                I did have a massive misunderstanding when trying to publich my react app though. I had no idea what gh-pages was or how it worked and it to me no less than a day to simply publish my site. I struggled to see how having
                a seperate branch called gh-pages wopuld help me rather than simply publishing my main branch.

                <br></br><br></br>

                I have finally found a way to share the culture of Counter:Strike e-sports through an interactive artwork. My artwork will be centered around the different maps that are currently in the video game CS:GO. 
                O each map there will be different points of interest, shown as little goldenr glowing circles. Once the user clicks on these, a community favourite clip from a pro player will be shown from where the dot is on the map. 
                This way all types of gamers will be able to understand and get a feel for what it was like when the legendary moments happened.
            </p>
            
            

        </section>
      
    </section>

    );

};

export default Blog2Page;