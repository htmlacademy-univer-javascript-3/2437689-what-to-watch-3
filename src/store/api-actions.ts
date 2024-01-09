import {AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.ts';
import {FilmType, Review} from '../types/films.ts';
import {APIRoute} from '../consts.ts';
import {UserData} from '../types/user.ts';
import {AuthData} from '../types/auth.ts';
//import {dropToken, saveToken} from '../services/token.ts';

export const fetchFilms = createAsyncThunk<FilmType[], undefined, { state: State; extra: AxiosInstance }>
(
  'FILMS/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmType[]>(APIRoute.Films);
    return data;
  });

export const fetchPromoFilm = createAsyncThunk<
  FilmType,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('FILM/fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmType>(APIRoute.Promo);
    return data;
  });

export const fetchFilm = createAsyncThunk<FilmType, string, { state: State; extra: AxiosInstance }>
('FILM/fetchFilm',
  async (id, { extra: api }) => {
    const { data } = await api.get<FilmType>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<
  Review[],
  string,
  {
    state: State;
    extra: AxiosInstance;
  }
>(
  'FILM/fetchReviews',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${filmId}`);
    return data;
  });

export const login = createAsyncThunk<
  UserData,
  AuthData,
  {
    state: State;
    extra: AxiosInstance;
  }
>(
  'USER/login',
  async ({ email, password }, { extra: api }) => {
    const {
      data:  user
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    //saveToken(user.token);
    return user;
  }
);

export const checkAuth = createAsyncThunk<
    UserData,
    undefined,
    {
        state: State;
        extra: AxiosInstance;
    }
>(
  'USER/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const logout = createAsyncThunk<
    void,
    undefined,
    {
      state: State;
      extra: AxiosInstance;
    }
>('USER/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  //dropToken();
});

export const clearErrorAction = createAsyncThunk('game/clearError', () => {
  //setTimeout(() => store.dispatch(setError(null)), showErrorTimeout);
});

export const fetchSimilarFilms = createAsyncThunk<
    FilmType[],
    string,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>(
  'FILM/fetchSimilarFilms',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<FilmType[]>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);
    return data;
  });

export const postReview = createAsyncThunk<
  Review,
  {
    id: string;
    rating: number;
    comment: string;
  },
  {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }
>(
  'data/postFilmReview',
  async ({ id, rating, comment }, { extra: api }) => {
    const {data} = await api.post<Review>(`${APIRoute.Reviews}/${id}`, {
      rating: rating,
      comment: comment,
    });
    return data;
  });
