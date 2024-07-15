import { AuthorizedUser } from '../../types/authorized-user.ts';

import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import FavoritesList from '../../components/main/favorites/favorites-list/favorites-list.tsx';
import FavoritesTitle from '../../components/main/favorites/favorites-title/favorites-title.tsx';

type Favorites = {
  user: AuthorizedUser;
  favoritesCount: number;
}

function Favorites({ user, favoritesCount }: Favorites): JSX.Element {
  return (
    <div className="page">
      <Header user={user} favoritesCount={favoritesCount} isVisibleNavigation />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <FavoritesTitle />

            <FavoritesList />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;
