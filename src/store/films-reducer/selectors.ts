import {State} from '../../types/state.ts';
import {FilmType} from '../../types/films.ts';
import {ReducerName} from '../../consts.ts';

export const getFilms = (state: State): FilmType[] => state[ReducerName.FILMS].films;
export const getFilmsCount = (state: State): number => state[ReducerName.FILMS].filmsCount;
export const getLoadedDataStatusFilms = (state: State): boolean => state[ReducerName.FILMS].isDataLoading;
export const getGenre = (state: State): string => state[ReducerName.FILMS].genre;
export const getFilmsByGenre = (state: State): FilmType[] => state[ReducerName.FILMS].filmsByGenre;

