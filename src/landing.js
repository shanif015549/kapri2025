import './landing.css';
import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import video from './videos/name.mp4';
// import Tech from './tech';
// import Culture from './culture';
// import ZoomInPage from './zoomin';

function Landing() {
  const videoRef = useRef();
  const videoContainerRef = useRef();

  // GSAP
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(videoRef.current, {
      xPercent: -100, // Adjust this value based on the width of your lengthy video
      ease: 'none',
      scrollTrigger: {
        trigger: videoContainerRef.current,
        scrub: 1,
        end: '+=' + videoContainerRef.current.offsetWidth,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Lenis smooth scroll
  const lenis = new Lenis();
  lenis.on('scroll', () => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <div className="bg-[black] w-full overflow-x-hidden">
      <section className="min-h-screen flex justify-center items-center">
        <h1 className="font-bold text-8xl text-white">Scroll down</h1>
      </section>
      <section
        className="min-h-screen flex flex-nowrap items-center px-20"
        ref={videoContainerRef}
        style={{ width: '100vw' }}
      >
        <div className="w-[200vh] shrink-0 rounded-3xl overflow-hidden" ref={videoRef}>
          <video
            src={video} // Replace this with your actual video path
            className="long-video"
            alt="Long video"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </section>
      <section className="w-full min-h-screen"></section>
      {/* <Tech/> */}
      {/* <Culture/> */}
      {/* <ZoomInPage/> */}
    </div>
  );
}

export default Landing;
