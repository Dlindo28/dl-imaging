import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="Home">

    <Link to="/gallery" id="enterLink">Enter</Link>
  </div>
);

export default App;
