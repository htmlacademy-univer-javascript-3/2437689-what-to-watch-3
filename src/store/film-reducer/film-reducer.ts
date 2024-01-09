import {createSlice} from '@reduxjs/toolkit';

import {changeFilmFavoriteStatus, fetchFilm, fetchReviews, fetchSimilarFilms} from '../api-actions.ts';
import {ReducerName} from '../../consts.ts';
import {FilmState} from "../../types/types.ts";

const initialState: FilmState = {
  film: null,
  reviews: [],
  similarFilms: [],
  isDataLoading: false
};

export const filmReducer = createSlice({
  name: ReducerName.FILM,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isDataLoading = false;
      })
      .addCase(changeFilmFavoriteStatus.fulfilled, (state, action) => {
        state.film = action.payload;
      });
  }
});
