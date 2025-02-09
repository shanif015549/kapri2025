import React from 'react';
import { useParams } from 'react-router-dom';
import img1 from './images/tech/vr.jpg';
import img2 from './images/tech/lathe.jpg';
import img3 from './images/tech/bug.jpg';
import img4 from './images/tech/cadd.jpg';
import img5 from './images/tech/coding.jpg';

const EventDescriptionPage = () => {
  const { id } = useParams();

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
          {/* Google Form Link */}
          <div style={{ textAlign: 'center' }}>
            <a href="https://your-google-form-link.com" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Register Now
              </button>
            </a>
          </div>
        </>
      ),
      googleFormLink: "https://your-google-form-link.com"
    },
    {
      src: img2,
      description: (
        <>
          🌟 <strong>Lathe Astro Programme: The Ultimate Lathe Competition! 🌟</strong>
          <p>
            Are you ready to prove your lathe machining skills? 🏆 Join the Lathe Astro Programme, where precision meets mastery! This is your chance to showcase your expertise, compete with the best, and win exciting rewards.
          </p>
          <p>
            🔧 Competition Details:
            <br />
            📅 Date: 14th February 2025
            <br />
            📍 Venue: Lathe Lab
            <br />
            💰 Cash Prize: ₹1000
            <br />
            💵 Registration Fee: ₹50
          </p>
          <p><strong>Why Participate?</strong></p>
          <ul>
            <li>Hands-on experience with advanced lathe techniques</li>
            <li>Compete with skilled machinists & industry enthusiasts</li>
            <li>A chance to win and gain recognition</li>
          </ul>
          <p><strong>Register Now:</strong></p>
          <div style={{ textAlign: 'center' }}>
            <a href="https://forms.gle/SB2kxDu6iqmWqUF6A" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Register Now
              </button>
            </a>
          </div>
        </>
      ),
      googleFormLink: "https://forms.gle/SB2kxDu6iqmWqUF6A"
    },
    {
      src: img3,
      description: (
        <>
          👩🏻‍💻 <strong>Bug Bounty Challenge</strong> 👩🏻‍💻
          <p>
            “Think Fast, Debug Faster, and Conquer the Code!” The Department of Computer Science & Engineering proudly presents the Bug Bounty Challenge, a thrilling competition to test your problem-solving skills and debugging expertise.
          </p>
          <p>
            🗓 Date: 13th February 2025
            <br />
            ⏰ Time: 10:00 AM - 11:30 AM
            <br />
            📍 Venue: CCF3 Lab
          </p>
          <p><strong>Steps to Register:</strong></p>
          <ul>
            <li>Complete a ₹50 payment to the UPI ID provided on the first page of the form.</li>
            <li>Save a screenshot of the payment.</li>
            <li>In the form, select Dept of CS Technical Events.</li>
            <li>Choose Bug Bounty.</li>
            <li>Fill out the form with your details and upload the payment screenshot.</li>
            <li>Join our WhatsApp group for updates and announcements.</li>
          </ul>
          <p><strong>Prizes:</strong></p>
          <ul>
            <li>🏆 1st Prize: ₹1000</li>
            <li>🥈 2nd Prize: ₹600</li>
          </ul>
          <p><strong>Register Now:</strong></p>
          <div style={{ textAlign: 'center' }}>
            <a href="https://forms.gle/SB2kxDu6iqmWqUF6A" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Register Now
              </button>
            </a>
          </div>
        </>
      ),
      googleFormLink: "https://forms.gle/SB2kxDu6iqmWqUF6A"
    },
    {
      src: img4,
      description: (
        <>
          💻✨ <strong>CADD COMBAT PROGRAMME – The Ultimate CADD Competition! ✨💻</strong>
          <p>
            Are you ready to showcase your CADD skills and battle it out with the best? 🏆 CADD Combat Programme is here to test your precision, speed, and creativity in Computer-Aided Design. Whether you're a beginner or a pro, this is your chance to shine!
          </p>
          <p>
            🔹 Competition Details:
            <br />
            📅 Date: 13th February 2025
            <br />
            📍 Venue: CAD Lab
            <br />
            💰 Cash Prize: ₹1000
            <br />
            💵 Registration Fee: ₹50
          </p>
          <p><strong>Why Participate?</strong></p>
          <ul>
            <li>Challenge yourself with real-world design tasks</li>
            <li>Compete against top CADD enthusiasts</li>
            <li>Gain recognition & boost your portfolio</li>
            <li>Win exciting prizes & certificates</li>
          </ul>
          <p><strong>Register Now:</strong></p>
          <div style={{ textAlign: 'center' }}>
            <a href="https://forms.gle/SB2kxDu6iqmWqUF6A" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Register Now
              </button>
            </a>
          </div>
        </>
      ),
      googleFormLink: "https://forms.gle/SB2kxDu6iqmWqUF6A"
    },
    {
      src: img5,
      description: (
        <>
          <strong>Worst Code 💥</strong>
          <p>
            Code it in a worst way 🤯! The Department of Computer Science and Engineering invites you to the Worst Code competition. Create the most confusing and inefficient code that still works, and challenge your programming skills.
          </p>
          <p>
            🗓 Date: 13th February 2024
            <br />
            ⏰ Time: 10:00 AM - 11:30 AM
          </p>
          <p><strong>Steps to Register:</strong></p>
          <ul>
            <li>Complete a ₹50 payment to the UPI ID provided on the first page of the form.</li>
            <li>Save a screenshot of the payment.</li>
            <li>In the form, select Dept of CS Technical Events.</li>
            <li>Choose Worst Code.</li>
            <li>Fill out the form with your details and upload the payment screenshot.</li>
            <li>Join our WhatsApp group.</li>
          </ul>
          <p><strong>Prizes:</strong></p>
          <ul>
            <li>🏆 1st Prize: ₹1000</li>
            <li>🥈 2nd Prize: ₹600</li>
          </ul>
          <p><strong>Register Now:</strong></p>
          <div style={{ textAlign: 'center' }}>
            <a href="https://forms.gle/SB2kxDu6iqmWqUF6A" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Register Now
              </button>
            </a>
          </div>
        </>
      ),
      googleFormLink: "https://forms.gle/SB2kxDu6iqmWqUF6A"
    },
  ];

  const event = images[id];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{`Event ${parseInt(id) + 1} Details`}</h1>
      <img src={event.src} alt={`Event ${parseInt(id) + 1}`} style={{ width: '100%', maxWidth: '600px' }} />
      <div>{event.description}</div>
    </div>
  );
};

export default EventDescriptionPage;
