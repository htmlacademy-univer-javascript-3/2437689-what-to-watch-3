import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './components/mocks/films.ts';
import {store} from './store';
import {Provider} from 'react-redux';
import {idFirstFilm} from './utils/consts.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App mainFilm={films[idFirstFilm]} />
  </Provider>
);
