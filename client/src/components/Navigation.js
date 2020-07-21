import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import M from "materialize-css";

import "../css/Navigation.css";

import { setFilter } from "../actions/filterActions";

const Navigation = () => {
  const active = useSelector((store) => store.page.activePage);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(active);

    let elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {
      inDuration: 300,
      outDuration: 225,
      hover: true,
      coverTrigger: false,
    });
  }, [active]);

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
            <li className={active === "Home" ? "active navItem" : "navItem"}>
              <a href="/" className="white-text">
                Home
              </a>
            </li>
            <li className={active === "Gallery" ? "active navItem" : "navItem"}>
              <a
                onClick={() => dispatch(setFilter(null))}
                href="/gallery"
                className="white-text"
              >
                Gallery
              </a>
            </li>
            <li className={active === "Shop" ? "active navItem" : "navItem"}>
              <a
                className="dropdown-trigger white-text"
                data-target="shopDropdown"
              >
                Shop<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
          <a className="brand-logo right scriptFont" href="/">
            DL Imaging
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
