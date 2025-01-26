import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Contact from "./Contact";
import apiService from "../../service/ApiService";
import "../../css/ContactSection.css";

const ContactSection = ({ selectedLabel }) => {
  const [contacts, setContacts] = useState([]);

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
          <Contact name={contact.names[0].displayName} labelName={selectedLabel.name} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
