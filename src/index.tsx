import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './settings.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App filmCardTitle={Setting.filmCardTitle} filmCardGenre={Setting.filmCardGenre} filmCardYear={Setting.filmCardYear} />
  </React.StrictMode>
);
