import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AuthorizedUser } from '../../types/authorized-user.ts';
import { ListOffers } from '../../types/list-offers.ts';
import { OfferItem } from '../../types/offer-item.ts';
import { Comments } from '../../types/comments.ts';

import { COUNT_OFFERS_MAIN_PAGE, COUNT_OFFERS_OFFER_PAGE, AppRoute, AuthorizationStatus } from '../../utils/constants/constants.ts';

import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import Profile from '../../pages/profile/profile.tsx';
import ScrollToTop from '../../utils/helpers/scroll-to-top.ts';
import PrivateRoute from '../private-route/private-route.tsx';

type App = {
  user: AuthorizedUser;
  favorites: ListOffers[];
  listOffers: ListOffers[];
  offer: OfferItem;
  comments: Comments[];
};

function App(props: App): JSX.Element {
  const { user, favorites, listOffers, offer, comments } = props;
  const favoriteCount = favorites.length;
  const auth = AuthorizationStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path={AppRoute.Main} element={
            <Main
              countOffersMainPage={COUNT_OFFERS_MAIN_PAGE}
              authorizationStatus={auth}
              user={user}
              favoritesCount={favoriteCount}
              offers={listOffers}
            />
          }
          />

          <Route path={AppRoute.Login} element={
            <PrivateRoute authorizationStatus={auth} page={AppRoute.Login}>
              <Login
                authorizationStatus={auth}
                user={user}
                favoritesCount={favoriteCount}
              />
            </PrivateRoute>
          }
          />

          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={auth} page={AppRoute.Favorites}>
              <Favorites
                authorizationStatus={auth}
                user={user}
                favoritesCount={favoriteCount}
                favorites={favorites}
              />
            </PrivateRoute>
          }
          />

          <Route path={AppRoute.Offer} element={
            <Offer
              authorizationStatus={auth}
              countOffersOfferPage={COUNT_OFFERS_OFFER_PAGE}
              user={user}
              favoritesCount={favoriteCount}
              offer={offer}
              offers={listOffers}
              comments={comments}
            />
          }
          />

          <Route path={AppRoute.Profile} element={
            <PrivateRoute authorizationStatus={auth} page={AppRoute.Profile}>
              <Profile
                authorizationStatus={auth}
                favoritesCount={favoriteCount}
                user={user}
              />
            </PrivateRoute>
          }
          />

          <Route path={AppRoute.NotFound} element={
            <NotFound />
          }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
