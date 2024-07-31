import { OfferDefault } from './offer-default.ts';

type OfferCharacteristicGoods = string[];

type OfferCharacteristicHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type OfferCharacteristicImages = string[];

type OfferCharacteristics = {
  description: string;
  bedrooms: number;
  goods: OfferCharacteristicGoods;
  host: OfferCharacteristicHost;
  images: OfferCharacteristicImages;
  maxAdults: number;
}

type OfferExtended = OfferDefault & OfferCharacteristics;

export type { OfferExtended };
