import {ReducerName} from '../../consts.ts';
import {State} from '../../types/types.ts';


export const getError = (state: State) => state[ReducerName.MAIN].error;
export const getPromo = (state: State) => state[ReducerName.MAIN].promoFilm;
export const getIsDataLoadingPromo = (state: State): boolean => state[ReducerName.MAIN].isDataLoading;
