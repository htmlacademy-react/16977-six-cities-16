import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import user from '../../mocks/user.ts';
import favorites from '../../mocks/favorites.ts';
import listOffers from '../../mocks/list-offers.ts';
import offer from '../../mocks/offer.ts';
import comments from '../../mocks/comments.ts';

import { COUNT_OFFERS_MAIN_PAGE, COUNT_OFFERS_OFFER_PAGE, AppRoute, AuthorizationStatus } from '../../utils/constants/constants.ts';

import Main from '../../pages/main/main.tsx';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import ScrollToTop from '../../utils/helpers/scroll-to-top.ts';
import PrivateRoute from '../private-route/private-route.tsx';

function App(): JSX.Element {
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
