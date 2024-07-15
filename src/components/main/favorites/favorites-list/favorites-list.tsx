import FavoritesCard from '../favorites-card/favorites-card.tsx';

function FavoritesLocations(): JSX.Element {
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>Cologne</span>
        </a>
      </div>
    </div>
  );
}

function FavoritesPlaces(): JSX.Element {
  return (
    <div className="favorites__places">
      <FavoritesCard />
    </div>
  );
}

function FavoritesLocationsItem(): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <FavoritesLocations />

      <FavoritesPlaces />
    </li>
  );
}

function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesLocationsItem />
    </ul>
  );
}

export default FavoritesList;
