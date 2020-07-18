import React, { useState } from "react";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: null,
    lastName: null,
    email: null,
    message: null,
  });

  const handleChange = (event) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log(contactInfo);
    event.preventDefault();
  };

  return (
    <div className="col s12 m8 l8">
      <div className="card large">
        <div className="card-content">
          <span className="card-title">Contact Me</span>
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12 m6 l6">
                <input
                  className="validate"
                  id="firstName"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                ></input>
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field col s12 m6 l6">
                <input
                  className="validate"
                  id="lastName"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                ></input>
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  className="validate"
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                ></input>
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  className="materialize-textarea"
                  id="contactText"
                  type="text"
                  name="message"
                  value={contactInfo.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="contactText">Enter your message.</label>
              </div>
            </div>

            <div className="card-action">
              <button
                type="submit"
                className="btn-flat black-text grey lighten-3"
                name="submit"
                value="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
