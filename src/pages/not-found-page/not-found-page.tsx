import { Link } from 'react-router-dom';
import {AppRoute} from '../../utils/consts.ts';
import { Fragment } from 'react';

export function NotFoundPage(): JSX.Element {
  return (
    <Fragment>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </Fragment>
  );
}

export default NotFoundPage;
