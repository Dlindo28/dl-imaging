import React from "react";
import Navigation from "./Navigation";
//import '../css/Heading.css';

const Heading = () => {
  return (
    <div className="heading">
      <div className="row">
        <div className="col m12 l12 hide-on-small-only">
          <h3>HEADING</h3>
        </div>
        <Navigation page="home" />
      </div>
    </div>
  );
};

export default Heading;
