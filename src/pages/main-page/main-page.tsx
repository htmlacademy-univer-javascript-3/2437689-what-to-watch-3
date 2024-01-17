import {FilmCards} from '../../components/film-cards/film-cards.tsx';
import {JSX} from 'react';
import './main-page.css';
import {useAppSelector} from '../../components/hooks/hooks.ts';
import {GenresList} from '../../components/genre-list/genre-list.tsx';
import {PromoFilm} from '../../components/promo-film/promo-film.tsx';
import ShowMoreButton from '../../components/show-more-button/show-more-button.tsx';
import {getFilmsByGenre, getFilmsCount} from '../../store/films-reducer/selectors.ts';
import {getPromo} from '../../store/main-reducer/selectors.ts';

export function MainPage(): JSX.Element {
  const filmCount = useAppSelector(getFilmsCount);
  const filmsByGenres = useAppSelector(getFilmsByGenre);
  const promoFilm = useAppSelector(getPromo);

  return (
    <>
      {promoFilm && <PromoFilm promoFilm={promoFilm} />}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <GenresList />
          </ul>

          <FilmCards films={filmsByGenres.slice(0, filmCount)} />

          {filmCount < filmsByGenres.length
            && <ShowMoreButton />}
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
