import React from 'react';
import GalleryItem from './GalleryItem';
import './styles/ImageGallery.css';
import ImageOne from "./styles/Images/Customize.jpg"
import ImageTwo from "./styles/Images/DesignImage.jpg"
import ImageThree from "./styles/Images/netArt.jpg"
import ImageFour from "./styles/Images/theoryImage.jpg"
import ImageFive from "./styles/Images/SignUp.jpg"

function ImageGallery() {
    return (
        <section className="imageGallery">
          <figure className="galleryItem">
            <img src={ImageOne} alt="About Us" className="galleryImage" />
            <figcaption className="galleryCaption">About Us</figcaption>
          </figure>

          <figure className="galleryItem">
            <img src={ImageTwo} alt="The Design Page" className="galleryImage" />
            <figcaption className="galleryCaption">The Design Page</figcaption>
          </figure>

          <figure className="galleryItem">
            <img src={ImageThree} alt="Our Net Art!" className="galleryImage" />
            <figcaption className="galleryCaption">Our Net Art!</figcaption>
          </figure>

          <figure className="galleryItem">
            <img src={ImageFour} alt="Theory Section" className="galleryImage" />
            <figcaption className="galleryCaption">Theory Section</figcaption>
          </figure>

          <figure className="galleryItem">
            <img src={ImageFive} alt="Sign Up!" className="galleryImage" />
            <figcaption className="galleryCaption">Sign Up!</figcaption>
          </figure>
          {/* Add more images as needed */}
        </section>
      );
    }
  

export default ImageGallery;