import {FilmCards} from '../../components/film-cards/film-cards.tsx';
import {AuthorizationStatus} from '../../consts.ts';
import {Link, useParams} from 'react-router-dom';
import {Tabs} from '../../components/tabs/tabs';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks';
import {fetchFavoriteFilms, fetchFilm, fetchReviews, fetchSimilarFilms} from '../../store/api-actions.ts';
import {useEffect} from 'react';
import {NotFoundPage} from '../not-found-page/not-found-page';
import './movie-page.css';
import UserBlock from '../../components/user-block/user-block.tsx';
import {getFilm, getSimilarFilms} from '../../store/film-reducer/selectors.ts';
import {getAuthStatus} from '../../store/user-reducer/selectors.ts';
import Footer from '../../components/footer/footer.tsx';
import {Logo} from '../../components/logo/logo.tsx';
import NoAuthMyListButton from '../../components/no-auth-my-list-button/no-auth-my-list-button.tsx';
import AddInMyListButton from '../../components/add-in-my-list-button/add-in-my-list-button.tsx';
import DeleteFromMyListButton from '../../components/delete-from-my-list-button/delete-from-my-list-button.tsx';

function MoviePage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const mainFilm = useAppSelector(getFilm);
  const filmsLikeMain = useAppSelector(getSimilarFilms);
  const authorizationStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (id === undefined) {
      return;
    }

    dispatch(fetchFilm(String(id)));
    dispatch(fetchSimilarFilms(String(id)));
    dispatch(fetchReviews(String(id)));
  }, [id, dispatch]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [authorizationStatus, dispatch]);

  if (mainFilm === null) {
    return <NotFoundPage />;
  }

  let myListButton;

  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    myListButton = <NoAuthMyListButton />;
  } else {
    myListButton = mainFilm.isFavorite
      ? <DeleteFromMyListButton id={mainFilm.id} />
      : <AddInMyListButton id={mainFilm.id} />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={mainFilm.backgroundImage} alt={mainFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilm.genre}</span>
                <span className="film-card__year">{mainFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${mainFilm.id}`}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg className="btn--play__icon-item" viewBox="0 0 19 19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                {myListButton}

                <Link to={`/films/${mainFilm.id}/review`} className="btn film-card__button">
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
                src={mainFilm.posterImage}
                alt={mainFilm.name}
              />
            </div>

            <Tabs film={mainFilm}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCards films={filmsLikeMain.slice(0, 4)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
