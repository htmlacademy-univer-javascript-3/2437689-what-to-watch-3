import { Genres } from '../utils/consts.ts';

export type Film = {
  id: number;
  genre: Genres;
  year: string;
  title: string;
  text: string;
  director: string[];
  starring: string[];
  trailer: string;
  score: number;
  level: string;
  time: string;
  rewievs: ReviewType[];
};

export type ReviewType = {
  author: string;
  rating: number;
  comment: string;
  date: string;
};
