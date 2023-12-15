import {useState} from 'react';
import {Film} from '../../types/films';
import {AddReviewForm} from './add-review-form';
import {AppRoute, FilmImage} from '../../utils/consts.ts';
import {Link} from 'react-router-dom';
import {GetSrcFilmImage} from '../../utils/functions.ts';
import {Helmet} from 'react-helmet-async';

type AddReviewPageProps = {
  film: Film;
};

function AddReviewPage({ film }: AddReviewPageProps): JSX.Element {
  const [filmRating, setFilmRating] = useState(0);
  if (filmRating !== undefined) {
    return(
      <div></div>
    );
  }
  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Карточка фильма</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={GetSrcFilmImage(film.title, FilmImage.BgImage)}
            alt={film.title}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="readcrumbs__link">
                  {film.title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img
            className="film-card__poster--image-item"
            src={GetSrcFilmImage(film.title, FilmImage.Poster)}
            alt={`${film.title} poster`}
          />
        </div>
      </div>
      <div className="add-review">
        <AddReviewForm onAnswer={(rating) => setFilmRating(rating)} />
      </div>
    </section>
  );
}

export default AddReviewPage;
