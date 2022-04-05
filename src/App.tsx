import { useEffect } from 'react';
import { Routes, Route } from 'react-router';

import About from './screens/about/About';
import './App.css';
import useScrollEffect from './hooks/useScrollEffect';

const scrollOptions = {
  onScrollTop: () => {
    console.log("scroll top");
  },
  onscrollBottom: () => {
    console.log('scroll bottom');
  },
}

function App() {
  useScrollEffect(scrollOptions);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        {/* No Match route */}
        {/* TODO: Show that there is nothing here to learn. */}
        <Route path="*" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
