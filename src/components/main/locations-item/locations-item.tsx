function LocationsItem({ city, key }: { city: string, key: string }): JSX.Element {
  return (
    <li className="locations__item" key={key}>
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationsItem;
