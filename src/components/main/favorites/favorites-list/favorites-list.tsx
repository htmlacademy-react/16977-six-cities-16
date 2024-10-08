import { Link } from 'react-router-dom';
import { FavoritesListType, FavoritesLocationsItemType, FavoritesPlacesType } from './favorites-list.types.ts';
import { PlaceCardImageOptions } from '../../../../utils/constants/constants.ts';
import { OfferDefault } from '../../../../types/offer-default.ts';
import { cityNameToLowerCase } from '../../../../utils/helpers/common.ts';
import PlaceCard from '../../place/place-card/place-card.tsx';

function FavoritesLocations({ cityName }: { cityName: string }): JSX.Element {
  const cityLink = `/${cityNameToLowerCase(cityName)}`;

  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={cityLink}>
          <span>{cityName}</span>
        </Link>
      </div>
    </div>
  );
}

function FavoritesPlaces({ currentFavoriteCity }: FavoritesPlacesType): JSX.Element {
  return (
    <div className="favorites__places">
      {currentFavoriteCity && currentFavoriteCity.map((favoriteCityPlace) => <PlaceCard key={favoriteCityPlace.id} typeCard={PlaceCardImageOptions.FAVORITE.name} offer={favoriteCityPlace} classNameCard={'favorites__card'} classNameImageWrapper={'favorites__image-wrapper'} />)}
    </div>
  );
}

function FavoritesLocationsItem({ favoritesCities, cityName }: FavoritesLocationsItemType): JSX.Element {
  const currentFavoriteCity = favoritesCities[cityName];

  return (
    <li className="favorites__locations-items">
      <FavoritesLocations cityName={cityName} />

      {currentFavoriteCity && <FavoritesPlaces key={cityName} currentFavoriteCity={currentFavoriteCity} />}
    </li>
  );
}

function FavoritesList({ favorites }: FavoritesListType): JSX.Element {
  const favoritesCities = [...favorites].reduce((collectionCitiesItems, currentFavorite) => {
    const currentFavoriteCityName = currentFavorite.city.name;

    collectionCitiesItems[currentFavoriteCityName] = [...favorites].filter((favorite) => favorite.city.name === currentFavoriteCityName);

    return collectionCitiesItems;
  }, {} as Record<string, OfferDefault[]>);

  const citiesNames = Object.keys(favoritesCities);

  return (
    <ul className="favorites__list">
      {citiesNames.map((cityName) => <FavoritesLocationsItem key={cityName} favoritesCities={favoritesCities} cityName={cityName} />)}
    </ul>
  );
}

export default FavoritesList;
