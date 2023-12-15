import {FilmCard} from './film-card';
import {FilmCardType} from '../../types/films';

type FilmCardsProps = {
  films: FilmCardType[];
};

export function FilmCards({ films }: FilmCardsProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} />)}
    </div>
  );
}
