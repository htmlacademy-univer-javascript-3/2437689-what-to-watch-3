import FilmCard from './film_card.tsx';

type MainScreenProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
}

function MainPage({ filmCardTitle, filmCardGenre, filmCardYear }: MainScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width={63}
                  height={63}
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmCardTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmCardGenre}</span>
                <span className="film-card__year">{filmCardYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Kids &amp; Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmCard imgURL="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" imgDesctiption="Fantastic Beasts: The Crimes of Grindelwald"/>
            <FilmCard imgURL="img/bohemian-rhapsody.jpg" imgDesctiption="Bohemian Rhapsody"/>
            <FilmCard imgURL="img/macbeth.jpg" imgDesctiption="Macbeth"/>
            <FilmCard imgURL="img/aviator.jpg" imgDesctiption="Aviator"/>
            <FilmCard imgURL="img/we-need-to-talk-about-kevin.jpg" imgDesctiption="We need to talk about Kevin"/>
            <FilmCard imgURL="img/what-we-do-in-the-shadows.jpg" imgDesctiption="What We Do in the Shadows"/>
            <FilmCard imgURL="img/revenant.jpg" imgDesctiption="Revenant"/>
            <FilmCard imgURL="img/johnny-english.jpg" imgDesctiption="Johnny English"/>
            <FilmCard imgURL="img/shutter-island.jpg" imgDesctiption="Shutter Island"/>
            <FilmCard imgURL="img/pulp-fiction.jpg" imgDesctiption="Pulp Fiction"/>
            <FilmCard imgURL="img/no-country-for-old-men.jpg" imgDesctiption="No Country for Old Men"/>
            <FilmCard imgURL="img/snatch.jpg" imgDesctiption="Snatch"/>
            <FilmCard imgURL="img/moonrise-kingdom.jpg" imgDesctiption="Moonrise Kingdom"/>
            <FilmCard imgURL="img/seven-years-in-tibet.jpg" imgDesctiption="Seven Years in Tibet"/>
            <FilmCard imgURL="img/midnight-special.jpg" imgDesctiption="Midnight Special"/>
            <FilmCard imgURL="img/war-of-the-worlds.jpg" imgDesctiption="War of the Worlds"/>
            <FilmCard imgURL="img/dardjeeling-limited.jpg" imgDesctiption="Dardjeeling Limited"/>
            <FilmCard imgURL="img/orlando.jpg" imgDesctiption="Orlando"/>
            <FilmCard imgURL="img/mindhunter.jpg" imgDesctiption="Mindhunter"/>
            <FilmCard imgURL="img/midnight-special.jpg" imgDesctiption="Midnight Special"/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
