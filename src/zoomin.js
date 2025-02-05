import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import './zoom.css';

function ZoomInPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const { innerHeight } = window;

    // Zoom-in animation
    gsap.to("#zoom-in h2", {
      scale: 10,
      stagger: 0.25,
      duration: 3,
      scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div>
      {/* Zoom-in Section */}
      <section id="zoom-in" className="h-screen flex justify-center items-center bg-black">
        <h2 className="text-white text-8xl font-bold">Register Now</h2>
      </section>

      {/* Normal Page Section with Black Background */}
      <section className="h-screen flex justify-center items-center bg-black">
      </section>
    </div>
  );
}

export default ZoomInPage;