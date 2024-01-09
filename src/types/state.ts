import {store} from '../store';
import {AuthorizationStatus, Genres} from '../consts.ts';
import {FilmType, Review} from './films.ts';

export type UserState = {
    authorizationStatus: AuthorizationStatus;
    userAvatar: string | undefined;
}

export type FilmState = {
    film: FilmType | null;
    reviews: Review[];
    similarFilms: FilmType[];
    isDataLoading: boolean;
}

export type FilmsState = {
    films: FilmType[];
    filmsCount: number;
    filmsDisplayed: FilmType[];
    genre: Genres;
    filmsByGenre: FilmType[];
    genreFilmsCount: number;
    myListFilms: FilmType[];
    myListFilmsCount: number;
    isDataLoading: boolean;
}

export type MainState = {
    error: string | null;
    promoFilm: FilmType | null;
    isDataLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
