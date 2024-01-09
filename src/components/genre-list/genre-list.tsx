import {useAppDispatch} from '../hooks/hooks.ts';
import {Genres, genres} from '../../consts.ts';
import {
  setGenre,
} from '../../store/actions.ts';
import GenreItem from '../genre-item/genre-item.tsx';

export function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleGenreClick = (genre: Genres) => {
    dispatch(setGenre(genre));
  };
  return (
    <ul className="catalog__genres-list">
      {genres.map((filmGenre) => (
        <GenreItem genre={filmGenre} onClick={handleGenreClick} key={filmGenre}/>
      ))}
    </ul>
  );
}
