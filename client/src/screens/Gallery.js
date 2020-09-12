/* TODO: Make images bigger a bit
 *  TODO: Clicking image gives full size image modal (or page)
 *  TODO: Fetch incrementally from API, getImages from mongoDB?*/

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Masonry from "react-masonry-component";
import M from "materialize-css";

import { setPage } from "../actions/pageActions";
import { setFilter } from "../actions/filterActions";

import "../css/Gallery.css";

import Navigation from "../components/Navigation";
import GalleryImage from "../components/GalleryImage";
import Footer from "../components/Footer";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const filter = useSelector((store) => store.filter.filter);

  const dispatch = useDispatch();

  const [renderedImages, setRenderedImages] = useState([]);

  const handleImagesLoaded = () => {
    document.getElementsByClassName("GalleryContainer")[0].style.display =
      "block";
  };

  const filterImages = () => {
    if (images.length === 0) {
      return;
    }
    if (filter) {
      setRenderedImages(
        images.filter((img) => img.tags.indexOf(filter) !== -1)
      );
    } else {
      setRenderedImages(images);
    }
  };

  const toggleFilter = (e) => {
    dispatch(setFilter(e.target.name));
  };

  useEffect(() => {
    axios.get("/api/images").then((res) => {
      setImages(res.data);
      setRenderedImages(res.data);
    });
  }, []);

  useEffect(() => {
    document.title = "Gallery | DL Imaging";
    document.getElementsByClassName("GalleryContainer")[0].style.display =
      "none";
    dispatch(setPage("Gallery"));

    let filterElems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(filterElems, {
      inDuration: 300,
      outDuration: 225,
      hover: true,
      coverTrigger: false,
    });
  }, []);

  useEffect(() => {
    filterImages();
  }, [filter]);

  return (
    <div className="Gallery">
      <Navigation />

      <div className="GalleryContainer">
        <h2 className="center">Gallery</h2>

        <div className="filter center">
          <ul id="filterDropdown" className="dropdown-content">
            <li className={!filter ? "white-text active" : "white-text"}>
              <a onClick={toggleFilter} name={null}>
                None
              </a>
            </li>
            <li className="divider"></li>
            <li
              className={
                filter === "street" ? "white-text active" : "white-text"
              }
            >
              <a onClick={toggleFilter} name="street">
                Street
              </a>
            </li>
            <li
              className={
                filter === "portrait" ? "white-text active" : "white-text"
              }
            >
              <a onClick={toggleFilter} name="portrait">
                Portrait
              </a>
            </li>
            <li
              className={
                filter === "product" ? "white-text active" : "white-text"
              }
            >
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
            stagger: 10,
            fitWidth: true,
          }}
        >
          {renderedImages.map((image) => (
            <GalleryImage image={image} key={image.id} />
          ))}
        </Masonry>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
