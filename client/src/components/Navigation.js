import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand, Container, Collapse } from 'reactstrap';
import '../css/Navigation.css';

class Navigation extends Component {
	constructor(props) {
		super(props);
    	this.state = {
    		isOpen: false
    	}
  	}

  	handleToggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};

    render() {
        return (
        	<div className="Navbar">
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/" className="mr-auto">DL Imaging</NavbarBrand>
					<NavbarToggler onClick={this.handleToggle}/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/gallery">Gallery</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/contact">Contact</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/about">About</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
        	</div>
    	);
  	}
}

export default Navigation;
