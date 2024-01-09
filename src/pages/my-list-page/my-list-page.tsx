import './my-list-page.css';
import {FilmCards} from '../../components/film-cards/film-cards.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import {useAppSelector} from '../../components/hooks/hooks.ts';
import {getFilms} from '../../store/films-reducer/selectors.ts';
import Footer from '../../components/footer/footer.tsx';
import {Logo} from '../../components/logo/logo.tsx';

function MyListPage(): JSX.Element {
  const films = useAppSelector(getFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCards films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
