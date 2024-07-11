import ReviewsItem from '../reviews-item/reviews-item.tsx';

function ReviewsList(): JSX.Element {
  return (
    <ul className="reviews__list">
      <ReviewsItem />
    </ul>
  );
}

export default ReviewsList;
