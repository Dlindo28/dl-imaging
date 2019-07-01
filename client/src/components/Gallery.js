import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import  { getImages } from '../actions/imageActions';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';

import '../css/Gallery.css';

import Navigation from './Navigation';

/* TODO: Add Carousel on top on Galler pg
*  TODO: Get other Information from images
*  TODO: Clicking image gives full size image modal
*  TODO: Fetch incrementally from API, getImages from mongoDB?
*  TODO: Change images sizing to use bootstrap cols?*/

class Gallery extends Component {
	componentDidMount() {
		document.title = "Gallery | DL Imaging";
		this.props.getImages();
	}

	render() {
		const { images } = this.props.image;
    	return (
      		<div className="Gallery">
        		<Navigation/>
				<h3>Gallery</h3>
				<Masonry className="photoClass">
					{ images.map(image =>
						<a href="#"><img src={ image } key={uuid()} className="photo" alt=""/></a>
					)}
				</Masonry>
      		</div>
    	)
  	}
}

const mapStateToProps = (state) => {
	return {
		image: state.image
	}
};

Gallery.propTypes = {
	getImages: PropTypes.func.isRequired,
	image: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getImages })(Gallery);
