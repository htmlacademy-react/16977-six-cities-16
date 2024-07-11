import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import FavoritesList from '../../components/main/favorites/favorites-list/favorites-list.tsx';
import FavoritesTitle from '../../components/main/favorites/favorites-title/favorites-title.tsx';

function FavoritesPage(): JSX.Element {
  return (
    <div className="page">
      <Header isVisibleNavigation={true} />

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

export default FavoritesPage;
