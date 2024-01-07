import React from 'react';
import {useAppSelector} from '../hooks/hooks.ts';

function TabOverview(): JSX.Element {
  const film = useAppSelector((state) => state.film);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
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
