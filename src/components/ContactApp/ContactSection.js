import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Contact from "./Contact";
import apiService from "../../service/ApiService";
import ContactDisplayCard from "./ContactDisplayCard";
import "../../css/ContactSection.css";

const ContactSection = ({ selectedLabel }) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState("No-Contact");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        let data = await apiService.getContacts();
        data = data;
        console.log(data);
        setContacts(data);
      } catch (error) {
        console.error("Error fetching Contact:", error);
      }
    };
    if (selectedLabel) {
      fetchContacts();
    }
  }, [selectedLabel]);
  return (
    <div className="contact-details-section">
      {selectedContact === "No-Contact" ? (
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
                setSelectedContact={setSelectedContact}
                selectedContact={selectedContact}
              />
            ))}
          </div>
        </>
      ) : (
        <ContactDisplayCard contact={selectedContact} setSelectedContact={setSelectedContact} />
      )}
    </div>
  );
};

export default ContactSection;
