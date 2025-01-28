import React from 'react';
import PropTypes from 'prop-types';

const ContactDisplayCard = ({ contact, setSelectedContact }) => {
    return (
        <div className="contact-card">
            <button className="back-button" onClick={() => {setSelectedContact("No-Contact")}}>Back</button>
            <h2>name</h2>
            <p>Email "email"</p>
            <p>Phone: </p>
        </div>
    );
};

ContactDisplayCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default ContactDisplayCard;