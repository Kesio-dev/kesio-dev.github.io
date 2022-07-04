import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';

import './ui.scss'
import Portfolio from './pages/Portfolio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Portfolio />
    {/* <Main /> */}
  </React.StrictMode>
);
