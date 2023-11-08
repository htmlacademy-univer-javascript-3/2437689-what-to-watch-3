import {Films} from '../../types/films';
import {FilmCards} from '../../components/film-card/film-cards';
import {AppRoute} from '../../components/consts';
import {Link} from 'react-router-dom';

type FilmsScreenProps = {
  promoFilms: Films;
  films: Films[];
}

function MoviePage({promoFilms, films}: FilmsScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={promoFilms.src}
              alt={promoFilms.title}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={AppRoute.Main} className="logo__link">
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
              <h2 className="film-card__title">{promoFilms.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilms.genre}</span>
                <span className="film-card__year">{promoFilms.releaseDate}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" className="btn--play__icon-item">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" className="btn--list__icon-item">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                className="film-card__poster--image-item"
                src={promoFilms.poster}
                alt={`${promoFilms.title} poster`}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Details
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="film-rating">
                <div className="film-rating__score">{promoFilms.ratingScore}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{promoFilms.ratingLevel}</span>
                  <span className="film-rating__count">{promoFilms.ratingCount} ratings</span>
                </p>
              </div>
              <div className="film-card__text">
                {promoFilms.description}
                <p className="film-card__director"><strong>Director: {promoFilms.director}</strong></p>
                <p className="film-card__starring"><strong>Starring: {promoFilms.starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmCards filmId={promoFilms.id} films={films} />
        </section>
        <footer className="page-footer">
          <div className="logo">
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
