import { Link } from 'react-router-dom';

import {
  PlaceCardImageType,
  PlaceCardType,
  PlaceCardMarkType,
  PlaceCardMarkPriceType,
  PlaceCardRatingType
} from './place-card.type.ts';

import { PlaceCardImageOptions } from '../../../../utils/constants/constants.ts';
import getPercentRating from '../../../../utils/helpers/get-percent-rating.ts';

function PlaceCardMark({ isPremium }: PlaceCardMarkType) {
  return isPremium && (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function PlaceCardImage({
  classNamePlaceImageWrapper,
  title,
  previewImage,
  id,
  typeCard
}: PlaceCardImageType): JSX.Element {
  return (
    <div className={classNamePlaceImageWrapper}>
      <Link to={`/offer/${id}`}>
        <img
          className="place-card__image"
          src={previewImage}
          width={typeCard === PlaceCardImageOptions.DEFAULT.name ? PlaceCardImageOptions.DEFAULT.width : PlaceCardImageOptions.FAVORITE.width}
          height={typeCard === PlaceCardImageOptions.DEFAULT.name ? PlaceCardImageOptions.DEFAULT.height : PlaceCardImageOptions.FAVORITE.height}
          alt={title}
        />
      </Link>
    </div>
  );
}

function PlaceCardMarkPrice({ price, isFavorite }: PlaceCardMarkPriceType): JSX.Element {
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

function PlaceCardRating({ rating }: PlaceCardRatingType): JSX.Element {
  const percentRating = getPercentRating(rating);

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: `${percentRating}% ` }}></span>

        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

function PlaceCard({
  offer,
  classNameCard = 'cities__card',
  classNameImageWrapper = 'cities__image-wrapper',
  typeCard,
  onPlaceCardMouseEnterHandler,
  onPlaceCardMouseLeaveHandler
}: PlaceCardType): JSX.Element {
  const classNamePlaceCard = `${classNameCard} place-card`;
  const classNamePlaceImageWrapper = `${classNameImageWrapper} place-card__image-wrapper`;

  const { isPremium, title, previewImage, price, rating, type, isFavorite, id } = offer;

  return (
    <article className={classNamePlaceCard} onMouseEnter={() => onPlaceCardMouseEnterHandler?.(offer)} onMouseLeave={onPlaceCardMouseLeaveHandler}>
      <PlaceCardMark isPremium={isPremium} />
      <PlaceCardImage id={id} title={title} previewImage={previewImage} classNamePlaceImageWrapper={classNamePlaceImageWrapper} typeCard={typeCard} />

      <div className="place-card__info">
        <PlaceCardMarkPrice price={price} isFavorite={isFavorite} />
        <PlaceCardRating rating={rating} />

        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>

        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
