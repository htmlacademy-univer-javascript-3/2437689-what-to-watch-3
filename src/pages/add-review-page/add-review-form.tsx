import {useState, FormEvent, useRef, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import {postReview} from '../../services/api-actions.ts';
import RatingItem from './rating-item.tsx';

export function AddReviewForm(): JSX.Element {
  const [filmRating, setFilmRating] = useState(0);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state.film);
  if (!film) {
    return <NotFoundPage />;
  }
  const doOnSubmit = (rating: number, comment: string) => {
    dispatch(postReview({ id: film.id, rating, comment }));
    navigate(`/films/${film.id}`);
  };
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (filmRating && commentRef.current?.value) {
      doOnSubmit(filmRating, commentRef.current.value);
    }
  };
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilmRating(Number(evt.target.value));
  };
  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleFormSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {Array.from({ length: 10 }, (_, i) => i + 1)
            .reverse()
            .map((number) => <RatingItem key={number} number={number} handleInputChange={handleInputChange} />)}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          ref={commentRef}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          minLength={50}
          maxLength={400}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={!filmRating || !commentRef.current?.value || commentRef.current?.value.length < 50 || commentRef.current?.value.length > 400}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
