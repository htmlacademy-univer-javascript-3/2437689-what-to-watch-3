import {PromoFilmType} from '../../types/films';
import {AddReviewForm} from './add-review-form';
import {AppRoute} from '../../utils/consts.ts';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import './add-review-page.css';
import UserBlock from '../main-page/user-block.tsx';

type AddReviewPageProps = {
  film: PromoFilmType;
};

function AddReviewPage({ film }: AddReviewPageProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Карточка фильма</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
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
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            className="film-card__poster--image-item"
            src={film.posterImage}
            alt={`${film.name} poster`}
          />
        </div>
      </div>
      <div className="add-review">
        <AddReviewForm />
      </div>
    </section>
  );
}

export default AddReviewPage;
