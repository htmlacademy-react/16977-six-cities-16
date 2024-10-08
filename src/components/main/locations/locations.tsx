import { Link } from 'react-router-dom';
import { CITY_NAMES } from '../../../utils/constants/constants.ts';
import { cityNameToLowerCase } from '../../../utils/helpers/common.ts';

type LocationsItem = {
  city: string;
}

function LocationsItem({ city }: LocationsItem): JSX.Element {
  const currentActiveCity = 'Paris';
  const classNameLocationsItemLink = city === currentActiveCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';

  return (
    <li className="locations__item">
      <Link className={classNameLocationsItemLink} to={cityNameToLowerCase(city)}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

function Locations(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITY_NAMES.map((city) => <LocationsItem city={city} key={city} />)}
        </ul>
      </section>
    </div>
  );
}

export default Locations;
