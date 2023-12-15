import {useAppDispatch, useAppSelector} from '../hooks/hooks.ts';
import {setError} from '../../store/actions.ts';
import './error-message.css';

export default function ErrorMessage() {
  const error = useAppSelector((state) => state.error);
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
