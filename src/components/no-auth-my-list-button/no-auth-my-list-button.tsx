import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

function NoAuthMyListButton(): JSX.Element {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(AppRoute.Login);
  };

  return(
    <button className="btn btn--play film-card__button" type="button" onClick={handleSubmit}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default NoAuthMyListButton;
