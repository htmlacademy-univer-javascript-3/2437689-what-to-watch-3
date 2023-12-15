import {Film} from '../../types/films';

type TabOverviewProps = {
  film: Film;
};

export function TabOverview({ film }: TabOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.level}</span>
          <span className="film-rating__count">
            {film.rewievs.length} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.text}</p>

        <p>
          Gustave prides himself on providing first-class service to the
          hotel&apos;s guests, including satisfying the sexual needs of the many
          elderly women who stay there. When one of Gustave&apos;s lovers dies
          mysteriously, Gustave finds himself the recipient of a priceless
          painting and the chief suspect in her murder.
        </p>

        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring}</strong>
        </p>
      </div>
    </>
  );
}
