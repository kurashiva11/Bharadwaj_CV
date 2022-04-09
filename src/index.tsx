import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
);

/** TODO:
 * 0. create a header similar to microsoft by the numbers and make it compatible with mobile.
 * 1. show mutual attraction at contact page (https://www.youtube.com/watch?v=GjbKsOkN1Oc).
 * 2. show starfield till the page loads (https://www.youtube.com/watch?v=17WoOqgXsRM&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=1).
 * 3. show current page index similar to microsoft by numbers, but to right from top to bottom.
 */