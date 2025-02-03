import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import Contact from "./Contact";
import apiService from "../../service/ApiService";
import ContactDisplayCard from "./ContactDisplayCard";
import "../../css/ContactSection.css";
import { setContacts, setSelectedContact } from "../../redux/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactSection = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const selectedContact = useSelector((state) => state.contacts.selectedContact);
  const selectedLabel = useSelector((state) => state.labels.selectedLabels);


  useEffect(() => {
    const fetchContacts = async () => {
      try {
        let data = await apiService.getContacts();
        data = data;
        console.log(data);
        dispatch(setContacts(data));
      } catch (error) {
        console.error("Error fetching Contact:", error);
      }
    };
    if (selectedLabel) {
      fetchContacts();
    }
  }, [selectedLabel, dispatch]);

  const handleContactClick = (contact) => {
    dispatch(setSelectedContact(contact));
  };

  return (
    <div className="contact-details-section">
      {selectedContact === null ? (
        <>
          <div className="search-section">
            <SearchBar onSearch={() => {}} />
          </div>
          <div className="filter-section">
            <p>Filter</p>
          </div>
          <div className="label-info">
            <p>{selectedLabel == null ? "Temp" : selectedLabel.name}</p>
          </div>
          <div className="contacts">
            {contacts.map((contact) => (
              <Contact
                contact={contact}
                labelName={selectedLabel.name}
                setSelectedContact={handleContactClick}
                selectedContact={selectedContact}
              />
            ))}
          </div>
        </>
      ) : (
        <ContactDisplayCard contact={selectedContact} setSelectedContact={handleContactClick} />
      )}
    </div>
  );
};

export default ContactSection;
