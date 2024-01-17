import {useAppDispatch, useAppSelector} from '../hooks/hooks.ts';
import {getAuthStatus} from '../../store/user-reducer/selectors.ts';
import {getMyListCount} from '../../store/films-reducer/selectors.ts';
import {removeFilmFromFavorites} from '../../store/api-actions.ts';
import {AuthorizationStatus} from '../../consts.ts';

type DeleteFromMyListButtonProps = {
  id: string;
};


function DeleteFromMyListButton({id}: DeleteFromMyListButtonProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const myListCount = useAppSelector(getMyListCount);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(removeFilmFromFavorites(id));
  };

  return(
    <button className="btn btn--list film-card__button" type="button" onClick={handleSubmit}>
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
      {authStatus === AuthorizationStatus.Auth && (<span className="film-card__count">{myListCount}</span>)}
    </button>
  );
}

export default DeleteFromMyListButton;
