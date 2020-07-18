import React from "react";

import "../css/About.css";

const About = () => {
  return (
    <div className="row">
      <div className="col m12 l12">
        <div className="card small red lighten-2 horizontal">
          <div className="card-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGAM8IZiKs3BXUdjs2fvjAyGbBvNXjF0N_EFOabDXmWag9ZpNd"
              id="aboutImg"
              alt="About Me"
            />
          </div>

          <div className="card-content white-text">
            <span className="card-title">Who Am I</span>
            <p>
              My name is Daniel Lindo. I'm also a photographer based in Santa
              Clara, CA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
