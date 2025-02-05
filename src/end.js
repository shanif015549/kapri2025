import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./end.css"; // Import the external CSS file

const SocialBox = () => {
  return (
    <div className="social-box">
      {/* Instagram Button */}
      <button className="instagram-btn">
        <FaInstagram /> Instagram
      </button>
      
      {/* College Logo Button */}
      <button className="college-logo-btn">College Logo</button>
      
      {/* Contact Number */}
      <div className="contact-text">Contact: +123 456 7890</div>
      
      {/* Event Logo Button */}
      <button className="event-logo-btn">Event Logo</button>
    </div>
  );
};

export default SocialBox;
