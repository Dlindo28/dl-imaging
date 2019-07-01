import React, { Component } from 'react';
import Navigation from './Navigation';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class About extends Component {
	componentDidMount() {
		document.title = "About | DL Imaging";
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

const mapStateToProps = (state) => {
	return {
		image: state.image
	}
};

About.propTypes = {
	image: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(About);
