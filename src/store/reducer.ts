import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getGenreFilms } from './actions.ts';
import { Genres } from '../utils/consts.ts';
import { films } from '../components/mocks/films.ts';

const initialState = {
  genre: Genres.All,
  films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
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
    });
});

export { reducer };
