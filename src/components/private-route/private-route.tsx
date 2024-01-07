import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/consts.ts';
import {useAppSelector} from '../hooks/hooks.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
