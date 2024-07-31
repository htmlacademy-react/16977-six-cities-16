import { PLACES_OPTIONS } from '../../../../utils/constants/constants.ts';

type PlaceOption = {
  active?: boolean;
  name: string;
};

function PlaceOption({ active = false, name }: PlaceOption): JSX.Element {
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
        {PLACES_OPTIONS.map((option) => (
          <PlaceOption name={option} key={option} />
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
