import { ChangeEvent, Fragment } from 'react';

type RatingItemProps = {
  number: number;
  handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingItem({ number, handleInputChange }: RatingItemProps): React.ReactElement {
  return (
    <Fragment key={number}>
      <input
        key={`star-${number}`}
        onChange={handleInputChange}
        className="rating__input"
        id={`star-${number}`}
        type="radio"
        name="rating"
        value={`${number}`}
      />
      <label
        className="rating__label"
        htmlFor={`star-${number}`}
      >
        Rating ${number}
      </label>
    </Fragment>
  );
}

export default RatingItem;
