import React, { useState, useEffect } from "react";
import M from "materialize-css";

import "../css/Navigation.css";

const Navigation = ({ page }) => {
  const [homeState, setHomeState] = useState("navItem");
  const [galleryState, setGalleryState] = useState("navItem");
  const [shopState, setShopState] = useState("navItem");

  useEffect(() => {
    if (page === "home") {
      setHomeState("active navItem");
      setGalleryState("navItem");
      setShopState("navItem");
    } else if (page == "gallery") {
      setHomeState("navItem");
      setGalleryState("active navItem");
      setShopState("navItem");
    } else if (page == "shop") {
      setHomeState("navItem");
      setGalleryState("navItem");
      setShopState("active navItem");
    }
    let elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {
      inDuration: 300,
      outDuration: 225,
      hover: true,
      coverTrigger: false,
    });
  }, [page]);

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
            <li className={homeState}>
              <a href="/" className="white-text">
                Home
              </a>
            </li>
            <li className={galleryState}>
              <a href="/gallery" className="white-text">
                Gallery
              </a>
            </li>
            <li className={shopState}>
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
};

export default Navigation;
