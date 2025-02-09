import React from "react";
import "./end.css"; // Import the external CSS file
import image from "./images/kmealogo.png";
const EndingBox = () => {
  return (
    <div className="ending-box">
      <h2 className="ending-box-heading">Contact Us</h2>
      <div className="image-containerlo">
        <img
          src={image} // Replace with your image URL
          alt="Contact"
          className="ending-box-image"
        />
      </div>
    </div>
  );
};

export default EndingBox;
