import {createRoot}  from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

//@ts-ignore
const root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);

/** TODO:
 * 0. create a header similar to microsoft by the numbers and make it compatible with mobile.
 * 1. show page name like about, skills, projects,etc in header.
 * 2. show resume download.
 * 3. show starfield till the page loads (https://www.youtube.com/watch?v=17WoOqgXsRM&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=1).
 * 4. show current page index similar to microsoft by numbers, but from top to bottom.
 * 5. fix css to work even with mobile.
 */