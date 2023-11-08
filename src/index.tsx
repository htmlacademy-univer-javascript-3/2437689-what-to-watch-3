import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {PromoFilm} from './components/consts';
import { films } from './components/mocks/films.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      promoFilm = {PromoFilm}
      films = {films}
    />
  </React.StrictMode>
);
