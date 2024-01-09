import {useAppDispatch, useAppSelector} from '../hooks/hooks.ts';
import {Genres} from '../../consts.ts';
import {setGenre} from '../../store/actions.ts';
import GenreItem from '../genre-item/genre-item.tsx';
import {getFilms} from '../../store/films-reducer/selectors.ts';
import {getFilmsGenres} from '../../utils/utils.ts';

export function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilms);
  const genres: Genres[] = getFilmsGenres(films);
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
