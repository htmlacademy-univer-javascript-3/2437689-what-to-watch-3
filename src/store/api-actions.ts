import {AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {APIRoute, SHOW_ERROR_TIMEOUT} from '../consts.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {setError} from './actions.ts';

import {AppDispatch, AuthData, FilmType, Review, State, UserData} from '../types/types.ts';

export const fetchFilms = createAsyncThunk<FilmType[], undefined, { state: State; extra: AxiosInstance }>
(
  'FILMS/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmType[]>(APIRoute.Films);
    return data;
  });

export const fetchFavoriteFilms = createAsyncThunk<FilmType[], undefined, {
    state: State;
    extra: AxiosInstance;
}>(
  'FILMS/fetchFavoriteFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmType[]>(APIRoute.Favorite);
    return data;
  }
);

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

export const changeFilmFavoriteStatus = createAsyncThunk<FilmType, { filmId: string; status: number }, {
    state: State;
    extra: AxiosInstance;
}>(
  'FILM/changeFilmFavoriteStatus',
  async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<FilmType>(`${APIRoute.Favorite}/${id}/${isFavorite}`);
    return data;
  }
);

export const fetchPromoFilm = createAsyncThunk<
    FilmType,
    undefined,
    {
        state: State;
        extra: AxiosInstance;
    }
>('MAIN/fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmType>(APIRoute.Promo);
    return data;
  });

export const changePromoFavoriteStatus = createAsyncThunk<FilmType, { filmId: string; status: number }, {
    state: State;
    extra: AxiosInstance;
}>(
  'MAIN/changePromoFavoriteStatus',
  async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<FilmType>(`${APIRoute.Favorite}/${id}/${isFavorite}`);
    return data;
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
    saveToken(user.token);
    return user;
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
  dropToken();
});

export const clearErrorAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => {
      dispatch(setError(null));
    }, SHOW_ERROR_TIMEOUT);
  }
);

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
  'postReview',
  async ({ id, rating, comment }, { extra: api }) => {
    const {data} = await api.post<Review>(`${APIRoute.Reviews}/${id}`, {
      rating: rating,
      comment: comment,
    });
    return data;
  });
