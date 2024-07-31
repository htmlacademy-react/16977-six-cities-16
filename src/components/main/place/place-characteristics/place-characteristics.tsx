
import { OfferExtended } from '../../../../types/offer-extended.ts';
import getPercentRating from '../../../../utils/helpers/get-percent-rating.ts';

type PlaceCharacteristicHost = {
  description: string;
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}

function PlaceCharacteristicMark(): JSX.Element {
  return (
    <div className="offer__mark">
      <span>Premium</span>
    </div>
  );
}

function PlaceCharacteristicName({ title }: { title: string }) {
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">{title}</h1>

      <button className="offer__bookmark-button button" type="button">
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>

        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
}

function PlaceCharacteristicRating({ rating }: { rating: number }): JSX.Element {
  const percentRating = getPercentRating(rating);

  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{ width: `${percentRating}% ` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>

      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
}

function PlaceCharacteristicFeatures({ type, bedrooms, maxAdults }: { type: string; bedrooms: number; maxAdults: number }): JSX.Element {
  const firstCharType = type.charAt(0).toLocaleUpperCase();
  const restOfType = type.slice(1);
  const entireType = firstCharType + restOfType;

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{entireType}</li>

      <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>

      <li className="offer__feature offer__feature--adults">Max {maxAdults} adults</li>
    </ul>
  );
}

function PlaceCharacteristicPrice({ price }: { price: number }): JSX.Element {
  return (
    <div className="offer__price">
      <b className="offer__price-value">&euro;{price}</b>

      <span className="offer__price-text">&nbsp;night</span>
    </div>
  );
}

function PlaceCharacteristicInsideItem({ goodsItem }: { goodsItem: string }): JSX.Element {
  return (
    <li className="offer__inside-item">{goodsItem}</li>
  );
}

function PlaceCharacteristicInside({ goods }: { goods: string[] }): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>

      <ul className="offer__inside-list">
        {goods && goods.map((goodsItem) => <PlaceCharacteristicInsideItem key={goodsItem} goodsItem={goodsItem} />)}
      </ul>
    </div>
  );
}

function PlaceCharacteristicHost({ description, host }: PlaceCharacteristicHost): JSX.Element {
  const { name, avatarUrl, isPro } = host;

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>

      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt={name} />
        </div>

        <span className="offer__user-name">{name}</span>

        {isPro && <span className="offer__user-status">Pro</span>}
      </div>

      <div className="offer__description">
        <p className="offer__text">
          {description}
        </p>
      </div>
    </div>
  );
}

function PlaceCharacteristics({ offer }: { offer: OfferExtended }): JSX.Element {
  const { isPremium, title, rating, type, bedrooms, maxAdults, price, goods, description, host } = offer;
  return (
    <>
      {isPremium && <PlaceCharacteristicMark />}
      <PlaceCharacteristicName title={title} />
      <PlaceCharacteristicRating rating={rating} />
      <PlaceCharacteristicFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
      <PlaceCharacteristicPrice price={price} />
      <PlaceCharacteristicInside goods={goods} />
      <PlaceCharacteristicHost description={description} host={host} />
    </>
  );
}

export default PlaceCharacteristics;
