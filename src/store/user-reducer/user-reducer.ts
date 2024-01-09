import {createSlice} from '@reduxjs/toolkit';
import {login, logout, checkAuth} from '../api-actions';
import {AuthorizationStatus, ReducerName} from '../../consts.ts';
import {UserState} from "../../types/types.ts";

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  userAvatar: undefined
};

export const userReducer = createSlice({
  name: ReducerName.USER,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.userAvatar = action.payload.avatar;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userAvatar = undefined;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.userAvatar = action.payload.avatar;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });

  }
});
