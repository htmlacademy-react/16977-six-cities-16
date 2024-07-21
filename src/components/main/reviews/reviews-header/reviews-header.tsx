function ReviewsHeader({ commentsLength }: { commentsLength: number }): JSX.Element {
  return (
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsLength}</span></h2>
  );
}

export default ReviewsHeader;
