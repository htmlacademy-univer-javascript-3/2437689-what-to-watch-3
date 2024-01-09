import {State} from '../../types/state.ts';
import {ReducerName} from '../../consts.ts';

export const getAvatar = (state: State) => state[ReducerName.USER].userAvatar;
export const getAuthStatus = (state: State) => state[ReducerName.USER].authorizationStatus;
