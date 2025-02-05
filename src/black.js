import React from "react";
import "./black.css";
import image1 from './images/pic1.png';
import image2 from './images/pic2.png';
import image3 from './images/pic3.png';
// import image4 from './images/line1.jpg';
// import image5 from './images/line2.jpg'; // New image for the bottom-right corner

function Black() {
  return (
    <div className="black-screen">
      {/* Static Image on Left */}
     
      {/* Column of Touchable Images with Text */}
      <div className="image-container">
        <div className="image-wrapper">
          <img src={image1} alt="Tech Events" className="touchable-image1" />
          <p className="image-text1">Tech Events</p>
        </div>

        <div className="image-wrapper">
          <img src={image2} alt="Cultural Events" className="touchable-image2" />
          <p className="image-text">Cultural Events</p>
        </div>

        <div className="image-wrapper">
          <img src={image3} alt="Others" className="touchable-image3" />
          <p className="image-text">Others</p>
        </div>
      </div>

      {/* Image on Right Bottom */}
     
    </div>
  );
}

export default Black;
