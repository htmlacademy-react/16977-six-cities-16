import { useState, ChangeEvent } from 'react';
import { MIN_REVIEW_CHARACTERS, reviewsFormRatingStars } from '../../../../utils/constants/constants.ts';

type OnChangeInputHandler = (evt: ChangeEvent<HTMLInputElement>) => void;
type OnChangeTextareaHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => void;

type ReviewsFormRatingStar = {
  value: string;
  title: string;
  onRatingInputChangeHandler: OnChangeInputHandler;
};

type ReviewsCommentField = {
  onReviewCommentFieldChange: OnChangeTextareaHandler;
  reviewText: string;
};

function ReviewsFormRatingStar({ value, title, onRatingInputChangeHandler }: ReviewsFormRatingStar): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onRatingInputChangeHandler} />

      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

function ReviewsFormRating({ onRatingInputChangeHandler }: { onRatingInputChangeHandler: OnChangeInputHandler }): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {reviewsFormRatingStars && reviewsFormRatingStars.map((ratingStar) => <ReviewsFormRatingStar key={ratingStar.value} value={ratingStar.value} title={ratingStar.title} onRatingInputChangeHandler={onRatingInputChangeHandler} />)}
    </div>
  );
}

function ReviewsCommentField({ onReviewCommentFieldChange, reviewText }: ReviewsCommentField) {
  return (
    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onReviewCommentFieldChange} value={reviewText}></textarea>
  );
}

function ReviewsForm(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');

  const handleRatingInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const ratingValue = Number(evt.target.value);

    setRating(ratingValue);
  };

  const handleReviewCommentFieldChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const reviewCommentFieldValue = evt.target.value;

    setReviewText(reviewCommentFieldValue);
  };

  const conditionDisplaySubmitButton = !(Boolean(rating) && (reviewText.length >= MIN_REVIEW_CHARACTERS));

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <ReviewsFormRating onRatingInputChangeHandler={handleRatingInputChange} />
      <ReviewsCommentField onReviewCommentFieldChange={handleReviewCommentFieldChange} reviewText={reviewText} />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">{MIN_REVIEW_CHARACTERS} characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled={conditionDisplaySubmitButton}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
