import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import  { getImages } from '../actions/imageActions';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';

import '../css/Gallery.css';

import Navigation from './Navigation';

/* TODO: Add Carousel on top on Galler pg
*  TODO: Clicking image gives full size image modal */

class Gallery extends Component {
	constructor(props) {
		super(props);
	}

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
						<a href={ image }><img src={ image } key={uuid()} className="photo"/></a>
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
