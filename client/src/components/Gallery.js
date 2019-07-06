/* TODO: Redux State not showing images, seek fix
*  TODO: Add Carousel on top on Gallery pg
*  TODO: Clicking image gives full size image modal
*  TODO: Fetch incrementally from API, getImages from mongoDB?*/


import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: null,
			renderedImages: this.props.image.images,
			dropdownOpen: false
		};
	}
	componentDidMount() {
		document.title = "Gallery | DL Imaging";
		document.getElementsByClassName("Gallery")[0].style.display = "none";
		console.log("mounted");
		this.filterImages();
	}

	handleImagesLoaded = () => {
		document.getElementsByClassName("Gallery")[0].style.display = "block";
	};

	filterImages = () => {
		if (this.state.filter) {
			this.setState({
				renderedImages: this.props.image.images.filter(image => image.tags.indexOf(this.state.filter) !== -1)
			});
		} else {
			this.setState({
				renderedImages: this.props.image.images
			});
		}
	};

	dropdownToggle = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		})
	};

	toggleFilter = (filter) => {
		this.setState({
			filter: filter
		}, function() {
			this.filterImages();
		});
	};

	render() {
    	return (
      		<div className="Gallery">

				<h3>Gallery</h3>

				<div className="options-links">
					<ContactLinks />
				</div>

				<Dropdown className="filterDropdown" isOpen={ this.state.dropdownOpen } toggle={ this.dropdownToggle }>
					<DropdownToggle caret>
						Filter
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem onClick={ () => this.toggleFilter(null) }>None</DropdownItem>
						<DropdownItem divider />
						<DropdownItem onClick={ () => this.toggleFilter("portrait") }>Portrait</DropdownItem>
						<DropdownItem onClick={ () => this.toggleFilter("landscape") }>Landscape</DropdownItem>
						<DropdownItem onClick={ () => this.toggleFilter("cityscape") }>Cityscape</DropdownItem>
						<DropdownItem onClick={ () => this.toggleFilter("street") }>Street</DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<Masonry className="photoClass" onImagesLoaded={ this.handleImagesLoaded }>
					{ this.state.renderedImages.map(image =>
						<GalleryImage image={ image } key={ image.id }/>
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
