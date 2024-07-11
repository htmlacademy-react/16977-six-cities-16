import FavoritesLocations from "../favorites-locations/favorites-locations";
import FavoritesPlaces from "../favorites-places/favorites-places";

function FavoritesLocationsItem(): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <FavoritesLocations />

      <FavoritesPlaces />
    </li>
  );
}

export default FavoritesLocationsItem;
