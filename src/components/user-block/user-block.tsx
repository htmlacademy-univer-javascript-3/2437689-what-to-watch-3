import {useAppDispatch, useAppSelector} from '../hooks/hooks.ts';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {Link, useNavigate} from 'react-router-dom';
import '../../pages/main-page/main-page.css';
import {logout} from '../../store/api-actions.ts';
import {getAuthStatus, getAvatar} from '../../store/user-reducer/selectors.ts';

export default function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const userAvatar = useAppSelector(getAvatar);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const signOutClickHandler = () => {
    dispatch(logout());
    navigate(AppRoute.Main);
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <div className="user-block">
        <Link to={AppRoute.Login} className="user-block__link">
          Sign in
        </Link>
      </div>
    );
  }
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={'/mylist'}>
            <img
              className="user-block__image-item"
              src={userAvatar || 'img/avatar.jpg'}
              alt="User avatar"
            />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={signOutClickHandler}>Sign out</a>
      </li>
    </ul>
  );
}
