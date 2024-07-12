import listOffers from '../../mocks/list-offers.ts';

import { countOffersMainPage } from '../../utils/constants/constants.ts';

import MainPage from '../../pages/main-page/main-page.tsx';

function App(): JSX.Element {
  return (
    <MainPage dataListOffers={listOffers} countOffersMainPage={countOffersMainPage} />
  );
}

export default App;
