import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import About from "../components/About";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import { setPage } from "../actions/pageActions";
import { setFilter } from "../actions/filterActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("Home"));
  });

  return (
    <div className="Home grey lighten-3">
      <Navigation page="home" />

      <div className="row container">
        <img src={require("../images/logoDark.png")} id="homeLogo" alt="" />
      </div>

      <div className="row">
        <div className="col m4 l4">
          <div className="card large">
            <div className="card-image">
              <img
                src="https://live.staticflickr.com/4565/38937430371_f237316ee4_b.jpg"
                alt="Street"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title">Street</span>
              <p>
                Check out my collection of day-to-day life and street
                photography
              </p>
            </div>
            <div className="card-action">
              <a
                onClick={() => dispatch(setFilter("street"))}
                href="/gallery"
                className="btn-flat right black-text grey lighten-3"
              >
                Street
              </a>
            </div>
          </div>
        </div>
        <div className="col m4 l4">
          <div className="card large">
            <div className="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGAM8IZiKs3BXUdjs2fvjAyGbBvNXjF0N_EFOabDXmWag9ZpNd"
                alt="Portraits"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title">Portraits</span>
              <p>Collection of portrait works. Fashion and lifestyle</p>
            </div>
            <div className="card-action">
              <a
                onClick={() => dispatch(setFilter("portrait"))}
                href="/gallery"
                className="btn-flat right black-text grey lighten-3"
              >
                Portraits
              </a>
            </div>
          </div>
        </div>
        <div className="col m4 l4">
          <div className="card large">
            <div className="card-image">
              <img
                src="https://i2.pickpik.com/photos/48/319/813/versace-perfume-product-bakeh-preview.jpg"
                alt="Product"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title">Product</span>
              <p>
                Product shots ranging from studio, to candid and
                lifestyle/fashion works.
              </p>
            </div>
            <div className="card-action">
              <a
                onClick={() => dispatch(setFilter("product"))}
                href="/gallery"
                className="btn-flat right black-text grey lighten-3"
              >
                Product
              </a>
            </div>
          </div>
        </div>
      </div>

      <About />

      <div className="row" id="shop-row">
        <div className="col s12 m4 l4">
          <div className="card large">
            <div className="card-image">
              <img
                src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Books/Prints"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title">Books/Prints</span>
              <p>
                Shop through my catalog of photobooks on Blurb, or selected
                prints available.
              </p>
            </div>
            <div className="card-action">
              <a
                href="/shop"
                className="btn-flat right black-text grey lighten-3"
              >
                Shop
              </a>
            </div>
          </div>
        </div>

        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
