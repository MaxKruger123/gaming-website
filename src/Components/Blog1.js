import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles/Blog1.css'
import Vuk from './styles/Images/Vuk.jpg'

const Blog1Page = () => {
    return (

    <section className="Blog1">
        
        <h1>Week 3 Dev Blog</h1>

        <div className="flexContainer">
            <Link to="/#blogPosts">
            <button className="backToHomeButton">Return</button>
            </Link>
        </div>

        <section className="blogText">
           <p>
            Starting JSX at first was rather confusing to me. I struggles to understand the reasoning behind using javascript besides for basic functions outside of your regular html.
            Up until this point we were using regular HTML and css and further creating external js files that we then imported into our HTML if needed. However, after using it for a week I feel as if
            I am understanding the power behind it. There was a definaite learning curve behind exploring components, how they fit together like puzzle pieces, props and conditional rendering.
            After using it for a week I feel more comfortable on the topic and technical side but I still have a single brewing question that I may also have the answer for. Why use a react app? 

            <br></br><br></br>

            After some research I found that the component system I was introduced to invites the reuse of themselves in a variety of different ways. Furthermore, This saves time for developers since they do not have
            to rewrite code, you can simply plug in the component and use it wherever and whenever you want. I found this quite useful as I further learned more and practiced using react. My first onfusion on react was the setup.
            Using the cmd or Git Bash to start a react app and using the cmd to run, deploy or push commits was challenging at first but after some tampering and fails, I came to understand it.

            <br></br><br></br>

            In terms of interesting Net Artworks that I find interesting, the first one that comes to mind is Vuk Cosic's Raging Bull. This is a famed artwork for its creative use of ASCII code
            which is computer language for 1's and 0's in order to create a artpiece. This is interesting to me because I have always enjoyed history of computers. What fascinates me is how humans even came to invent 
            computers and how difficult it must have been to simply get a computer functioning using 1's and 0's. Here is an image of the artwork:
           </p>

           <img src= {Vuk} alt= "Image of Vuk's Raging bull net artpiece"/>

        </section>
      
    </section>

    );

};

export default Blog1Page;