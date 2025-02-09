import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import './App.css';

function ZoomInPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Set up event listener to handle screen resizing
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const { innerHeight } = window;

    // Set scaling based on screen width
    const scaleValue = screenWidth <= 768 ? 3 : 4; // Mobile (<=768px) scale to 2, else scale to 4

    gsap.to("#zoom-in h2", {
      scale: scaleValue,
      stagger: 0.25,
      duration: 3,
      scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3,
      },
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]); // Re-run effect when screenWidth changes

  return (
    <div className="ZoomInPage">
      <section id="zoom-in" className="h-screen flex justify-center items-center bg-black">
        <h2 className="text-white text-8xl font-bold">Join Now</h2>
      </section>
    </div>
  );
}

export default ZoomInPage;
