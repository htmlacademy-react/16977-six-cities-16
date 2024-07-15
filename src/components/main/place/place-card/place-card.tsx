import {
  TypePlaceCardImage,
  TypePlaceCard,
  TypePlaceCardMark,
  TypePlaceCardMarkPrice,
  TypePlaceCardRating
} from './place-card.type.ts';

import { MAX_RATING } from '../../../../utils/constants/constants.ts';

function PlaceCardMark({ isPremium }: TypePlaceCardMark) {
  return isPremium && (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function PlaceCardImage({
  classNamePlaceImageWrapper,
  title,
  previewImage
}: TypePlaceCardImage): JSX.Element {
  return (
    <div className={classNamePlaceImageWrapper}>
      <a href="#">
        <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
      </a>
    </div>
  );
}

function PlaceCardMarkPrice({ price, isFavorite }: TypePlaceCardMarkPrice): JSX.Element {
  const classNameBookmarkButton = `${isFavorite ? 'place-card__bookmark-button button  place-card__bookmark-button--active' : 'place-card__bookmark-button button'}`;

  return (
    <div className="place-card__price-wrapper">
      <div className="place-card__price">
        <b className="place-card__price-value">&euro;{price}</b>

        <span className="place-card__price-text">&#47;&nbsp;night</span>
      </div>

      <button className={classNameBookmarkButton} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>

        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
}

function PlaceCardRating({ rating }: TypePlaceCardRating): JSX.Element {
  const precentRating = Math.round((rating * 100) / MAX_RATING);

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: `${precentRating}% ` }}></span>

        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

function PlaceCard({
  data,
  classNameCard = 'cities__card',
  classNameImageWrapper = 'cities__image-wrapper'
}: TypePlaceCard): JSX.Element {
  const classNamePlaceCard = `${classNameCard} place-card`;
  const classNamePlaceImageWrapper = `${classNameImageWrapper} place-card__image-wrapper`;

  const { isPremium, title, previewImage, price, rating, type, isFavorite } = data;

  return (
    <article className={classNamePlaceCard}>
      <PlaceCardMark isPremium={isPremium} />
      <PlaceCardImage title={title} previewImage={previewImage} classNamePlaceImageWrapper={classNamePlaceImageWrapper} />

      <div className="place-card__info">
        <PlaceCardMarkPrice price={price} isFavorite={isFavorite} />
        <PlaceCardRating rating={rating} />

        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>

        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
