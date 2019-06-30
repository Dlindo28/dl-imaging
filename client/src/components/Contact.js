import React, { Component } from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button
} from 'reactstrap';
import '../css/Contact.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: this.props.isOpen
		};
	}

	handleModalToggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};

	render() {
		return (
			<div className="Contact">
				<Button onClick={this.handleModalToggle}>Contact</Button>
				<Modal isOpen={this.state.isOpen} toggle={this.handleModalToggle}>
					<ModalHeader>Contact Me</ModalHeader>
					<ModalBody>
						Email: <a href="mailto:dilindo28@gmail.com" className="contactLink" target="_blank" rel="noopener noreferrer">dilindo28@gmail.com</a><br />
						Instagram: <a href="https://www.instagram.com/dl.aesthetics/" className="contactLink" target="_blank" rel="noopener noreferrer">dl.aesthetics</a><br />
						Github: <a href="https://github.com/Dlindo28" className="contactLink" target="_blank" rel="noopener noreferrer">/Dlindo28</a><br />
						LinkedIn: <a href="https://www.linkedin.com/in/daniel-lindo-772894142/" className="contactLink" target="_blank" rel="noopener noreferrer">/daniel-lindo-772894142</a><br />
					</ModalBody>
					<ModalFooter>
						<Button onClick={this.handleModalToggle}>Close</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

export default Contact;