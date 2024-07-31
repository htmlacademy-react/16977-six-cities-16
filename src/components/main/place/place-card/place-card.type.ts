import { OfferDefault } from '../../../../types/offer-default.ts';

type TypePlaceCardImage = {
  classNamePlaceImageWrapper: string;
  title: string;
  previewImage?: string;
  id: string;
  typeCard: 'default' | 'favorite';
}

type TypePlaceCard = {
  classNameCard: string;
  classNameImageWrapper: string;
  data: OfferDefault;
  typeCard: 'default' | 'favorite';
}

type TypePlaceCardMark = {
  isPremium: boolean;
}

type TypePlaceCardMarkPrice = {
  price: number;
  isFavorite: boolean;
}

type TypePlaceCardRating = {
  rating: number;
}

export type { TypePlaceCardImage, TypePlaceCard, TypePlaceCardMark, TypePlaceCardMarkPrice, TypePlaceCardRating };
