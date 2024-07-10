import { CITY_NAMES } from '../../../utils/constants/constants.ts';
import LocationsItem from '../locations-item/locations-item.tsx';

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
