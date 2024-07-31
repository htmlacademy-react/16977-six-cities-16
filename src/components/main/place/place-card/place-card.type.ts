import { OfferDefault } from '../../../../types/offer-default.ts';

type PlaceCardImageType = {
  classNamePlaceImageWrapper: string;
  title: string;
  previewImage?: string;
  id: string;
  typeCard: 'default' | 'favorite';
}

type PlaceCardType = {
  classNameCard: string;
  classNameImageWrapper: string;
  offer: OfferDefault;
  typeCard: 'default' | 'favorite';
  onPlaceCardMouseEnterHandler?: (offer: OfferDefault) => void;
  onPlaceCardMouseLeaveHandler?: () => void;
}

type PlaceCardMarkType = {
  isPremium: boolean;
}

type PlaceCardMarkPriceType = {
  price: number;
  isFavorite: boolean;
}

type PlaceCardRatingType = {
  rating: number;
}

export type { PlaceCardImageType, PlaceCardType, PlaceCardMarkType, PlaceCardMarkPriceType, PlaceCardRatingType };
