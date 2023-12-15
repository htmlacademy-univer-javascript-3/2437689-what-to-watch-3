import {Film} from '../../types/films';
import {FilmCards} from '../../components/film-card/film-cards';
import {AppRoute, FilmImage, Genres} from '../../utils/consts.ts';
import {Link, useParams} from 'react-router-dom';
import {Tabs} from '../../components/tabs/tabs';
import {changeGenre, getGenreFilms} from '../../store/actions.ts';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import {GetSrcFilmImage} from '../../utils/functions.ts';

type MoviePageProps = {
  films: Film[];
};

function MoviePage({ films }: MoviePageProps): JSX.Element {
  const params = useParams();
  const mainFilm = films[parseInt(params.id || '1', 10) - 1];
  const filmsLikeMain = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={GetSrcFilmImage(mainFilm.title, FilmImage.BgImage)}
              alt={mainFilm.title}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link
                to={AppRoute.Main}
                className="logo__link"
                onClick={() => {
                  dispatch(changeGenre({ genre: Genres.All }));
                  dispatch(getGenreFilms({ genre: Genres.All }));
                }}
              >
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    className="user-block__image-item"
                    src="img/avatar.jpg"
                    alt="User avatar"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilm.genre}</span>
                <span className="film-card__year">{mainFilm.year}</span>
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
                <Link to={AppRoute.AddReview} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                className="film-card__poster--image-item"
                src={GetSrcFilmImage(mainFilm.title, FilmImage.Poster)}
                alt={mainFilm.title}
              />
            </div>

            <Tabs film={mainFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCards mainFilmId={mainFilm.id} films={filmsLikeMain} />
        </section>

        <footer className="page-footer">
          <div
            className="logo"
            onClick={() => {
              dispatch(changeGenre({ genre: Genres.All }));
              dispatch(getGenreFilms({ genre: Genres.All }));
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
