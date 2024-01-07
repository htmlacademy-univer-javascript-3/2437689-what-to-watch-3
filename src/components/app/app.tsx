import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {AppRoute} from '../../utils/consts.ts';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../hooks/hooks.ts';
import Spinner from '../spinner/spinner.tsx';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element {
  const isQuestionsDataLoading = useAppSelector(
    (state) => state.isFilmsDataLoading
  );
  const films = useAppSelector((state) => state.films);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  if (isQuestionsDataLoading) {
    return <Spinner />;
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage promoFilm={promoFilm} />}
          />
          <Route
            path={AppRoute.Login}
            element={<SignInPage />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyListPage films={films} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<MoviePage />}
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <AddReviewPage film={promoFilm}/>
            }
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerPage videoUrl={''} />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
