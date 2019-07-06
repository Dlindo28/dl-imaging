/* TODO: Add loading page for when images aren't loaded/need to refresh
*  TODO: Add Carousel reactstrap component for slideshow on homepage
*  TODO: Pass more image info (orientation, etc.) in redux to better filter them
*  TODO: Implement fields for emailing me, add ContactPg
*  TODO: Connect Redux to Home Page to get images for slideshow */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Gallery from './components/Gallery';
import About from './components/About';
import PropTypes from "prop-types";
import {getImages} from "./actions/imageActions";

class App extends Component {
	componentDidMount() {
		this.props.getImages();
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/gallery" component={Gallery}/>
						<Route path="/about" component={About}/>
					</Switch>
				</div>
			</Router>
		);
	}

}

const Home = () => (
    <div className="Home">

        <Link to="/gallery" id="enterLink">Enter</Link>
    </div>
);

const mapStateToProps = (state) => {
	return {
		image: state.image
	}
};

App.propTypes = {
	getImages: PropTypes.func.isRequired,
	image: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getImages })(App);
