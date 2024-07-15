import { AuthorizedUser } from '../../types/authorized-user.ts';
import { ListOffers } from '../../types/list-offer.ts';

import Header from '../../components/header/header.tsx';
import CommonMap from '../../components/main/common-map/common-map.tsx';
import Locations from '../../components/main/locations/locations.tsx';
import PlaceCard from '../../components/main/place/place-card/place-card.tsx';
import PlaceHeader from '../../components/main/place/place-header/place-header.tsx';
import PlacesSorting from '../../components/main/place/places-sorting/places-sorting.tsx';

type Main = {
  countOffersMainPage: number;
  user: AuthorizedUser;
  favoritesCount: number;
  offers: ListOffers[];
}

function Main({
  countOffersMainPage,
  user,
  favoritesCount,
  offers,
}: Main): JSX.Element {
  const listOffers = [...offers].slice(0, countOffersMainPage).map((offer) => <PlaceCard key={offer.id} data={offer} classNameCard={'cities__card'} classNameImageWrapper={'cities__image-wrapper'} />
  );

  return (
    <div className="page page--gray page--main">
      <Header user={user} favoritesCount={favoritesCount} isVisibleNavigation />

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
                {listOffers}
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

export default Main;
