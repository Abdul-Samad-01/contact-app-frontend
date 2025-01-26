import React from "react";
import "../../css/Contact.css"; // Adjust the path as needed

const Contact = ({ name, labelName }) => {
  return (
    <div className="contact">
      <div className="contact-left">
        <input type="checkbox" className="contact-checkbox" />
        <span className="contact-name">{name}</span>
      </div>
      <div className="contact-right">
        <span className="contact-label">{labelName}</span>
      </div>
    </div>
  );
};

export default Contact;
