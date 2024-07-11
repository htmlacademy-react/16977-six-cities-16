import FavoritesLocationsItem from "../favorites-locations-item/favorites-locations-item";

function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesLocationsItem />
    </ul>
  );
}

export default FavoritesList;
