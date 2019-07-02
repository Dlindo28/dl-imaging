import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GalleryImage extends Component {
	render() {
		return (
			<Link to={ "/image/" + this.props.id } key={ this.props.url }>
				<img src={ this.props.url } className="photo" alt="" width="250px" />
			</Link>
		)

	}
}

export default GalleryImage;