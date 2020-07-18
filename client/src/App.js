import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import M from "materialize-css";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import PropTypes from "prop-types";
import { getImages } from "./actions/imageActions";

// TODO: Change Horizontal Cards to Vertical on Small Screens -> maybe use .hide-on-desktop class
// TODO: For Home Cards, swap single image to Slideshows

class App extends Component {
  componentDidMount() {
    document.title = "DL Imaging";
    //this.props.getImages();
    //checks for new images
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={Home} />
            <Route
              exact
              path="/gallery"
              render={(props) => <Gallery {...props} filter={null} />}
            />
            <Route
              exact
              path="/gallery/street"
              render={(props) => <Gallery {...props} filter={"street"} />}
            />
            <Route
              exact
              path="/gallery/portrait"
              render={(props) => <Gallery {...props} filter={"portrait"} />}
            />
            <Route
              exact
              path="/gallery/product"
              render={(props) => <Gallery {...props} filter={"product"} />}
            />
            <Route exact path="/shop" render={() => <Shop />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div className="Home grey lighten-3">
    <Navigation page="home" />

    <div className="row container">
      <img src={require("./images/logoDark.png")} id="homeLogo" alt="" />
    </div>

    <div className="row">
      <div className="col m4 l4">
        <div className="card large">
          <div className="card-image">
            <img src="https://live.staticflickr.com/4565/38937430371_f237316ee4_b.jpg"></img>
          </div>
          <div className="card-content">
            <span className="card-title">Street</span>
            <p>
              Check out my collection of day-to-day life and street photography
            </p>
          </div>
          <div className="card-action">
            <a
              href="/gallery/street"
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGAM8IZiKs3BXUdjs2fvjAyGbBvNXjF0N_EFOabDXmWag9ZpNd"></img>
          </div>
          <div className="card-content">
            <span className="card-title">Portraits</span>
            <p>Collection of portrait works. Fashion and lifestyle</p>
          </div>
          <div className="card-action">
            <a
              href="/gallery/portrait"
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
            <img src="https://i2.pickpik.com/photos/48/319/813/versace-perfume-product-bakeh-preview.jpg"></img>
          </div>
          <div className="card-content">
            <span className="card-title">Product</span>
            <p>
              Product shots ranging from studio, to candid and lifestyle/fashion
              works.
            </p>
          </div>
          <div className="card-action">
            <a
              href="/gallery/product"
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
            <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
          </div>
          <div className="card-content">
            <span className="card-title">Books/Prints</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text...
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

const mapStateToProps = (state) => {
  return {
    image: state.image,
  };
};

App.propTypes = {
  getImages: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getImages })(App);
