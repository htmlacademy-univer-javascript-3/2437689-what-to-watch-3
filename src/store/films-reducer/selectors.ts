import {ReducerName} from '../../consts.ts';
import {FilmType, State} from '../../types/types.ts';

export const getFilms = (state: State): FilmType[] => state[ReducerName.FILMS].films;
export const getFilmsCount = (state: State): number => state[ReducerName.FILMS].filmsCount;
export const getIsDataLoadingFilms = (state: State): boolean => state[ReducerName.FILMS].isDataLoading;
export const getGenre = (state: State): string => state[ReducerName.FILMS].genre;
export const getFilmsByGenre = (state: State): FilmType[] => state[ReducerName.FILMS].filmsByGenre;

export const getMyListCount = (state: State) => state[ReducerName.FILMS].myListFilmsCount;
export const getMyListFilms = (state: State) => state[ReducerName.FILMS].myListFilms;
