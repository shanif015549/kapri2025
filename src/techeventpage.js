import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './techeventpage.css';
import img1 from './images/tech/vr.jpg';
import img2 from './images/tech/lathe.jpg';
import img3 from './images/tech/bug.jpg';
import img4 from './images/tech/cadd.jpg';
import img5 from './images/tech/coding.jpg';

const TechEventPage = () => {
  const images = [
    {
      src: img1,
      description: (
        <>
          🚀 <strong>Virtual Reality Experience 🚀</strong>
          <p>
            The Department of Computer Science and Engineering proudly presents
            an immersive VR adventure! Dive into cutting-edge virtual realms and
            interactive installations where the only limit is your imagination.
          </p>
          <p>
            🌐 Explore mesmerizing VR worlds and futuristic simulations. No
            strict rules, just pure innovation and endless discovery! 🌐
          </p>
          <p>
            🗓 Date: 13th February 2025
            <br />
            ⏰ Time: 10:00 AM - 4:00 PM
            <br />
            💳 Registration Fee: ₹50
          </p>
          <p><strong>Steps to Register:</strong></p>
          <ul>
            <li>Complete a ₹50 payment to the UPI ID provided on the first page of the form.</li>
            <li>Save a screenshot of the payment.</li>
            <li>In the form, select Dept of CS Technical Events.</li>
            <li>Choose VR Experience.</li>
            <li>Fill out the form with your details and upload the payment screenshot.</li>
            <li>Join our WhatsApp group.</li>
          </ul>
          <p><strong>Experience Highlights:</strong></p>
          <ul>
            <li>Enjoy guided sessions from VR experts as you navigate through diverse virtual environments.</li>
            <li>No prior VR experience needed, just bring your curiosity and get ready to explore!</li>
            <li>For your safety and maximum fun, please follow on-site instructions and best practices.</li>
          </ul>
          <p>
            Embark on an unforgettable journey beyond reality, your next adventure awaits! 🚀
          </p>
        </>
      ),
    },
    { src: img2, description: 'Description for Image 2' },
    { src: img3, description: 'Description for Image 3' },
    { src: img4, description: 'Description for Image 4' },
    { src: img5, description: 'Description for Image 5' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <h1 className="heading">Tech Events</h1>
      <div className="image-list">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <Link to={`/event/${index}`}>
              <img src={image.src} alt={`Img ${index + 1}`} className="image" />
            </Link>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechEventPage;
