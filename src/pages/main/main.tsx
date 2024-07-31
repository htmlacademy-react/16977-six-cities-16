import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { AuthorizationStatus } from '../../utils/constants/constants.ts';

import { AuthorizedUser } from '../../types/authorized-user.ts';
import { OfferDefault } from '../../types/offer-default.ts';

import Header from '../../components/header/header.tsx';
import CommonMap from '../../components/main/common-map/common-map.tsx';
import Locations from '../../components/main/locations/locations.tsx';
import PlaceHeader from '../../components/main/place/place-header/place-header.tsx';
import PlacesSorting from '../../components/main/place/places-sorting/places-sorting.tsx';
import PlacesCardList from '../../components/main/place/places-card-list/places-card-list.tsx';

type Main = {
  countOffersMainPage: number;
  authorizationStatus: AuthorizationStatus;
  user: AuthorizedUser;
  favoritesCount: number;
  offers: OfferDefault[];
}

function Main({
  countOffersMainPage,
  authorizationStatus,
  user,
  favoritesCount,
  offers,
}: Main): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferDefault | null | undefined>(null);

  const handlePlaceCardMouseEnter = (offer: OfferDefault) => {
    if (offer) {
      setActiveCard(offer);
    }
  };

  const handlePlaceCardMouseLeave = () => {
    if (activeCard) {
      setActiveCard(null);
    }
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header authorizationStatus={authorizationStatus} user={user} favoritesCount={favoritesCount} isVisibleNavigation isActive />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Locations />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlaceHeader />
              <PlacesSorting />

              <PlacesCardList
                offers={offers}
                countOffersMainPage={countOffersMainPage}
                handlePlaceCardMouseEnter={handlePlaceCardMouseEnter}
                handlePlaceCardMouseLeave={handlePlaceCardMouseLeave}
              />
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
