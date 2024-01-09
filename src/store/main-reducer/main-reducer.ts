import {createSlice} from '@reduxjs/toolkit';
import {ReducerName} from '../../consts.ts';
import {setError} from '../actions';
import {changePromoFavoriteStatus, fetchPromoFilm} from '../api-actions.ts';
import {MainState} from '../../types/types.ts';

const initialState: MainState = {
  error: null,
  promoFilm: null,
  isDataLoading: false
};

export const mainReducer = createSlice({
  name: ReducerName.MAIN,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoading = false;
      })
      .addCase(changePromoFavoriteStatus.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      });
  }
});
