import {setError} from '../store/actions.ts';
import {store} from '../store';
import {clearErrorAction} from './api-actions.ts';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
