import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './input.css'
import './dist/output.css'
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop></ScrollToTop>
    <App />

    </Router>
  </React.StrictMode>
);

 