import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { getImages } from '../actions/imageActions';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

class ImagePage extends Component {
	componentDidMount() {
		console.log(this.props);
	}

	render() {
		const id = this.props.match.params.id;
		return (
			<div className="ImagePage">
				<Navigation />
				{ id }
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