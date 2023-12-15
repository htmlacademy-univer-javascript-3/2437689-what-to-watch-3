import { createAction } from '@reduxjs/toolkit';
import { Genres } from '../utils/consts.ts';

export const changeGenre = createAction<{ genre: Genres }>('changeGenre');

export const getGenreFilms = createAction<{ genre: Genres }>('getGenreFilms');
