import listOffers from '../../mocks/list-offers.ts';

import { countOffersMainPage } from '../../utils/constants/constants.ts';

import Main from '../../pages/main/main.tsx';

function App(): JSX.Element {
  return (
    <Main dataListOffers={listOffers} countOffersMainPage={countOffersMainPage} />
  );
}

export default App;
