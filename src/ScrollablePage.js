// ScrollablePage.js
import React from "react";
import "./scrollablePage.css"; // Import the CSS file

import Landing from './landing';
import Culture from './culture';
import Tech from './tech';
import ZoomInPage from './zoomin';
import Black from './black';
import Media from './media';
import End from './end';

const ScrollablePage = () => {
  return (
    <div className="scrollable-page">
      {/* Full-Screen Sections */}
      <section id="landing-section">
        <Landing />
      </section>

      <section id="culture-section">
        <Culture />
      </section>

      <section id="tech-section">
        <Tech />
      </section>

      <section id="zoomin-section">
        <ZoomInPage />
      </section>

      <section id="black-section">
        <Black />
      </section>

      <section id="media-section">
        <Media />
      </section>

      <section id="end-section">
        <End />
      </section>

    
    </div>
  );
};

export default ScrollablePage;
