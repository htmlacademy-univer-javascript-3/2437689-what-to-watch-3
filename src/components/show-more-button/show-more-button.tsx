import { useAppDispatch } from '../hooks/hooks';
import {setFilmCardCount} from '../../store/actions.ts';

export default function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleShowMoreClick = () => {
    dispatch(setFilmCardCount());
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={handleShowMoreClick}
      >
        Show more
      </button>
    </div>
  );
}
