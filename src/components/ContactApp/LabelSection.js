import React, { useEffect, useState } from "react";
import Label from "./Label";
import Sharing from "./Sharing";
import apiService from "../../service/ApiService";
import "../../css/LabelSection.css";

const LabelSection = ({ selectedLabel, setSelectedLabel }) => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const fetchLabels = async () => {
      try {
        let data = await apiService.getLabels();
        data = data;
        console.log(data);
        setLabels(data);
      } catch (error) {
        console.error("Error fetching labels:", error);
      }
    };
    fetchLabels();
  }, []);

  const handleLabelClick = (label) => {
    setSelectedLabel(label);
  };

  return (
    <div className="label-section">
      <div className="my-contact-label">
        <div className="my-contact">
          <div className="name">
            <img
              src="/images/pngwing.com.png"
              alt="google-logo"
              height="20px"
            />
            <p>My Contact</p>
          </div>
          <Sharing />
        </div>
      </div>
      <div className="search-filter">
        <p>search and filter</p>
      </div>
      <ul className="label-list">
        {labels.map((label, index) => (
          <li
          key={index}
          className={selectedLabel === label ? "selected" : ""}
          onClick={() => handleLabelClick(label)}
        >
            <Label text={label.name} count={label.memberCount} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabelSection;
