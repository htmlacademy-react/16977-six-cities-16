import FavoritesLocations from '../favorites-locations/favorites-locations.tsx';
import FavoritesPlaces from '../favorites-places/favorites-places.tsx';

function FavoritesLocationsItem(): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <FavoritesLocations />

      <FavoritesPlaces />
    </li>
  );
}

export default FavoritesLocationsItem;
