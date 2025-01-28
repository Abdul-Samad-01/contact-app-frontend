import React from "react";
import "../../css/Contact.css";

const Contact = ({ contact, labelName, setSelectedContact, selectedContact }) => {

  const contactClassName = `contact ${selectedContact !== null && selectedContact === contact ? "selected" : ""}`;
  return (
    <div className={contactClassName} onClick={() => setSelectedContact(contact)}>
      <div className="contact-left">
        <input type="checkbox" className="contact-checkbox" />
        <span className="contact-name">{contact.names[0].displayName}</span>
      </div>
      <div className="contact-right">
        <span className="contact-label">{labelName}</span>
      </div>
    </div>
  );
};

export default Contact;
