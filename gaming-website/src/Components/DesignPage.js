import React from 'react';
import './styles/DesignPage.css'
import HomeWireFrame from './styles/Images/HomePageWireFrame.PNG'
import AboutUsWireFrame from './styles/Images/AboutUsWireFrame.PNG'
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
                HomePage WireFrame
            </h3>
            <img src={HomeWireFrame} />

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
            <p>The Overall aesthetic of my site is Dark and Modern. The prominent use of dark purple in my background gives a sleek 
                and modern look that is both sophisticated and contemporary. The Dark Purple theme is creative and is suitable for a gaming focused website like mine.
                </p>

                <h3>Colour Scheme</h3>
                <p>Our Primary Colours are Dark purple (rgba(33, 25, 51, 0.950)) and white. Our Accent colours are Light blue (#61dafb) for when users hover over 
                    important interactive elements and give a great contrast or highlighting effect
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
                <p>On content heavy pages such as the design and theory pages, the content is centrered wihich pulls the users attention to the content and ensuring readibility.

                </p>

                <h3>Responsiveness</h3>
                <p>Media queries are used for every page on the website ensuring that no matter the device used by the user, the website still creates a user-friendly experience and remains
                    aesthetically pleasing. This includes the translation of containers and changes in font sizes depending on the users device.
                </p>
        </section>

    );
};

export default DesignPage;

