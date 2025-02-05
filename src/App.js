// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing your components/pages
import Landing from './landing';
import Culture from './culture';
import Tech from './tech';
import ZoomInPage from './zoomin';
import Black from './black';
import Media from './media';
import End from './end';

function App() {
  return (
    <main>
      <Router>
        <div>
          {/* Define Routes for your pages */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/zoomin" element={<ZoomInPage />} />
            <Route path="/black" element={<Black />} />
            <Route path="/media" element={<Media />} />
            <Route path="/end" element={<End />} />
          </Routes>
        </div>
      </Router>

      {/* Non-router pages that follow the order you want */}
      <Culture />
      <Tech />
      <ZoomInPage />
      <Black />
      <Media />
      <End />
    </main>
  );
}

export default App;
