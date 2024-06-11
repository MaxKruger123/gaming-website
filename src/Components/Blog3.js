import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles/Blog3.css'

const Blog3Page = () => {
    return (

    <section className="Blog3">
        
        <h1>Week 4 Blog</h1>

        <div className="flexContainer">
            <Link to="/#blogPosts">
            <button className="backToHomeButton">Return</button>
            </Link>
        </div>

        <section className="blogText">
           <p>
            This week's work turned out to be a much more difficult challenge than last weeks. Using states, state management and routing was a challeneg to wrap my head around initially. Most of all
            routing was difficult. Since web aps do not change pages, but rather render different components depending on where the user navigates, means, that changing pages works differently than regular a or href tags like in html.
            Thanks to react though we have access to a bunch of packages that we fcan install for free. One of them is react Routes. This is a very different method to navigation than we have used before
            but is used for client side routing. My biggest issue regarding this weeks exercises was not understanding what I need to do but rather the code syntax since it is so much different o other programming languages I am more fluent in.
            The use of so many different brackets and different ways to do similar things make me feel unsure about if how I am doing it is the right way. But then again there is no right way about doing code. Something I need to remind myself often.
            <br></br><br></br>

            Finding inspiration for my artwork was not difficult since I have an idea of what I want to create. However, finding material inspiration was hard. This was because I have a huge 
            history in e-sports which is competitive gaming. Since my website will be themed around games, I thought an e-sport centred artwork would be appropriate. Th issue is all of my inspiration
            is mostly from myself and the community I have been apart of for so many years. Since a young age I have played games such as CS:GO competitively and competed at many competitions ad it is quite difficult to
             express this rich history of the sport without experiencing it for yourself. So I managed to come up with an idea. Using some of my most favourite clips and players over the years I can put together an piece that
             displays the culture and development of the e-sports scene for CS:GO and its role in the internet.

           </p>
            

        </section>
      
    </section>

    );

};

export default Blog3Page;