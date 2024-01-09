import { createAction } from '@reduxjs/toolkit';
import {Genres} from '../consts.ts';
import {FilmType, Review} from '../types/types.ts';

export const setGenre = createAction<Genres>('setGenre');
export const setError = createAction<string | null>('setError');
export const loadReviews = createAction<Review[]>('loadReviews');
export const loadSimilarFilms = createAction<FilmType[]>('loadSimilarFilms');
export const showMore = createAction('showMore');
export const setMyListCount = createAction<number>('setMyListCount');
