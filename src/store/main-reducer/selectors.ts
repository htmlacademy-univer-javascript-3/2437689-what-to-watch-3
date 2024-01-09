import {State} from '../../types/state.ts';
import {ReducerName} from '../../consts.ts';


export const getError = (state: State) => state[ReducerName.MAIN].error;
export const getPromo = (state: State) => state[ReducerName.MAIN].promoFilm;
export const getLoadedDataStatusMain = (state: State): boolean => state[ReducerName.MAIN].isDataLoading;
