import { createReducer } from '@reduxjs/toolkit';
import {changeGenre, getGenreFilms, setFilmCardCount} from './actions.ts';
import {Genres, visibleFilmCardCount} from '../utils/consts.ts';
import { films } from '../components/mocks/films.ts';

const initialState = {
  genre: Genres.All,
  films,
  filmsCardCount: visibleFilmCardCount,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
      state.filmsCardCount = visibleFilmCardCount;
    })
    .addCase(getGenreFilms, (state, action) => {
      const { genre } = action.payload;
      switch (genre) {
        case Genres.All:
          state.films = films;
          break;
        default:
          state.films = films.filter((film) => film.genre === genre);
          break;
      }
    })
    .addCase(setFilmCardCount, (state) => {
      state.filmsCardCount +=
        state.films.length > state.filmsCardCount + visibleFilmCardCount
          ? state.filmsCardCount + visibleFilmCardCount
          : state.films.length;
    });
});

export { reducer };
