import React from "react";

import "../css/About.css";

const About = () => {
  return (
    <div className="row">
      <div className="col m12 l12 hide-on-med-and-down">
        <div className="card small red lighten-2 horizontal">
          <div className="card-image">
            <img
              src={require("../images/headshot.jpeg")}
              id="aboutImg"
              alt="About Me"
              className="myImg"
            />
          </div>

          <div className="card-content white-text col m12 l12">
            <span className="card-title">Who Am I</span>
            <p>
              My name is Daniel. I'm a college student studying Computer Science
              at Santa Clara University. I'm also a hobbyist photographer that
              enjoys studying the art of photography. This site is not only a
              tool for expressing my passion for photography, but also a way to
              show my passion for programming and web development.
            </p>
          </div>
        </div>
      </div>
      <div className="col m12 l12 hide-on-large-only">
        <div className="card small red lighten-2">
          <div className="card-image">
            <img
              src={require("../images/headshot.jpeg")}
              id="aboutImg"
              alt="About Me"
              className="myImg"
            />
          </div>

          <div className="card-content white-text col m12 l12">
            <span className="card-title">Who Am I</span>
            <p>
              My name is Daniel. I'm a college student studying Computer Science
              at Santa Clara University. I'm also a hobbyist photographer that
              enjoys studying the art of photography. This site is not only a
              tool for expressing my passion for photography, but also a way to
              show my passion for programming and web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
