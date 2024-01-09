import {AuthorizationStatus, Genres} from '../consts.ts';
import {store} from '../store';

export type AuthData = {
    email: string;
    password: string;
};

export type FilmType = {
    id: string;
    name: string;
    posterImage: string;
    backgroundImage: string;
    backgroundColor: string;
    previewImage: string;
    previewVideoLink: string;
    videoLink: string;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    starring: [string];
    runTime: number;
    genre: Genres;
    released: number;
    isFavorite: boolean;
};

export type Review = {
    id: string;
    date: string;
    user: string;
    comment: string;
    rating: number;
};

export type UserState = {
    authorizationStatus: AuthorizationStatus;
    userAvatar: string | undefined;
};

export type FilmState = {
    film: FilmType | null;
    reviews: Review[];
    similarFilms: FilmType[];
    isDataLoading: boolean;
};

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
};

export type MainState = {
    error: string | null;
    promoFilm: FilmType | null;
    isDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserData = {
    id: number;
    email: string;
    token: string;
    avatar: string;
};
