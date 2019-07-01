/* TODO: Add Carousel reactstrap component for slideshow on homepage
*  TODO: Use Masonry library for Gallery slideshow
*  TODO: Implement fields for emailing me, convert other social links to icons in the modal, change email to a button that links to ContactPg
*  TODO: Connect Redux to Home Page to get images for slideshow */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import  { getImages } from './actions/imageActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Gallery from './components/Gallery';
import About from './components/About';
import ImagePage from './components/ImagePage';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/gallery" component={Gallery}/>
						<Route path="/about" component={About}/>
						<Route exact path="/image/:id" render={(props) => <ImagePage {...props}/>} />
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

export default App;
