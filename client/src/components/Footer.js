import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            <nav>
              <div className="nav-wrapper container">
                <span>© 2020 Copyright</span>
                <ul className="right">
                  <li>
                    <a href="mailto:dlimaging.photo@gmail.com">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/dl.imaging/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/daniel-lindo-772894142/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Dlindo28">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
