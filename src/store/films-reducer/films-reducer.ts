import {FilmsState} from '../../types/state.ts';
import {Genres, ReducerName} from '../../consts.ts';
import {createSlice} from '@reduxjs/toolkit';
import {fetchFilms} from '../api-actions';
import {setGenre, showMore} from '../actions.ts';

const initialState: FilmsState = {
  films: [],
  filmsCount: 0,
  filmsDisplayed: [],
  genre: Genres.All,
  filmsByGenre: [],
  genreFilmsCount: 8,
  isDataLoading: false
};

export const filmsReducer = createSlice({
  name: ReducerName.FILMS,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(setGenre, (state, action) => {
        state.genre = action.payload;
        state.filmsByGenre =
                    state.genre === Genres.All
                      ? state.films
                      : state.films.filter((film) => film.genre === state.genre);
      })
      .addCase(fetchFilms.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filmsByGenre = state.films;
        state.filmsCount = Math.min(state.films.length, 8);
        state.isDataLoading = false;
      })
      .addCase(showMore, (state) => {
        state.filmsCount = state.films.length > state.filmsCount ? state.filmsCount + 8 : state.filmsCount;
      });
  }
});
