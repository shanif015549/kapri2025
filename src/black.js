import React from "react";
import { useNavigate } from "react-router-dom"; // for React Router navigation
import "./black.css";
import image1 from './images/pic1.png';
import image2 from './images/pic2.png';
import image3 from './images/pic3.png';
import headingImage from './images/head.png'; // Ensure the correct path

function Black() {
  const navigate = useNavigate();

  // Handler function for image clicks
  const handleImageClick = (imageName) => {
    if (imageName === 'Tech Events') {
      // Navigate to Tech Event Page (using React Router)
      navigate('/techevent');
    } else {
      // Alternatively, scroll to a specific section in the page
      if (imageName === 'Cultural Events') {
        document.getElementById('culture-section').scrollIntoView({ behavior: 'smooth' });
      } else if (imageName === 'Others') {
        document.getElementById('other-section').scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="black-screen">
      {/* Heading Image - Positioned at the Top Left */}
      <div className="heading-container">
        <img src={headingImage} alt="Heading" className="heading-image" />
      </div>

      {/* Images Arranged Vertically */}
      <div className="image-container">
        <div className="image-wrapper" onClick={() => handleImageClick('Tech Events')}>
          <img src={image1} alt="Tech Events" className="touchable-image" />
          <p className="image-text">Tech Events</p>
        </div>

        <div className="image-wrapper" onClick={() => handleImageClick('Cultural Events')}>
          <img src={image2} alt="Cultural Events" className="touchable-image" />
          <p className="image-text">Cultural Events</p>
        </div>

        <div className="image-wrapper" onClick={() => handleImageClick('Others')}>
          <img src={image3} alt="Others" className="touchable-image" />
          <p className="image-text">Others</p>
        </div>
      </div>
    </div>
  );
}

export default Black;
