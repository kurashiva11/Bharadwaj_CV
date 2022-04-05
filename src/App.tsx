import { Routes, Route } from 'react-router';

import About from './screens/About';
import './App.css';

function App() {
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
