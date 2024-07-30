import { ListOffers } from '../../../../types/list-offers.ts';

type FavoritesListType = {
  favorites: ListOffers[];
};

type FavoritesLocationsItemType = {
  favoritesCities: Record<string, ListOffers[]>;
  cityName: string;
};

type FavoritesPlacesType = {
  currentFavoriteCity: ListOffers[];
}

export type { FavoritesListType, FavoritesLocationsItemType, FavoritesPlacesType };
