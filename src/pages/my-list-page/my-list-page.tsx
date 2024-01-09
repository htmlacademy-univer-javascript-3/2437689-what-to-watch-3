import './my-list-page.css';
import {FilmCards} from '../../components/film-cards/film-cards.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import {getMyListFilms} from '../../store/films-reducer/selectors.ts';
import Footer from '../../components/footer/footer.tsx';
import {Logo} from '../../components/logo/logo.tsx';
import {getAuthStatus} from "../../store/user-reducer/selectors.ts";
import {AuthorizationStatus} from "../../consts.ts";
import {fetchFavoriteFilms} from "../../store/api-actions.ts";
import {useEffect} from "react";

function MyListPage(): JSX.Element {
    const authStatus = useAppSelector(getAuthStatus);
    const myListFilms = useAppSelector(getMyListFilms);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (authStatus === AuthorizationStatus.Auth) {
            dispatch(fetchFavoriteFilms());
        }
    }, [authStatus, dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{myListFilms.length}</span>
        </h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCards films={myListFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
