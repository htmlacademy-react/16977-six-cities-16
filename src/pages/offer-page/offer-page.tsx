import Header from '../../components/header/header.tsx';
import CommonMap from '../../components/main/common-map/common-map.tsx';
import PlaceCard from '../../components/main/place/place-card/place-card.tsx';
import PlaceCharacteristics from '../../components/main/place/place-characteristics/place-characteristics.tsx';
import PlaceGallery from '../../components/main/place/place-gallery/place-gallery.tsx';
import ReviewsForm from '../../components/main/reviews/reviews-form/reviews-form.tsx';
import ReviewsHeader from '../../components/main/reviews/reviews-header/reviews-header.tsx';
import ReviewsList from '../../components/main/reviews/reviews-list/reviews-list.tsx';

function OfferPage(): JSX.Element {
  return (
    <div className="page">
      <Header isVisibleNavigation />

      <main className="page__main page__main--offer">
        <section className="offer">
          <PlaceGallery />

          <div className="offer__container container">
            <div className="offer__wrapper">
              <PlaceCharacteristics />

              <section className="offer__reviews reviews">
                <ReviewsHeader />

                <ReviewsList />

                <ReviewsForm />
              </section>
            </div>
          </div>

          <CommonMap classNameMap={'offer__map'} />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <div className="near-places__list places__list">
              <PlaceCard classNameCard={'near-places__card'} classNameImageWrapper={'near-places__image-wrapper'} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
