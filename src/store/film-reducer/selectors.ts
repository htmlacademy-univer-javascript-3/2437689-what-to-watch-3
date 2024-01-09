import {State} from '../../types/state.ts';
import {ReducerName} from '../../consts.ts';
import {FilmType, Review} from '../../types/films.ts';

export const getLoadedDataStatusFilm = (state: State): boolean => state[ReducerName.FILM].isDataLoading;
export const getFilm = (state: State): FilmType | null => state[ReducerName.FILM].film;
export const getReviews = (state: State): Review[] => state[ReducerName.FILM].reviews;
export const getSimilarFilms = (state: State): FilmType[] => state[ReducerName.FILM].similarFilms;
