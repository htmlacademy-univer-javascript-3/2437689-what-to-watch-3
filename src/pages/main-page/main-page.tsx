import {FilmCards} from '../../components/film-card/film-cards';
import {PromoFilmType} from '../../types/films';
import './main-page.css';
import {useAppSelector} from '../../components/hooks/hooks.ts';
import {GenresList} from '../../components/genres/genre-list.tsx';
import PromoFilm from './promo-film.tsx';
import ShowMoreButton from '../../components/show-more-button/show-more-button.tsx';

export type MainPageProps = {
  promoFilm: PromoFilmType;
}

function MainPage({ promoFilm }: MainPageProps): JSX.Element {
  const countDisplayedFilms = useAppSelector((state) => state.filmsCardCount);
  const countFilmsByGenres = useAppSelector((state) => state.filmsByGenre);
  const films = useAppSelector((state) => state.filmsDisplayed);
  return (
    <>
      {promoFilm && <PromoFilm promoFilm={promoFilm} />}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <GenresList />
          </ul>

          <FilmCards films={films} />

          {countDisplayedFilms < countFilmsByGenres.length
            && <ShowMoreButton count={countDisplayedFilms} />}
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
