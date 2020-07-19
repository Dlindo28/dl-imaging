/* TODO: Make images bigger a bit
 *  TODO: Clicking image gives full size image modal (or page)
 *  TODO: Fetch incrementally from API, getImages from mongoDB?*/

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Masonry from "react-masonry-component";
import M from "materialize-css";

import { setPage } from "../actions/pageActions";

import "../css/Gallery.css";

import Navigation from "../components/Navigation";
import GalleryImage from "../components/GalleryImage";

const Gallery = ({}) => {
  const image = useSelector((store) => store.image);
  const dispatch = useDispatch();

  const [renderedImages, setRenderedImages] = useState(image.images);
  const [dropdown, setDropdown] = useState(false);
  const [filter, setFilter] = useState(null);

  const handleImagesLoaded = () => {
    document.getElementsByClassName("GalleryContainer")[0].style.display =
      "block";
  };

  const filterImages = () => {
    if (filter) {
      setRenderedImages(
        image.images.filter((img) => img.tags.indexOf(filter) !== -1)
      );
    } else {
      setRenderedImages(image.images);
    }
  };

  const toggleFilter = (e) => {
    setFilter(e.target.name);
  };

  useEffect(() => {
    document.title = "Gallery | DL Imaging";
    dispatch(setPage("Gallery"));
    document.getElementsByClassName("GalleryContainer")[0].style.display =
      "none";

    filterImages();

    let filterElems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(filterElems, {
      inDuration: 300,
      outDuration: 225,
      hover: true,
      coverTrigger: false,
    });
  }, [filter]);

  return (
    <div className="Gallery">
      <Navigation />

      <div className="GalleryContainer">
        <h2 className="center">Gallery</h2>

        <div className="filter center">
          <ul id="filterDropdown" className="dropdown-content">
            <li className="white-text">
              <a onClick={toggleFilter} name={null}>
                None
              </a>
            </li>
            <li className="divider"></li>
            <li className="white-text">
              <a onClick={toggleFilter} name="street">
                Street
              </a>
            </li>
            <li className="white-text">
              <a onClick={toggleFilter} name="portrait">
                Portrait
              </a>
            </li>
            <li className="white-text">
              <a onClick={toggleFilter} name="product">
                Product
              </a>
            </li>
          </ul>
          <a className="btn dropdown-trigger" data-target="filterDropdown">
            Filter
          </a>
        </div>

        <Masonry
          className="photoClass"
          onImagesLoaded={handleImagesLoaded}
          options={{
            horizontalOrder: false,
            stagger: 70,
            fitWidth: true,
          }}
        >
          {renderedImages.map((image) => (
            <GalleryImage image={image} key={image.id} />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Gallery;
