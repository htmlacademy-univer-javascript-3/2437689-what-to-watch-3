import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Fragment } from 'react';

function NotFoundPage(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Что посмотреть. Страница не найдена</title>
      </Helmet>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Вернуться на главную</Link>
    </Fragment>
  );
}

export default NotFoundPage;
