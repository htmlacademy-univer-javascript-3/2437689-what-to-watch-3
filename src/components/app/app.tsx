import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {AppRoute, AuthorizationStatus, idFirstFilm} from '../../utils/consts.ts';
import PrivateRoute from '../private-route/private-route';
import {Film} from '../../types/films';
import {films, VIDEO_URL} from '../mocks/films.ts';

export type AppProps = {
  mainFilm: Film;
};

function App({ mainFilm }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage mainFilm={mainFilm} />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInPage />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <MyListPage mainFilm={films[idFirstFilm]} films={films} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<MoviePage films={films} />} />
          <Route
            path={AppRoute.AddReview}
            element={<AddReviewPage film={films[idFirstFilm]} />}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerPage videoUrl={VIDEO_URL} />}
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
