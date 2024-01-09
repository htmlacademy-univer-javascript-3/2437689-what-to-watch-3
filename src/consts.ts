export const HOVER_FILM_TIME_CARD = 1000;
export const SHOW_ERROR_TIMEOUT = 5000;
export const RE_EMAIL_VALID = /^\S+@\S+\.\S+$/;
export const RE_PASSWORD_VALID = /^(?=^[a-zA-Z0-9]{2,}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;
export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 400;

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Similar = '/similar',
  Promo = '/promo',
  Favorite = '/favorite'
}

export enum Genres {
  All = 'All genres',
  Drama = 'Drama',
  Action = 'Action',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Fantasy = 'Fantasy',
  Documentary = 'Documentary',
  Horror = 'Horror',
  Romance = 'Romance',
  Adventure = 'Adventure',
  Thriller = 'Thriller',
  SciFi = 'Sci-Fi',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum TabType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const tabTypes: TabType[] = [
  TabType.Overview,
  TabType.Details,
  TabType.Reviews,
];

export enum ReducerName {
  USER = 'USER',
  FILM = 'FILM',
  FILMS = 'FILMS',
  MAIN = 'MAIN',
}
