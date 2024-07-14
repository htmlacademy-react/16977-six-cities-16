const placesOptions = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

function PlaceOption({ active, name }: { active: boolean; name: string }): JSX.Element {
  const classNamePlaceOption = active ? 'places__option  places__option--active' : 'places__option';

  return (
    <li className={classNamePlaceOption} tabIndex={0}>{name}</li>
  );
}

function PlacesSorting(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>

      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className="places__options places__options--custom places__options--opened">
        {placesOptions.map((option) => (
          <PlaceOption active={false} name={option} key={option} />
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
