import React, { Component } from 'react';
import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	NavbarBrand,
} from 'reactstrap';

import ContactLinks from './ContactLinks.js';
import '../css/Navigation.css';

class Navigation extends Component {
	render() {
        return (
        	<div className="Navbar">

				<Navbar color="dark" dark expand="md">

					<NavbarBrand href="/" className="mr-auto">
						<img className="logo" src={ require("../images/logoLight.png") } alt=""/>
					</NavbarBrand>

					<Nav className="ml-auto" style={{
						display: "flex",
						alignItems: "center"
					}} navbar>
						<NavItem>
							<NavLink href="/gallery" style={{color: "#f9f9f9"}} >Gallery</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/about" style={{color: "#f9f9f9"}} >About</NavLink>
						</NavItem>
						<NavItem>
							<ContactLinks/>
						</NavItem>
					</Nav>

				</Navbar>

        	</div>
    	);
  	}
}

export default Navigation;
