import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {store} from './store';
import {Provider} from 'react-redux';
import {checkAuth, fetchFilmsAction, fetchPromoFilmAction} from './services/api-actions';
import ErrorMessage from './components/error-message/error-message.tsx';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(checkAuth());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ErrorMessage />
    <App/>
  </Provider>
);
