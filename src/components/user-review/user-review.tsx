import {convertDate} from '../../utils/utils.ts';
import {Review} from '../../types/types.ts';

type UserReviewProps = {
  review: Review;
};

export default function UserReview({review}: UserReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime={review.date}>
            {convertDate(review.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
