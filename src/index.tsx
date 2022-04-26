import {createRoot}  from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import SwipeEvent from './SwipeEvent';

new SwipeEvent();

//@ts-ignore
const root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
/**
 * 1. remove unwanted code.
 * 2. make a mouse follower.
 */