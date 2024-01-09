import {Genres} from '../consts.ts';
import {FilmType} from "../types/types.ts";

export const convertTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};

export const convertDate = (inputDateStr: string) => {
  const inputDate = new Date(inputDateStr);
  return inputDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
};

export const getFilmsGenres = (films: FilmType[]): Genres[] => [Genres.All, ...new Set(films.map((x) => x.genre))];
