import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Fade } from 'react-slideshow-image';

import '../css/Slideshow.css';

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: false
}

class Slideshow extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: this.props.image.images,
      currentImageIndex: 0,
    }


    this.changeImage = this.changeImage.bind(this);
  }

  changeImage = () => {
    let newIndex = this.state.currentImageIndex + 1;
    if (newIndex < this.state.images.length) {
      this.setState({
        currentImageIndex: newIndex,
      });
    } else {
      console.log("Set to Zero.");
      this.setState({
        currentImageIndex: 0,
      });
    }


    setTimeout(this.changeImage, 5000);
  }

  toggleFade = () => {
    this.setState({
      fadeIn: !this.state.fadeIn
    })
  }

  componentDidMount() {
    this.changeImage();
  }

  render() {
    return (
      <div className="Slideshow">

        <Fade {...fadeProperties} className="fadeContainer">
          { this.state.images.map(image => (
            <img src={ image.url } style={{
              maxWidth: "90%",
              maxHeight: "90%",
              margin: "0 auto",
              display: "block",
              overflow: "hidden",
              position: "relative",
              top: "9%"
            }}/>
          ))}
        </Fade>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		image: state.image
	}
};

Slideshow.propTypes = {
	image: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Slideshow);
