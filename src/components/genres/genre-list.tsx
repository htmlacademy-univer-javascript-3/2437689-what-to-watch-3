import {useAppDispatch} from '../hooks/hooks.ts';
import {Genres, genres} from '../../utils/consts.ts';
import {
  setCount,
  setGenre,
  setFilmsDisplayed,
  setFilmByGenre
} from '../../store/actions.ts';
import GenreItem from './genre-item.tsx';

export function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleGenreClick = (genre: Genres) => {
    dispatch(setFilmByGenre({ genre: genre }));
    dispatch(setGenre());
    dispatch(setCount({ count: 8 }));
    dispatch(setFilmsDisplayed());
  };
  return (
    <ul className="catalog__genres-list">
      {genres.map((filmGenre) => (
        <GenreItem genre={filmGenre} onClick={handleGenreClick} key={filmGenre}/>
      ))}
    </ul>
  );
}
