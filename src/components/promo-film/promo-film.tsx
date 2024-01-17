import {useAppDispatch, useAppSelector} from '../hooks/hooks.ts';
import {Link} from 'react-router-dom';
import '../../pages/main-page/main-page.css';
import UserBlock from '../user-block/user-block.tsx';
import {Logo} from '../logo/logo.tsx';
import {AuthorizationStatus} from '../../consts.ts';
import {getAuthStatus} from '../../store/user-reducer/selectors.ts';
import {JSX, useEffect} from 'react';
import {fetchFavoriteFilms} from '../../store/api-actions.ts';
import './promo-film.css';
import {FilmType} from '../../types/types.ts';
import DeleteFromMyListButton from '../delete-from-my-list-button/delete-from-my-list-button.tsx';
import AddInMyListButton from '../add-in-my-list-button/add-in-my-list-button.tsx';
import NoAuthMyListButton from '../no-auth-my-list-button/no-auth-my-list-button.tsx';

type PromoFilmProps = {
  promoFilm: FilmType;
}

export function PromoFilm({promoFilm}: PromoFilmProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [authStatus, dispatch]);

  let myListButton;

  if (authStatus === AuthorizationStatus.NoAuth) {
    myListButton = <NoAuthMyListButton />;
  } else {
    myListButton = promoFilm.isFavorite
      ? <DeleteFromMyListButton id={promoFilm.id} />
      : <AddInMyListButton id={promoFilm.id} />;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />

        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img className="film-card__poster--image-item"
              src={promoFilm.posterImage}
              alt={`${promoFilm.name} poster`}
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

              {myListButton}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
