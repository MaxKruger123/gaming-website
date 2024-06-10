import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles/Blog1.css'

const Blog1Page = () => {
    return (

    <section className="Blog1">
        
        <h1>Reworking using balance</h1>

        <div className="flexContainer">
            <Link to="/#blogPosts">
            <button className="backToHomeButton">Return</button>
            </Link>
        </div>

        <section className="blogText">
            After the previous iteration of this website and the great feedback I recieved. I have decided to rework this entire site. 
            But this time keeping certain aspects in mind such as design flows and balance. The homepage keeps to a simple design now and is intuitive and clear.
            There are 3 rotating images that each get to the point of the websites theme. Balance is key on my Homepage. The 3 rotating images each have the main focus on the right hand side of the page
            with a Heading and smaller text to the left. Since Humans naturally view things from left to right, I thought that this may be the correct way of going about it.
             I then decided to get creative by using a scrollOverlay that scrolls upward when the user scrolls down.
            This is also clearly indicated to the user on the homepage due to an new animated arrow, indicating to the user to scroll down. Once the user has scrolled down, they are at the point
            of more content. <br></br><br></br>
            
            Due to the webpages theme concerning latest games news, the first content when scrolling down are new game trailers that are the current hot topic of the games industry.
            The content here is all toward the center and is also consistent. This ensures the user focuses on the content and does not stray from it. The consistent formatting also sets up expectations
            for the other pages on my site and how they may interact. I also wanted to ensure that there were more interactive elements when creating this site. For example, whe the user hovers 
            over one of the game trailers, it will scale upward smoothly and have a glowing border. This makes it clear to the user where they are and also makes the user want to watch the trailer.<br></br><br></br>

            The background of majority of my pages throughout the site stay the same and are consistent. The white textured background ensures the visibility of my text and headings.
            

        </section>
      
    </section>

    );

};

export default Blog1Page;