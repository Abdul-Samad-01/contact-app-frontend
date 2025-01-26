import React, { useEffect, useState } from 'react';
import "../../css/MainSection.css";
import LabelSection from "./LabelSection";
import ContactSection from './ContactSection';

const MainSection = () => {
  const [selectedLabel, setSelectedLabel] = useState(null);
  return (
    <div className="main-section">
      {/* Label Section */}
      <LabelSection selectedLabel={selectedLabel} setSelectedLabel={setSelectedLabel} />
      {/* Contact Details Section */}
      <ContactSection selectedLabel={selectedLabel}/>
    </div>
  );
};

export default MainSection;
