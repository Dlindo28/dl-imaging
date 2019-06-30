import React, { Component } from 'react';
import Navigation from './Navigation';

class About extends Component {
	componentDidMount() {
		document.title = "About | DL Imaging"
	}

  	render() {
    	return (
      		<div>
        		<Navigation/>
        		About
      		</div>
		)
  	}
}

export default About;
