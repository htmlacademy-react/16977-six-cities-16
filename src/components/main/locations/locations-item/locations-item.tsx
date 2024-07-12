function LocationsItem({ city }: { city: string }): JSX.Element {
  const currentActiveCity: string = 'Amsterdam';
  const classNameLocationsItemLink: string = city === currentActiveCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';

  return (
    <li className="locations__item">
      <a className={classNameLocationsItemLink} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationsItem;
