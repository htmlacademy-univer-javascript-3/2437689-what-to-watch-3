import {ReducerName} from '../../consts.ts';
import {State} from "../../types/types.ts";

export const getAvatar = (state: State) => state[ReducerName.USER].userAvatar;
export const getAuthStatus = (state: State) => state[ReducerName.USER].authorizationStatus;
