import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/ContactDisplayCard.css";
import { setSelectedContact } from "../../redux/slices/contactSlice";

const ContactDisplayCard = () => {
  const dispatch = useDispatch();
  const selectedContact = useSelector(
    (state) => state.contacts.selectedContact
  );

  if (!selectedContact) {
    return null;
  }

  return (
    <div className="contact-card">
      <div className="contact-card-header">
        <div className="contact-card-header-left">
          <button
            className="back-button"
            onClick={() => {
              dispatch(setSelectedContact(null));
            }}
          >
            Back
          </button>
        </div>
        <div className="contact-card-header-right">
          <div className="share-button">
            <img
              src="/images/share-icon-black.png"
              alt="share-icon"
              height="20px"
            />
          </div>
          <div className="edit-button">
            <img src="/images/edit-icon.png" alt="edit-icon" />
          </div>
        </div>
      </div>
      <div className="contact-card-profile">
        <img
          src="/images/avatar.png"
          alt="avatar"
          height="100px"
          width="100px"
        />
        <h2>{selectedContact.name}</h2>
      </div>
      <div className="contact-card-body">
        <div className="contact-card-body-left">
          <div className="contact-details">
            <div className="contact-details-header">
              <h3>Contact Details</h3>
              <img src="/images/edit-icon.png" alt="edit-icon" height="10px" />
            </div>
            <div className="contact-details-body">
              <p>{selectedContact?.emailAddress}</p>
              <p>{selectedContact?.phoneNumber}</p>
            </div>
            <div className="contact-shared-in">
              <div className="contact-shared-in-header">
                <h3>Contact Shared In:</h3>
                <p>Add another contact list</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-card-body-right">
          <div className="contact-comments">
            {/* Add comments or other details here */}
            <div className="contact-comments-header"></div>
            <div className="contact-comments-body">
              <div className="video-section"></div>
              <div className="comments-section"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDisplayCard;
