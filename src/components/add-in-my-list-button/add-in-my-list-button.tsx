import {useAppDispatch, useAppSelector} from '../hooks/hooks.ts';
import {getMyListCount} from '../../store/films-reducer/selectors.ts';
import {addFilmToFavorites} from '../../store/api-actions.ts';

type AddInMyListButtonProps = {
  id: string;
};


function AddInMyListButton({id}: AddInMyListButtonProps): JSX.Element {
  const myListCount = useAppSelector(getMyListCount);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(addFilmToFavorites(id));
  };

  return(
    <button className="btn btn--play film-card__button" type="button" onClick={handleSubmit}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{myListCount}</span>
    </button>
  );
}

export default AddInMyListButton;
