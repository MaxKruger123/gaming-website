import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles/Blog2.css'

const Blog2Page = () => {
    return (

    <section className="Blog2">
        
        <h1>Keeping Interactivity in Mind</h1>

        <div className="flexContainer">
            <Link to="/#blogPosts">
            <button className="backToHomeButton">Return</button>
            </Link>
        </div>

        <section className="blogText">
            <p>An important aspect of modern websites is the idea of Interactivity. Something is interactive if it is "responsive", does not fully "control", 
                is not fully "controlled" and finally does not respond in a "random fashion" (Aaron Smuts, 2009). This was of great importance to me when reworking this website.
                Espen Aarseth refreains from using the word 'interactive' bur prefers to use the term 'ergodic'. This means that non trivial effor it reauired to navigate a text.

                From this we can add that if something is interactive it must require non-trivial effort to navigate. These are all important aspects to take into account when creating a website
                and can cause the user to have a great or not so great experience when traversing your site. As to quote one of my previous lecturers "we are in the business of manipulation", meaning 
                as we create, we also guide. When a user navigates a site, we use design flow to guide them on a path to explore the site. This is not fully controlled by us and the user can break the guide
                at any time, however the user must always feel like they can navigate anywhere at all times by our creation.<br></br><br></br>

                By deeply becoming aware of this, I was able to view this website in a different light, guiding a user through my website rather than creating something that they do not understand. 
                This can make my website feel like more of an experience aswell. By using interactive elements throughout my pages, by creating clear interfaces that link to one another through a design flow I can guide the user through my experience.
                <br></br><br></br>

                To dig a bit deeper on the technical side. My interactive elements are responsive and do not rect at a random fashion. When the user hovers over them, they react to that event with animations which overall creates a better user experience.
                At this point when writing this I do not have too much of a design flow as of yet however, I want to link each page in a neat string where I can use a design flow to get the user through all of my pages in a sensible way without any confusion.

                References: <br></br><br></br>
                Smuts, A. (1970) Aaron Smuts, what is interactivity?, PhilPapers. Available at: https://philpapers.org/rec/SMUWII (Accessed: 11 June 2024). 
                </p>
            
            

        </section>
      
    </section>

    );

};

export default Blog2Page;