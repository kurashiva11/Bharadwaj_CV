import { Routes, Route } from 'react-router';

import About from './screens/about';
import Achievements from './screens/achievements';

const routes = [
  {
    path: '/',
    Screen: About,
  },
  {
    path: '/achievements',
    Screen: Achievements,
  },
  // No Match route
  // TODO: Show that there is nothing here to learn.
  {
    path: '*',
    Screen: About,
  }
];

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(route => <Route path={route.path} element={<route.Screen />}/>)}
      </Routes>
    </div>
  );
}

export default App;
