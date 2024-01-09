import {combineReducers} from '@reduxjs/toolkit';
import {ReducerName} from '../consts.ts';
import {filmsReducer} from './films-reducer/films-reducer';
import {filmReducer} from './film-reducer/film-reducer';
import {mainReducer} from './main-reducer/main-reducer';
import {userReducer} from './user-reducer/user-reducer';

export const rootReducer = combineReducers({
  [ReducerName.FILMS]: filmsReducer.reducer,
  [ReducerName.FILM]: filmReducer.reducer,
  [ReducerName.MAIN]: mainReducer.reducer,
  [ReducerName.USER]: userReducer.reducer,
});
