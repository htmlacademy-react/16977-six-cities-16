import Header from '../../components/header/header.tsx';
import CommonMap from '../../components/main/common-map/common-map.tsx';
import Locations from '../../components/main/locations/locations.tsx';
import PlaceCard from '../../components/main/place/place-card/place-card.tsx';
import PlaceHeader from '../../components/main/place/place-header/place-header.tsx';
import PlacesSorting from '../../components/main/place/places-sorting/places-sorting.tsx';

function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header isVisibleNavigation={true} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Locations />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>

              <PlaceHeader />
              <PlacesSorting />

              <div className="cities__places-list places__list tabs__content">
                <PlaceCard classNameCard={'cities__card'} classNameImageWrapper={'cities__card'} />
              </div>
            </section>

            <div className="cities__right-section">
              <CommonMap classNameMap={'cities__map'} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
