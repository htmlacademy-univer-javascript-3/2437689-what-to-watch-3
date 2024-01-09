import {useAppDispatch, useAppSelector} from '../hooks/hooks.ts';
import {setError} from '../../store/actions.ts';
import './error-message.css';
import {getError} from '../../store/main-reducer/selectors.ts';

export default function ErrorMessage() {
  const error = useAppSelector(getError);
  const dispatch = useAppDispatch();

  return error ? (
    <div className="error-message">
      {error}
      <button className="close-button" onClick={() => dispatch(setError(null))}>
        Close
      </button>
    </div>
  ) : null;
}
