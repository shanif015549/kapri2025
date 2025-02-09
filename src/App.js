// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import ScrollablePage from './ScrollablePage'; // The page with smooth scrolling
import TechEventPage from './techeventpage'; // Tech Event page component
import EventDescriptionPage from './registrationpage';
function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route to ScrollablePage */}
        <Route path="/" element={<ScrollablePage />} />

        {/* Specific Route for TechEventPage */}
        <Route path="/techevent" element={<TechEventPage />} />
        <Route path="/event/:id" element={<EventDescriptionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
