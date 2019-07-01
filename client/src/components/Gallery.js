import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { getImages } from '../actions/imageActions';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';

import '../css/Gallery.css';

import Navigation from './Navigation';

/* TODO: Redux State not showing images, seek fix
*  TODO: Add Carousel on top on Gallery pg
*  TODO: Get other Information from images
*  TODO: Clicking image gives full size image modal
*  TODO: Fetch incrementally from API, getImages from mongoDB?
*  TODO: Change images sizing to use bootstrap cols?*/

class Gallery extends Component {
	componentDidMount() {
		document.title = "Gallery | DL Imaging";
		document.getElementsByClassName("photoClass")[0].style.display = "none";
	}

	handleImagesLoaded = () => {
		document.getElementsByClassName("photoClass")[0].style.display = "block";
	};

	render() {
		const { images } = this.props.image;
    	return (
      		<div className="Gallery">
        		<Navigation/>
				<h3>Gallery</h3>
				<Masonry className="photoClass" onImagesLoaded={this.handleImagesLoaded}>
					{ images.map(image =>
						<Link to={ "/image/" + image.id } key={ image.url }>
							<img src={ image.url } className="photo" alt="" width="250px" />
						</Link>
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
	image: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Gallery);
