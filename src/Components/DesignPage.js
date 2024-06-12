import React from 'react';
import './styles/DesignPage.css'
import HomeWireFrame from './styles/Images/NewHomePage.PNG'
import HomeWireFrame2 from './styles/Images/NewHomePage2.PNG'
import AboutUsWireFrame from './styles/Images/NewAboutUs.PNG'
import TheoryWireFrame from './styles/Images/NewTheoryPage.PNG'
import DesignWireFrame from './styles/Images/NewDesignPage.PNG'
import { Link } from 'react-router-dom';



const DesignPage = () => {
    return (
        <section className="designPage">
            <h1>
                Design Page
            </h1>

            <h2>
                WireFrames
            </h2>

            <h3>
                HomePage WireFrames
            </h3>
            <img src={HomeWireFrame} />
            <img src={HomeWireFrame2} />

            <h3>
               About Us Wireframe
            </h3>
            <img src={AboutUsWireFrame}/>

            <h3>
               Theory Page Wireframe
            </h3>
            <img src={TheoryWireFrame}/>

            <h3>
               Design Page Wireframe
            </h3>
            <img src={DesignWireFrame}/>

            <h2>
                Style Guide
            </h2>

            <h3>Theme</h3>
            <p>The Overall aesthetic of my site has changed to be mostly a contrast of light and dark colours. The landing page uses images with strong colours and is very simplistic in order
                to create more clarity and focus for the user on important content. This website is all about the latest news on the latest games releasing.
                </p>

                <h3>Colour Scheme</h3>
                <p>The primary colours used for the site are black and white. My Text and headings use black which contrast well with the white texture background I use throughout my different pages.
                    The black and white not only provides great readability and visibility for my text but also lets other colours within images and videos pop. In certain areas of my website I used images such as for blogs or a gif 
                    in my about Us page which are easier to see thanks to my black and white contrast. Black and white
                    is also the highest contrasting colour of 21:1 meaning that my website is extremely readible and easy to understand. This contrast also aids visual impared users such as individuals with colour blindness
                    to read my web pages with ease. The landing page on the other hand Has 3 brightly coloured images which rotate every 5 seconds. This not consistent with the rest of my site
                    but is there in order to create interest and pull users attention immediately before they start getting to my pages content. <br></br>
                    (No date) Color. Available at: https://it.tufts.edu/book/export/html/2443#:~:text=For%20example%2C%20black%2Fwhite%20has,would<br></br>%20be%20impossible%20to%20read.&text=These%20are%20minimums!,blindness%2C%20to%20read%20and%20understand. (Accessed: 10 June 2024). 
                </p>

                

                <h3>Typography</h3>
                <p>Our three primary fonts are Amiko, Quicksand and Proc. Amiko is used for Headings and is a simple and clean font that is reaidble, even at samller sizes. 
                    QuickSand is a geometric and rounded font. It is friendly and modern and is visually appealing. This is used for main body's of text. The final font Proc is used for navigaiton links in my header.
                    The font feels futuristic and digital which matches the theme of my website.</p>

                <h3>Navigation</h3>
                <p>For navigation I made a significant design decision which was to place the header to the right side of the page. This is uncoventional by design, however, it also gives a modern
                    feel to my site and is creative. On Smaller screen sizes the header changes to a menu which the user can toggle off and on. This is to prevent screen clutter on smaller devices.
                </p>

                <h3>Layout</h3>
                <p>The layout of my pages follow a very simple layout with content being very focused toward the centre of the page. The Homepage instead uses balance in order to have text on
                    the left and an images focus on the right hand side which creates the balance. The content heavy pages are focused on keeping items and text centre aligned in order to keep the 
                    users attention focused on the content. A Big decision I made was to move my header to the right hand side of the page, this is unconventional by design but gives as very modern 
                    feel to the website and it is creative. This change does not confuse the user in any way and is still clear and easy to use. I have also stuck to conventional headings going from h1 to h3
                    which stops any confusion and gives clarity to the user.

                </p>

                <h3>Responsiveness</h3>
                <p>Media queries are used for every page on the website ensuring that no matter the device used by the user, the website still creates a user-friendly experience and remains
                    aesthetically pleasing. This includes the translation of containers and changes in font sizes depending on the users device.
                </p>

                <h3>HomePage Reflection and Changes</h3>
                <p>
                    The intention of my homepage rework was to minimize information and get straight to the point but also to lure the user in and get them interested for the rest of my sites content.
                    Reflecting on my previous homepage I feel that it was dull and too cluttered. This meant that there was little to no design flow and this greatly impacted the Users experience. By keeping my homepage
                    simple and to the point. I ensure that the user has clarity and it is clear where they are and where they must go next.This is accomplished by using balance. The main image background of the homepage
                    creates an simplistic feel but focuses on the text to the left. Then an animated arrow at the bottom of the page leads the user to scroll down. Throughout my pages I have also decided to use black and
                    white contract for visibility and readability.
                </p>

                <Link to="/theory">      
        <button className="aboutButton">Our Theory Page</button>
              
      </Link> 
        </section>

    );
};

export default DesignPage;

