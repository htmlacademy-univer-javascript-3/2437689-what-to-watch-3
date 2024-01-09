import {Genres} from '../../consts.ts';
import {useAppSelector} from '../hooks/hooks.ts';
import {getGenre} from '../../store/films-reducer/selectors.ts';

type GenreItemProps = {
  genre: Genres;
  onClick: (genre: Genres) => void;
};

export default function GenreItem({genre, onClick}: GenreItemProps): JSX.Element {
  const activeGenre = useAppSelector(getGenre);

  return (
    <li
      className={`catalog__genres-item ${(genre === activeGenre && 'catalog__genres-item--active') || ''}`}
      key={genre}
    >
      <div className="catalog__genres-link" onClick={() => onClick(genre)} >
        {genre}
      </div>
    </li>
  );
}
