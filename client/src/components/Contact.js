import React, { Component } from 'react';
import Navigation from './Navigation';
import uuid from 'uuid';

import '../css/Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            name: " ",
            email: " ",
            message: " "
        };
    };

    handleSubmit = (event) => {
    	console.log(this.state);
    	event.preventDefault();
    };

  	handleChange = (event) => {
    	let name = event.target.name;
    	let value = event.target.value;

    	this.setState({
      		[name]: value
    	});

  	};

  	render() {
    	return (
      		<div className="Contact">
        		<Navigation/>

        		<h1>Contact</h1>
        		<form id="contactField" onSubmit={this.handleSubmit.bind(this)}>
          		<div id="outerGrid">
					<label id="item1">Name <br/>
                		<input type="text" name="name" onChange={this.handleChange.bind(this)} required/>
              		</label>

              		<label id="item2">Email <br/>
                		<input type="text" name="email" onChange={this.handleChange.bind(this)} required/>
              		</label>

            		<label id="item3">Message <br/>
                		<input type="text" name="message" onChange={this.handleChange.bind(this)} required/>
                		<input type="submit" />
            		</label>

          		</div>
        		</form>
      		</div>
    	)
  	};
};

export default Contact;
