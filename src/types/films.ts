import { Genres } from '../consts.ts';

export type FilmType = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  previewImage: string;
  previewVideoLink: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: Genres;
  released: number;
  isFavorite: boolean;
};

export type PromoFilmType = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: Genres;
  released: number;
  isFavorite: boolean;
};

export type Review = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
};
