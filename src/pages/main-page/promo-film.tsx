import {useAppSelector} from '../../components/hooks/hooks.ts';
import {PromoFilmType} from '../../types/films.ts';
import {Link} from 'react-router-dom';
import './main-page.css';

type PromoFilmProps = {
  promoFilm: PromoFilmType;
}

export default function PromoFilm({promoFilm}: PromoFilmProps): JSX.Element {
  const films = useAppSelector((state) => state.films);

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
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
                src="/img/avatar.jpg"
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
            <img className="film-card__poster--image-item"
              src={promoFilm.posterImage}
              alt={`${promoFilm.name} poster`} width="218" height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>

            <div className="film-card__buttons">
              <Link to={`player/${promoFilm.id}`} className="btn btn--play film-card__button" type="button">
                <svg className="btn--play__icon-item" viewBox="0 0 19 19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <button className="btn btn--list film-card__button" type="button">
                <svg className="btn--list__icon-ite" viewBox="0 0 19 20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">{films.length}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
