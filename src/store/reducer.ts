import { createReducer } from '@reduxjs/toolkit';
import {
  loadFilm,
  loadAllFilms,
  loadPromoFilm,
  setCount,
  setGenre,
  setDataLoadingStatus,
  setFilmsDisplayed,
  setFilmByGenre,
  requireAuthorization,
  setUserImage,
  setError
} from './actions.ts';
import {AuthorizationStatus, Genres, visibleFilmCardCount} from '../utils/consts.ts';
import {FilmCardType, FilmType, PromoFilmType} from '../types/films.ts';

type InitialState = {
  genre: Genres;
  films: FilmCardType[];
  filmsDisplayed: FilmCardType[];
  filmsByGenre: FilmCardType[];
  filmsCardCount: number;
  error: string | null;
  isFilmsDataLoading: boolean;
  promoFilm: PromoFilmType;
  film: FilmType | null;
  authorizationStatus: AuthorizationStatus;
  userImage: string;
};

const initialState: InitialState = {
  genre: Genres.All,
  films: [],
  filmsDisplayed: [],
  filmsByGenre: [],
  filmsCardCount: visibleFilmCardCount,
  error: null,
  isFilmsDataLoading: false,
  promoFilm: {
    id: '',
    name: '',
    posterImage: '',
    backgroundImage: '',
    videoLink: '',
    genre: Genres.All,
    released: -1,
    isFavorite: false,
  },
  film: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userImage: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCount, (state, action) => {
      const { count } = action.payload;
      state.filmsCardCount = Math.min(state.filmsByGenre.length, count);
    })
    .addCase(setFilmByGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    })
    .addCase(setGenre, (state) => {
      if (state.genre === Genres.All) {
        state.filmsByGenre = state.films;
      } else {
        state.filmsByGenre = state.films.filter(
          (film) => film.genre === state.genre
        );
      }
    })
    .addCase(setFilmsDisplayed, (state) => {
      state.filmsDisplayed = state.filmsByGenre.slice(0, state.filmsCardCount);
    })
    .addCase(loadAllFilms, (state, action) => {
      const films = action.payload;
      state.films = films;
      state.filmsByGenre = films;
      state.filmsDisplayed = films.slice(0, Math.min(8, films.length));
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserImage, (state, action) => {
      state.userImage = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
