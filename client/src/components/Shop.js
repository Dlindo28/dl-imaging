import React, { Component } from 'react';

import Navigation from './Navigation';


class Shop extends Component {
  componentDidMount() {
    document.title = "Shop | DL Imaging";
  }

  render() {
    return (
      <div className="shop">
        <Navigation />
        <h3 style={{color: "black"}}>Shop is currently down for maintenance.</h3>
      </div>
    )
  }
}

export default Shop;
