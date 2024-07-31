import { OfferDefault } from '../../../../types/offer-default.ts';

type FavoritesListType = {
  favorites: OfferDefault[];
};

type FavoritesLocationsItemType = {
  favoritesCities: Record<string, OfferDefault[]>;
  cityName: string;
};

type FavoritesPlacesType = {
  currentFavoriteCity: OfferDefault[];
}

export type { FavoritesListType, FavoritesLocationsItemType, FavoritesPlacesType };
