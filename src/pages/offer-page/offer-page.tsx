import Header from "../../components/header/header";
import CommonMap from "../../components/main/common-map/common-map";
import PlaceCard from "../../components/main/place-card/place-card";
import PlaceCharacteristics from "../../components/main/place-characteristics/place-characteristics";
import PlaceGallery from "../../components/main/place-gallery/place-gallery";
import ReviewsForm from "../../components/main/reviews-form/reviews-form";
import ReviewsHeader from "../../components/main/reviews-header/reviews-header";
import ReviewsList from "../../components/main/reviews-list/reviews-list";

function OfferPage(): JSX.Element {
  return (
    <div className="page">
      <Header />

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
