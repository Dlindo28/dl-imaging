import React from "react";

const GalleryImage = ({ image }) => {
  return (
    <a href={image.flickrUrl} rel="noopener noreferrer" target="_blank">
      <img src={image.url} className="photo hoverable" alt="" width="300px" />
    </a>
  );
};

export default GalleryImage;
