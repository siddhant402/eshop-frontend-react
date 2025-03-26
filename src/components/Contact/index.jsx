import React from "react";
import "./Contact.css"; // Import the CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-lead">We'd love to hear from you!</p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;