type FilmCardProps = {
  imgURL: string;
  imgDesctiption: string;
}

function FilmCard({ imgURL, imgDesctiption }: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={imgURL}
          alt={imgDesctiption}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {imgDesctiption}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;

