import React, { useState, useEffect } from 'react';
import laptopVideo from './videos/tech11.mp4';
import mobileVideo from './videos/mob-earth.mp4';
import './App.css'; // Import your CSS file

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', position: 'relative' }}>
      <video
        src={isMobile ? mobileVideo : laptopVideo}
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default App;
