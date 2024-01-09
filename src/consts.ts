export const hoverFilmCardTime = 1000;
export const visibleFilmCardCount = 8;
export const showErrorTimeout = 2000;

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Similar = '/similar',
  Promo = '/promo'
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
  KidsFamily = 'Kids & Family',
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
  Logout = '/logout',
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

export const genres: Genres[] = [
  Genres.All,
  Genres.Comedy,
  Genres.Crime,
  Genres.Adventure,
  Genres.Drama,
  Genres.Action,
  Genres.Fantasy,
  Genres.Romance,
  Genres.SciFi,
  Genres.Thriller,
];

export enum ReducerName {
  USER = 'USER',
  FILM = 'FILM',
  FILMS = 'FILMS',
  MAIN = 'MAIN',
}
