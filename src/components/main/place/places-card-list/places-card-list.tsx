import { OfferDefault } from '../../../../types/offer-default.ts';
import { PlaceCardImageOptions } from '../../../../utils/constants/constants.ts';
import PlaceCard from '../../../../components/main/place/place-card/place-card.tsx';

type PlacesCardList = {
  countOffersMainPage: number;
  offers: OfferDefault[];
  handlePlaceCardMouseEnter: (offer: OfferDefault) => void;
  handlePlaceCardMouseLeave: () => void;
}

function PlacesCardList({ offers, countOffersMainPage, handlePlaceCardMouseEnter, handlePlaceCardMouseLeave }: PlacesCardList): JSX.Element {
  const offersCollection = [...offers]
    .slice(0, countOffersMainPage)
    .map((offer) => <PlaceCard key={offer.id} typeCard={PlaceCardImageOptions.DEFAULT.name} offer={offer} classNameCard={'cities__card'} classNameImageWrapper={'cities__image-wrapper'} onPlaceCardMouseEnterHandler={handlePlaceCardMouseEnter} onPlaceCardMouseLeaveHandler={handlePlaceCardMouseLeave} />);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersCollection}
    </div>
  );
}

export default PlacesCardList;
