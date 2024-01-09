import {clearErrorAction} from '../store/api-actions.ts';
import {setError} from '../store/actions.ts';
import {store} from '../store';

export const errorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
