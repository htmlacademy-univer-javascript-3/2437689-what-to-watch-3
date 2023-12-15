import {FilmCards} from '../../components/film-card/film-cards';
import {Film} from '../../types/films';
import {FilmImage} from '../../utils/consts.ts';
import './main-page.css';
import {useAppSelector} from '../../components/hooks/hooks.ts';
import {GenresList} from '../../components/genres/genre-list.tsx';
import {GetSrcFilmImage} from '../../utils/functions.ts';

export type MainPageProps = {
  mainFilm: Film;
}

function MainPage({ mainFilm }: MainPageProps): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={GetSrcFilmImage(mainFilm.title, FilmImage.BgImage)}
            alt={mainFilm.title}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                className="film-card__poster--image-item"
                src={GetSrcFilmImage(mainFilm.title, FilmImage.Poster)}
                alt={`${mainFilm.title} poster`}
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilm.title}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <GenresList />
          </ul>

          <FilmCards mainFilmId={mainFilm.id} films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
