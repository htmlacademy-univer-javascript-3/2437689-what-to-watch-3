import React from 'react';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getFilm} from '../../../store/film-reducer/selectors.ts';
import NotFoundPage from '../../../pages/not-found-page/not-found-page.tsx';

function convertToText(rating: number):string{
  let textRating = '';
  if (rating <= 3){
    textRating = 'Bad';
  } else if (rating > 3 && rating <= 5){
    textRating = 'Normal';
  } else if (rating > 5 && rating < 8){
    textRating = 'Good';
  } else if (rating >= 8){
    textRating = 'Very good';
  }
  return textRating;
}

function TabOverview(): JSX.Element {
  const film = useAppSelector(getFilm);

  if (film === null) {
    return <NotFoundPage/>;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{convertToText(film?.rating)}</span>
          <span className="film-rating__count">{film?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>

        <p className="film-card__director">
          <strong>Director: {film?.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring:
            {
              film?.starring.map((actor) => (
                film?.starring[film?.starring.length - 1] === actor
                  ? <React.Fragment key={actor}>{actor} and other</React.Fragment>
                  : <React.Fragment key={actor}>{actor}, </React.Fragment>))
            }
          </strong>
        </p>
      </div>
    </>
  );
}

export default TabOverview;
