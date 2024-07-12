import listOffers from '../../mocks/list-offers.ts';

import { countOffersMainPage } from '../../utils/constants/constants.ts';

import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import MainPage from '../../pages/main-page/main-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';

function App(): JSX.Element {
  return (
    <MainPage dataListOffers={listOffers} countOffersMainPage={countOffersMainPage} />
    // <OfferPage />
    // <LoginPage />
    // <FavoritesPage />
  );
}

export default App;
