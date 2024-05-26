import React from 'react';
import './styles/GalleryItem.css';

const GalleryItem = ({ imageSrc, caption }) => {
  return (
    <div className="galleryItem">
      <img src={imageSrc} alt={caption} className="galleryImage" />
      <div className="galleryCaption">{caption}</div>
    </div>
  );
};

export default GalleryItem;