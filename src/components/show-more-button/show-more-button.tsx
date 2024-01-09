import { useAppDispatch } from '../hooks/hooks';
import {showMore} from '../../store/actions.ts';

export default function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleShowMoreClick = () => {
    dispatch(showMore());
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
