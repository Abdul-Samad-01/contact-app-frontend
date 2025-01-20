import React from "react";
import "../css/Label.css";
import Sharing from './Sharing';

const Label = ({ text, count }) => {
  return (
    <>
      <div className="label">
        <div className="label-details">
        <input type="checkbox" />
        <p>{text}({count})</p>
        </div>
        <Sharing/>
      </div>
    </>
  );
};

export default Label;
