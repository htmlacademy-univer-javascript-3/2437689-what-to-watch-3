import {clearErrorAction} from '../store/api-actions.ts';
import {setError} from '../store/actions.ts';
import {store} from '../store';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
