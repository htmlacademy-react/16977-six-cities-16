import { ListOffers } from '../../../../types/list-offer.ts';

type TypePlaceCardImage = {
  classNamePlaceImageWrapper: string;
  title: string;
  previewImage: string;
}

type TypePlaceCard = {
  classNameCard: string;
  classNameImageWrapper: string;
  data: ListOffers;
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
