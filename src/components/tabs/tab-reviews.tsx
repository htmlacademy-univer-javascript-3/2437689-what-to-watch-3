import {FilmType} from '../../types/films';
import {Comment} from '../../types/films';
import UserReview from './user-review';

type TabReviewsProps = {
  film: FilmType;
};

export function TabReviews({ film }: TabReviewsProps): JSX.Element {
  const comments: Comment[] = [];
  const reviewsCount = comments.length;
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(0, Math.trunc(reviewsCount / 2)).map((review) => (
          <UserReview key={film.id} review={review} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {comments
          .slice(Math.trunc(reviewsCount / 2), reviewsCount)
          .map((review) => (
            <UserReview key={film.id} review={review} />
          ))}
      </div>
    </div>
  );
}
