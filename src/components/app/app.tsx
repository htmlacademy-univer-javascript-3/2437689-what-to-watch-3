import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppRoute, AuthorizationStatus } from '../../utils/consts.ts';
import PrivateRoute from '../private-route/private-route';
import {PromoFilmType, FilmCardType} from '../../types/films';
import {mainFilm, films} from '../mocks/films.ts';

type AppProps = {
  promoFilm: PromoFilmType;
  films: FilmCardType[];
}

function App(props: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage {...props} />}
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
                <MyListPage films={films}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film}>
            <Route index element={<MoviePage promoFilms={mainFilm} films={films}/>} />
            <Route
              path={AppRoute.AddReview}
              element={<AddReviewPage promoFilms={mainFilm}/>}
            />
          </Route>
          <Route
            path={AppRoute.Player}
            element={<PlayerPage videoUrl={mainFilm.video}/>}
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
