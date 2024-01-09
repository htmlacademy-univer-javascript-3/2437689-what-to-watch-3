import ReactDOM from 'react-dom/client';
import {checkAuth, fetchFilms, fetchPromoFilm} from './store/api-actions';
import App from './components/app/app';
import {store} from './store';
import {Provider} from 'react-redux';
import ErrorMessage from './components/error-message/error-message.tsx';
import {ToastContainer} from 'react-toastify';

store.dispatch(checkAuth());
store.dispatch(fetchFilms());
store.dispatch(fetchPromoFilm());

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ToastContainer />
    <ErrorMessage />
    <App/>
    <ToastContainer />
  </Provider>
);
