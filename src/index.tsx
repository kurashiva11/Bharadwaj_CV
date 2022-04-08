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
 * 1. show mutual attraction at contact page (https://www.youtube.com/watch?v=GjbKsOkN1Oc).
 * 2. show starfield till the page loads (https://www.youtube.com/watch?v=17WoOqgXsRM&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=1).
 * 
 * color blast
 * bullseye (codepen: https://codepen.io/pyrografix/pen/qrqpJN?editors=0110)
 * planet defence (learn from https://www.youtube.com/watch?v=eI9idPTT0c4) (output similar to: https://codepen.io/Loopez10/pen/dMaVdQ)
 * coloron
 */