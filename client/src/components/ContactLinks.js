import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/ContactLinks.css';

class ContactLinks extends Component {
	render() {
		return (
			<div className="ContactLinks">
				<ul>
					<li>
						<a href="mailto:dilindo28@gmail.com" className="contactItem" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={ faEnvelope } />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/dl.aesthetics/" className="contactItem" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={ faInstagram } />
						</a>
					</li>
					<li>
						<a href="https://github.com/Dlindo28" className="contactItem" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={ faGithub } />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/daniel-lindo-772894142/" className="contactItem" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={ faLinkedin } />
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default ContactLinks;