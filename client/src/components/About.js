import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import '../css/About.css';

class About extends Component {
	componentDidMount() {
		document.title = "About | DL Imaging";
	}

  	render() {
    	return (
      		<div className="About">

				<Navigation/>

				<div className="infoContainer">
					<img src={ require("../images/test1.jpg") } alt="" id="aboutImg" />
					<p id="aboutPara">
						This is my About
					</p>
				</div>

      		</div>
		)
  	}
}

export default About;
