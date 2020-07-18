import React, { Component } from "react";
import M from "materialize-css";

import "../css/Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeState: "navItem",
      galleryState: "navItem",
    };
  }

  componentWillMount() {
    let pages = {
      homeState: "home",
      galleryState: "gallery",
    };
    let p;
    for (p in pages) {
      let newState = {};
      newState[p] = "active navItem";
      if (this.props.page === pages[p]) {
        this.setState(newState);
      }
    }
  }

  componentDidMount() {
    let elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {
      inDuration: 300,
      outDuration: 225,
      hover: true,
      coverTrigger: false,
    });
  }

  render() {
    return (
      <div className="navbar">
        <ul id="shopDropdown" className="dropdown-content">
          <li className="white-text">
            <a href="/shop">Prints</a>
          </li>
          <li className="divider"></li>
          <li className="white-text">
            <a
              href="https://www.blurb.com/user/Dlindo28"
              target="_blank"
              rel="noopener noreferrer"
            >
              Books
            </a>
          </li>
        </ul>
        <nav className="red lighten-2">
          <div className="nav-wrapper">
            <ul id="nav-desktop" className="left hide-on-small navList">
              <li className={this.state.homeState}>
                <a href="/" className="white-text">
                  Home
                </a>
              </li>
              <li className={this.state.galleryState}>
                <a href="/gallery" className="white-text">
                  Gallery
                </a>
              </li>
              <li className="navItem">
                <a
                  className="dropdown-trigger white-text"
                  data-target="shopDropdown"
                >
                  Shop<i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
            <a className="brand-logo right scriptFont">DL Imaging</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
