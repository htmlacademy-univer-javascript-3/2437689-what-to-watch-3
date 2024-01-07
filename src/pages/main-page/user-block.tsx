import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import {AppRoute, AuthorizationStatus} from '../../utils/consts.ts';
import {Link} from 'react-router-dom';
import './main-page.css';
import {logoutAction} from '../../services/api-actions.ts';

export default function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userImage = useAppSelector((state) => state.userImage);
  const dispatch = useAppDispatch();
  const signOutClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <div className="user-block">
        <Link to={AppRoute.Login} className="user-block__link">
          Sign in
        </Link>
      </div>
    );
  } else {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              className="user-block__image-item"
              src={userImage}
              alt="User avatar"
            />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link" onClick={signOutClickHandler}>Sign out</a>
        </li>
      </ul>
    );
  }
}
