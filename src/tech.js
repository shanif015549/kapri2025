import React, { useEffect } from 'react';
import video from './videos/tech.mp4';
import './App.css'; // Import your CSS file

const App = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      // Prevent the default scroll behavior
      event.preventDefault();

      // Adjust the scroll speed (e.g., reduce it by a factor of 10)
      const scrollSpeed = 0.01;
      window.scrollBy(0, event.deltaY * scrollSpeed);
    };

    // Add the scroll event listener
    window.addEventListener('wheel', handleScroll, { passive: false });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', position: 'relative' }}>
      <div style={{ height: '5vh', backgroundColor: 'black' }}>
        {/* <h1>Scroll Down to Play the Video</h1> */}
      </div>

      <video
        src={video}
        autoPlay
        loop
        muted // Optionally mute the video
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
        }}
      />
    </div>
  );
};

export default App;
