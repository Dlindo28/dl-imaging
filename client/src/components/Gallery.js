/* TODO: Make images bigger a bit
*  TODO: Clicking image gives full size image modal (or page)
*  TODO: Fetch incrementally from API, getImages from mongoDB?*/


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';
import '../css/Gallery.css';
import Navigation from './Navigation';
import GalleryImage from './GalleryImage';
import M from 'materialize-css';

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			renderedImages: this.props.image.images,
			dropdownOpen: false,
			filter: this.props.filter
		};

		this.handleImagesLoaded = this.handleImagesLoaded.bind(this);
		this.filterImages = this.filterImages.bind(this);
		this.toggleFilter = this.toggleFilter.bind(this);
	}

	componentDidMount() {
		document.title = "Gallery | DL Imaging";
		document.getElementsByClassName("GalleryContainer")[0].style.display = "none";
		this.filterImages();

		let filterElems = document.querySelectorAll('.dropdown-trigger');
		M.Dropdown.init(filterElems, {
			inDuration: 300,
			outDuration: 225,
			hover: true,
			coverTrigger: false
			});
	}

	handleImagesLoaded() {
		document.getElementsByClassName("GalleryContainer")[0].style.display = "block";
	};

	filterImages() {
		if (this.state.filter) {
			this.setState({
				renderedImages: this.props.image.images.filter(image => image.tags.indexOf(this.state.filter) !== -1)
			});
		} else {
			this.setState({
				renderedImages: this.props.image.images
			});
		}
	}

	toggleFilter(e) {
		console.log(e.target.name);
		this.setState({
			filter: e.target.name
		}, function() {
			this.filterImages();
		});
	};

	render() {
    	return (
      		<div className="Gallery">

				<Navigation/>

				<div className="GalleryContainer">
					<h2 className="center">Gallery</h2>

					<div className="filter center">
						<ul id="filterDropdown" className="dropdown-content">
							<li className="white-text"><a onClick={ this.toggleFilter } name={ null }>None</a></li>
							<li className="divider"></li>
							<li className="white-text"><a onClick={ this.toggleFilter } name="street">Street</a></li>
							<li className="white-text"><a onClick={ this.toggleFilter } name="portrait">Portrait</a></li>
							<li className="white-text"><a onClick={ this.toggleFilter } name="product">Product</a></li>
						</ul>
						<a className="btn dropdown-trigger" data-target="filterDropdown">Filter</a>
					</div>

					<Masonry className="photoClass" onImagesLoaded={ this.handleImagesLoaded }  options={{
							horizontalOrder: false,
							stagger: 70,
							fitWidth: true
						}}>
						{ this.state.renderedImages.map(image =>
							<GalleryImage image={ image } key={ image.id }/>
						)}
					</Masonry>

				</div>

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
