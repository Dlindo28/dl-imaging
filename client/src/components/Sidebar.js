import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }


  handleToggle = () => {
    let sidebar = document.getElementsByClassName("Sidebar")[0];
    let button = document.getElementsByClassName("closeBtn")[0];
    if (this.state.isOpen) {
      sidebar.style.width = "0";
      button.style.marginLeft = "0";
    } else {
      sidebar.style.width = "250px";
      button.style.marginLeft = "250px";
    }
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="Sidebar">
          <nav id="navBar">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/about">
                <li to="/about">About</li>
              </Link>
            </ul>
          </nav>
        </div>
        <p onClick={() => this.handleToggle()} className="closeBtn">X</p>
      </React.Fragment>
    );
  }
}

export default Sidebar;
