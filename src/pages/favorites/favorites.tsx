import { Helmet } from 'react-helmet-async';

import { AuthorizationStatus } from '../../utils/constants/constants.ts';

import { AuthorizedUser } from '../../types/authorized-user.ts';
import { ListOffers } from '../../types/list-offers.ts';

import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import FavoritesList from '../../components/main/favorites/favorites-list/favorites-list.tsx';
import FavoritesTitle from '../../components/main/favorites/favorites-title/favorites-title.tsx';

type Favorites = {
  user: AuthorizedUser;
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
  favorites: ListOffers[];
}

function Favorites({ user, authorizationStatus, favoritesCount, favorites }: Favorites): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities | Избранное</title>
      </Helmet>

      <Header authorizationStatus={authorizationStatus} user={user} favoritesCount={favoritesCount} isVisibleNavigation isActive={false} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <FavoritesTitle />

            <FavoritesList favorites={favorites} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;
