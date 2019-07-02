import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { getImages } from '../actions/imageActions';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import '../css/Gallery.css';
import GalleryImage from './GalleryImage';
import ContactLinks from './ContactLinks';

/* TODO: Redux State not showing images, seek fix
*  TODO: Add Carousel on top on Gallery pg
*  TODO: Get other Information from images
*  TODO: Clicking image gives full size image modal
*  TODO: Fetch incrementally from API, getImages from mongoDB?
*  TODO: Change images sizing to use bootstrap cols?*/

class Gallery extends Component {
	componentDidMount() {
		document.title = "Gallery | DL Imaging";
		this.props.getImages();
		document.getElementsByClassName("photoClass")[0].style.display = "none";
	}

	handleImagesLoaded = () => {
		document.getElementsByClassName("photoClass")[0].style.display = "block";
	};

	render() {
		const { images } = this.props.image;
    	return (
      		<div className="Gallery">
				<h3>Gallery</h3>
				<ContactLinks />
				<Masonry className="photoClass" onImagesLoaded={this.handleImagesLoaded}>
					{ images.map(image =>
						<GalleryImage id={ image.id } url={ image.url } key={ image.id }/>
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
