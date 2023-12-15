import {FilmCard} from './film-card';
import {Film} from '../../types/films';

type FilmCardsProps = {
  mainFilmId: number;
  films: Film[];
};

export function FilmCards({ mainFilmId, films}: FilmCardsProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        if (film.id !== mainFilmId) {
          return <FilmCard key={film.id} film={film}/>;
        }
      })}
    </div>
  );
}
