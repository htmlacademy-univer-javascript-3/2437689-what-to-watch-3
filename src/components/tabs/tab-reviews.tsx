import {Film} from '../../types/films';

type TabReviewsProps = {
  film: Film;
};

export function TabReviews({ film }: TabReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {film.rewievs.map((review) => (
          <div className="review" key="0">
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.author}</cite>
                <time className="review__date" dateTime="2015-11-18">
                  {review.date}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>

        ))}
      </div>
    </div>
  );
}
