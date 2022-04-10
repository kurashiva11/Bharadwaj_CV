import About from "./screens/about";
import Achievements from "./screens/achievements";
import Experience from "./screens/experience";
import './pageScroll';
import './pageScroll.css';

// can add upto 10 screens if require to add more screens then add nth-child css at public/index.css file.
const routes = [
  {
    path: "/",
    Screen: About,
  },
  {
    path: "/experience",
    Screen: Experience,
  },
  {
    path: "/achievements",
    Screen: Achievements,
  },
];

function App() {
  return (
    <div className="App">
      {routes.map((route) => (
        <route.Screen key={route.path} />
      ))}
    </div>
  );
}

export default App;
