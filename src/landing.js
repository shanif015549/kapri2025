// import logo from './logo.svg';
// import './landing.css';
import Lenis from '@studio-freight/lenis';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import video from './videos/name.mp4';
import backgroundVideoDesktop from './videos/lap_bg.mp4'; // Desktop video
import backgroundVideoMobile from './videos/mob_bg.mp4'; // Mobile video

function App() {
  const videoRef = useRef();
  const videoContainerRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // State to track mobile/desktop

  // gsap
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(videoRef.current, {
      xPercent: -100, // Adjust this value based on the video's width and container
      ease: 'none',
      scrollTrigger: {
        trigger: videoContainerRef.current,
        scrub: 1,
        end: '+=' + videoContainerRef.current.offsetWidth,
        pin: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // lenis
  const lenis = new Lenis();
  lenis.on('scroll', () => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Handle window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for mobile
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="bg-[black] w-full overflow-x-hidden">
      <section className='min-h-screen flex justify-center items-center relative'>
        {/* Background video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          key={isMobile ? 'mobile' : 'desktop'} // Force re-render on change
        >
          <source 
            src={isMobile ? backgroundVideoMobile : backgroundVideoDesktop} 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Content */}
        {/* <h1 className='font-bold text-8xl text-white relative z-10'>Scroll down</h1> */}
      </section>
      <section 
  className='min-h-screen flex flex-nowrap items-center px-20' 
  ref={videoContainerRef} 
  style={{ width: isMobile ? '150vw' : '200vw' }} // Responsive width
>
  <div 
    className={`shrink-0 rounded-3xl overflow-hidden flex justify-center items-center 
      ${isMobile ? 'w-[400vw] h-[70vh]' : 'w-[150vw] h-[90vh]'}`} // Responsive size
    ref={videoRef}
  >
    <video className='w-full h-full object-cover' autoPlay loop muted playsInline>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>


      <section className='w-full min-h-screen'></section>
    </main>
  );
}

export default App;