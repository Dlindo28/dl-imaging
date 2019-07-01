/* TODO: Add Carousel reactstrap component for slideshow on homepage
*  TODO: Use Masonry library for Gallery slideshow
*  TODO: Implement fields for emailing me, convert other social links to icons in the modal, change email to a button that links to ContactPg
*  TODO: Connect Redux to Home Page to get images for slideshow */

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import  { getImages } from './actions/imageActions';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Gallery from './components/Gallery';
import About from './components/About';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
            </Router>
      </Provider>
    );
}

const Home = () => (
    <div className="Home">

        <Link to="/gallery" id="enterLink">Enter</Link>
    </div>
);

export default App;
