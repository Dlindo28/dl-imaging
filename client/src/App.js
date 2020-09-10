import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Home from "./screens/Home";
import Shop from "./screens/Shop";
import Gallery from "./screens/Gallery";

// TODO: Change Horizontal Cards to Vertical on Small Screens -> maybe use .hide-on-desktop class
// TODO: For Home Cards, swap single image to Slideshows

const App = () => {
  useEffect(() => {
    document.title = "DL Imaging";
  });

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
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
};

export default App;
