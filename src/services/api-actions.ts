import {AxiosError, AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import {FilmType, PromoFilmType, Review} from '../types/films';
import {
    loadAllFilms,
    setDataLoadingStatus,
    loadPromoFilm,
    loadFilm,
    setError,
    requireAuthorization, loadSimilarFilms, loadReviews,
} from '../store/actions';
import {APIRoute, AuthorizationStatus, showErrorTimeout} from '../utils/consts';
import {UserData} from '../types/user.ts';
import {store} from "../store";
import {AuthData} from "../types/auth.ts";
import {dropToken, saveToken} from "./token.ts";

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
    .get<FilmType[]>(APIRoute.Films)
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
    .get<PromoFilmType>(APIRoute.Promo)
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
  await api.get<FilmType>(`${APIRoute.Films}/${id}`).then((res) => {
    dispatch(loadFilm(res.data));
  });
});

export const fetchReviewsByID = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'fetchReviewsById',
    async (filmId: string, { dispatch, extra: api }) => {
        await api.get<Review[]>(`${APIRoute.Reviews}/${filmId}`).then((res) => {
            dispatch(loadReviews(res.data));
        });
    });

export const fetchFilmByID = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
'fetchFilmById',
async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmType>(`${APIRoute.Films}/${filmId}`);
    dispatch(loadFilm(data));
});

export const loginAction = createAsyncThunk<
    void,
    AuthData,
    {
      dispatch: AppDispatch;
      state: State;
      extra: AxiosInstance;
    }
>(
    'user/login',
    async ({ login: email, password }, { dispatch, extra: api }) => {
        const {
            data: { token },
        } = await api.post<UserData>(APIRoute.Login, { email, password });
        saveToken(token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }
);

export const checkAuthAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
    try {
        await api.get(APIRoute.Login);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
});

export const logoutAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
        await api.delete(APIRoute.Logout);
        dropToken();
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
);

export const clearErrorAction = createAsyncThunk('game/clearError', () => {
    setTimeout(() => store.dispatch(setError(null)), showErrorTimeout);
});



export const fetchSimilarByID = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
'fetchSimilarById',
async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmType[]>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);
    dispatch(loadSimilarFilms(data));
});

/*export const fetchSimilarFilmsAction = createAsyncThunk<
    FilmCardType[],
    string,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('loadSimilarFilms', async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmCardType[]>(APIRoute.Similar(_arg));
    return data;
});*/

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
}>(
'data/postFilmReview',
 async ({ id, rating, comment }, { extra: api }) => {
         const {data} = await api.post<Review>(`${APIRoute.Reviews}/${id}`, {
             rating: rating,
             comment: comment,
         });
         return data;
});
