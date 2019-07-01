import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { getImages } from '../actions/imageActions';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

class ImagePage extends Component {
	constructor(props) {
		super(props);
		this.id = this.props.match.params.id;
		this.image = this.props.image.images.filter(image => image.id === this.id)[0];
	}

	componentDidMount() {
		console.log(this.props);
		console.log(this.image);
	}

	render() {
		return (
			<div className="ImagePage">
				<Navigation />
				{ this.id }
				<img src={ this.image.url } alt="" />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		image: state.image
	}
};

ImagePage.propTypes = {
	getImages: PropTypes.func.isRequired,
	image: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getImages })(ImagePage);