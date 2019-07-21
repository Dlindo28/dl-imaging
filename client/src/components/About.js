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
						Hey! I'm Daniel Lindo, a Computer Science student at Santa Clara University and a photographer by hobby.
						Prints are not available as of yet, but will be soon.
					</p>
				</div>

      		</div>
		)
  	}
}

export default About;
