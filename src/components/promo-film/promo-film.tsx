import {useAppDispatch, useAppSelector} from '../hooks/hooks.ts';
import {Link, useNavigate} from 'react-router-dom';
import '../../pages/main-page/main-page.css';
import UserBlock from '../user-block/user-block.tsx';
import {getMyListCount} from '../../store/films-reducer/selectors.ts';
import {Logo} from '../logo/logo.tsx';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {getAuthStatus} from '../../store/user-reducer/selectors.ts';
import {useEffect} from 'react';
import {changePromoFavoriteStatus, fetchFavoriteFilms} from '../../store/api-actions.ts';
import {setMyListCount} from '../../store/actions.ts';
import './promo-film.css';
import {FilmType} from '../../types/types.ts';

type PromoFilmProps = {
  promoFilm: FilmType;
}

export default function PromoFilm({promoFilm}: PromoFilmProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const myListCount = useAppSelector(getMyListCount);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [authStatus, dispatch]);

  const handleClick = () => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(changePromoFavoriteStatus({filmId: promoFilm.id, status: +(!promoFilm.isFavorite)}));
      if (promoFilm?.isFavorite) {
        dispatch(setMyListCount(myListCount - 1));
      } else {
        dispatch(setMyListCount(myListCount + 1));
      }
    } else {
      navigate(AppRoute.Login);
    }
  };

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
              <button
                className="btn btn--list film-card__button"
                onClick={handleClick}
              >
                <svg viewBox="0 0 18 14" width="19" height="14">
                  <use xlinkHref={promoFilm?.isFavorite ? '#in-list' : '#add'} />
                </svg>
                <span>My list</span>
                { authStatus === AuthorizationStatus.Auth && (<span className="film-card__count">{myListCount}</span>) }
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
