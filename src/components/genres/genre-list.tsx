import {useAppSelector, useAppDispatch} from '../hooks/hooks.ts';
import {Genres} from '../../utils/consts.ts';
import {films} from '../mocks/films.ts';
import {changeGenre, getGenreFilms} from '../../store/actions.ts';

export function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const genre = useAppSelector((state) => state.genre);
  const genres: Genres[] = [Genres.All, ...new Set(films.map((x) => x.genre))];

  return (
    <ul className="catalog__genres-list">
      {genres.map((filmGenre) => (
        <li
          className={`catalog__genres-item
                ${(filmGenre === genre && 'catalog__genres-item--active') || ''}`}
          key={filmGenre}
        >
          <div
            className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenre({ genre: filmGenre }));
              dispatch(getGenreFilms({ genre: filmGenre }));
            }}
          >
            {filmGenre}
          </div>
        </li>
      ))}
    </ul>
  );
}
