import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts.ts';
import {useAppSelector} from '../hooks/hooks.ts';
import {getAuthStatus} from '../../store/user-reducer/selectors.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
