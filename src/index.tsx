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
 * 2. change about page
 * 3. show loader till the page loads.
 * 4. show current page index similar to microsoft by numbers, but from top to bottom.
 * 5. fix css to work even with mobile.
 */