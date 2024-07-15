import user from '../../mocks/user.ts';
import favorites from '../../mocks/favorites.ts';
import listOffers from '../../mocks/list-offers.ts';

import { countOffersMainPage } from '../../utils/constants/constants.ts';

import Main from '../../pages/main/main.tsx';

function App(): JSX.Element {
  const favoriteCount = favorites.length;

  return (
    <Main
      countOffersMainPage={countOffersMainPage}

      user={user}
      favoritesCount={favoriteCount}
      offers={listOffers}
    />
  );
}

export default App;
