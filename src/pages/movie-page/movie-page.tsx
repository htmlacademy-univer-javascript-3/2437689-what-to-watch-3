import {FilmCards} from '../../components/film-card/film-cards';
import {AppRoute, AuthorizationStatus} from '../../utils/consts.ts';
import {Link, useParams} from 'react-router-dom';
import {Tabs} from '../../components/tabs/tabs';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks';
import {fetchFilmAction, fetchReviewsByID, fetchSimilarByID} from '../../services/api-actions';
import { useEffect } from 'react';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { ReturnToMainPage } from '../../utils/functions';
import './movie-page.css';
import UserBlock from '../main-page/user-block.tsx';
import {setDataLoadingStatus} from "../../store/actions.ts";

function MoviePage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const mainFilm = useAppSelector((state) => state.film);
  const filmsLikeMain = useAppSelector((state) => state.similarFilms);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    dispatch(setDataLoadingStatus(true));
    dispatch(fetchFilmAction(String(id)));
    dispatch(fetchSimilarByID(String(id)));
    dispatch(fetchReviewsByID(String(id)));
    dispatch(setDataLoadingStatus(false));
  }, [id, dispatch]);

  if (!mainFilm) {
    return <NotFoundPage />;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={mainFilm?.backgroundImage} alt={mainFilm?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link
                to={AppRoute.Main}
                className="logo__link"
                onClick={() => {
                  ReturnToMainPage();
                }}
              >
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilm?.genre}</span>
                <span className="film-card__year">{mainFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg className="btn--play__icon-item" viewBox="0 0 19 19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg className="btn--list__icon-item" viewBox="0 0 19 20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <Link to={`/films/${mainFilm.id}/review`} className="btn film-card__button">
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                className="film-card__poster--image-item"
                src={mainFilm?.posterImage}
                alt={mainFilm?.name}
              />
            </div>

            <Tabs />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCards films={filmsLikeMain} />
        </section>

        <footer className="page-footer">
          <div
            className="logo"
            onClick={() => {
              ReturnToMainPage();
            }}
          >
            <Link to={AppRoute.Main} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MoviePage;
