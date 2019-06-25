import React, { Component } from 'react';
import {
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	NavbarBrand,
	Collapse,
} from 'reactstrap';
import Contact from './Contact.js';
import '../css/Navigation.css';

class Navigation extends Component {
	constructor(props) {
		super(props);
    	this.state = {
    		toggleIsOpen: false,
    	}
  	}

  	handleNavToggle = () => {
		this.setState({
			toggleIsOpen: !this.state.toggleIsOpen
		})
	};

    render() {
        return (
        	<div className="Navbar">
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/" className="mr-auto">DL Imaging</NavbarBrand>
					<NavbarToggler onClick={this.handleNavToggle}/>
					<Collapse isOpen={this.state.toggleIsOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/gallery">Gallery</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/about">About</NavLink>
							</NavItem>
							<NavItem>
								<Contact/>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>

        	</div>
    	);
  	}
}

export default Navigation;
