import './film-card.css';

type FilmCardProps = {
  poster: string;
  name: string;
}

function FilmCard({ poster, name }: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          className="small-film-card__image-item"
          src={poster}
          alt={name}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {name}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;

