type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type OfferCity = {
  name: string;
  location: OfferLocation;
};

type OfferDefault = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage?: string;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type { OfferDefault };
