import React, { Component } from 'react';

class GalleryImage extends Component {
	render() {
		return (
			<a href={ this.props.image.flickrUrl } rel="noopener noreferrer" target="_blank">
				<img src={ this.props.image.url } className="photo" alt="" width="250px" onClick={ this.props.onClick }/>
			</a>
		)

	}
}

export default GalleryImage;