import {AxiosError, AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { FilmCardType, FilmType, PromoFilmType } from '../types/films';
import {
  loadAllFilms,
  setDataLoadingStatus,
  loadPromoFilm,
  loadFilm, setError, requireAuthorization, setUserImage,
} from '../store/actions';
import {APIRoute, AuthorizationStatus} from '../utils/consts';
import {UserFormValues} from '../pages/sign-in-page/sign-in-page.tsx';
import {UserData} from '../types/user.ts';

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  await api
    .get<FilmCardType[]>(APIRoute.Films())
    .then((res) => {
      dispatch(setDataLoadingStatus(false));
      dispatch(loadAllFilms(res.data));
    })
    .catch((err: AxiosError) => {
      dispatch(setError(err.message));
    });
});

export const fetchPromoFilmAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (_arg, { dispatch, extra: api }) => {
  await api
    .get<PromoFilmType>(APIRoute.Promo())
    .then((res) => dispatch(loadPromoFilm(res.data)))
    .catch((err: AxiosError) => {
      dispatch(setError(err.message));
    });
});

export const fetchFilmAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (id, { dispatch, extra: api }) => {
  await api.get<FilmType>(APIRoute.Film(id)).then((res) => {
    dispatch(loadFilm(res.data));
  });
});

export const login = createAsyncThunk<
  void,
  UserFormValues,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async (form, { dispatch, extra: api }) => {
  await api
    .post<UserFormValues, { data: UserData }>(APIRoute.Login(), form)
    .then((res) => res.data)
    .then((data) => {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserImage(data.avatarUrl));
    })
    .catch((err: AxiosError) => {
      dispatch(setError(err.message));
    });
});

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('checkAuth', async (_arg, { dispatch, extra: api }) => {
  await api
    .get<UserData>(APIRoute.Login())
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    })
    .catch((err: AxiosError) => {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setError(err.message));
    });
});
