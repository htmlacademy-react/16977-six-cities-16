import { Comments } from '../../../../types/comments.ts';
import getPercentRating from '../../../../utils/helpers/get-percent-rating.ts';

function ReviewsItem({ commentsItem }: { commentsItem: Comments }): JSX.Element {
  const { user, comment, rating } = commentsItem;

  const percentRating = getPercentRating(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt={user.name} />
        </div>

        <span className="reviews__user-name">{user.name}</span>
      </div>

      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${percentRating}%` }}></span>

            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <p className="reviews__text">
          {comment}
        </p>

        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}

function ReviewsList({ comments }: { comments: Comments[] }): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((commentsItem) => (
        <ReviewsItem key={commentsItem.id} commentsItem={commentsItem} />
      ))}
    </ul>
  );
}

export default ReviewsList;
