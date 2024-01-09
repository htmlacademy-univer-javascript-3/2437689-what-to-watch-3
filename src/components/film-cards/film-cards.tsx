import {FilmCard} from '../film-card/film-card.tsx';

import {FilmType} from '../../types/types.ts';

type FilmCardsProps = {
  films: FilmType[];
};

export function FilmCards({ films }: FilmCardsProps): JSX.Element {
  const noFilmsText = (films.length === 0) ? 'No films' : '';

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} />)}
      {noFilmsText}
    </div>
  );
}
