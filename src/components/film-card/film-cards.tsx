import {FilmCard} from './film-card';
import {FilmType} from '../../types/films';

type FilmCardsProps = {
  films: FilmType[];
};

export function FilmCards({ films }: FilmCardsProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} />)}
    </div>
  );
}
