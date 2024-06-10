import React from 'react';
import './styles/DesignPage.css'
import HomeWireFrame from './styles/Images/NewHomePage.PNG'
import HomeWireFrame2 from './styles/Images/NewHomePage2.PNG'
import AboutUsWireFrame from './styles/Images/NewAboutUs.PNG'
import TheoryWireFrame from './styles/Images/ThoeryPageWireFrame.PNG'
import DesignWireFrame from './styles/Images/DesignPageWireFrame.PNG'



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
                <p>Our primary two fonts are Amiko and Quicksand. Amiko is used for navigation links and headings that are important,
                    which provides a simple and legible Sand-serif style. QuickSand is mainly used for body's of text, providing a clean, rounded and friendly appearance.</p>

                <h3>Navigation</h3>
                <p>A fixed header is present throughout the different pages and ensures that navigation is always available to users, improving user-experience. 
                    There is also a good amount of space used between navigation links which allows a clean and accessible look to the links. 
                    This makes it easy to navigate for the user.
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
        </section>

    );
};

export default DesignPage;

