import { useAppDispatch } from '../components/hooks/hooks';
import {
  setFilmsDisplayed,
  setCount,
  setFilmByGenre,
  setGenre,
} from '../store/actions';
import { Genres } from '../consts.ts';

export function ReturnToMainPage() {
  const dispatch = useAppDispatch();
  dispatch(setFilmByGenre({ genre: Genres.All }));
  dispatch(setCount({ count: 8 }));
  dispatch(setGenre(Genres.All));
  dispatch(setFilmsDisplayed());
}
