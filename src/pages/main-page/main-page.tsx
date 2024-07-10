import Header from '../../components/header/header.tsx';
import CitiesMap from '../../components/main/cities-map/cities-map.tsx';
import Locations from '../../components/main/locations/locations.tsx';
import PlaceCard from '../../components/main/place-card/place-card.tsx';
import PlacesSorting from '../../components/main/places-sorting/places-sorting.tsx';

function MainPage(): JSX.Element {
  return (
    <>
      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>

          <Locations />

          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>

                <PlacesSorting />

                <div className="cities__places-list places__list tabs__content">
                  <PlaceCard />
                </div>
              </section>

              <div className="cities__right-section">
                <CitiesMap />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPage;
