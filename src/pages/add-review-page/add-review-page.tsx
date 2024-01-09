import {AddReviewForm} from '../../components/add-review-form/add-review-form.tsx';
import {useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import './add-review-page.css';
import UserBlock from '../../components/user-block/user-block.tsx';
import {useAppSelector} from '../../components/hooks/hooks.ts';
import {getFilm} from '../../store/film-reducer/selectors.ts';
import {Logo} from '../../components/logo/logo.tsx';

function AddReviewPage(): JSX.Element {
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Карточка фильма</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a onClick={() => navigate(-1)} className="readcrumbs__link">
                  {film?.name}
                </a>
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
            src={film?.posterImage}
            alt={film?.name}
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
