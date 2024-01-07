import {Review} from '../../types/films';
import UserReview from './user-review';

type TabReviewsProps = {
  reviews: Review[]
};

function TabReviews({ reviews }: TabReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => <UserReview key={review.id} review={review} />)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2).map((review) => <UserReview key={review.id} review={review} />)}
      </div>
    </div>
  );
}

export default TabReviews;
