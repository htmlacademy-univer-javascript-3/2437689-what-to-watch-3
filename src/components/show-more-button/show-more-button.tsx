import { useAppDispatch } from '../hooks/hooks';
import {setCount, setFilmsDisplayed} from '../../store/actions.ts';

export type ShowMoreButtonProps = {
  count: number;
}

export default function ShowMoreButton({ count }: ShowMoreButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleShowMoreClick = () => {
    dispatch(setCount({ count: count + 8 }));
    dispatch(setFilmsDisplayed());
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
