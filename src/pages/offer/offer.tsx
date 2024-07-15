import { AuthorizedUser } from '../../types/authorized-user.ts';
import { ListOffers } from '../../types/list-offer.ts';

import Header from '../../components/header/header.tsx';
import CommonMap from '../../components/main/common-map/common-map.tsx';
import PlaceCard from '../../components/main/place/place-card/place-card.tsx';
import PlaceCharacteristics from '../../components/main/place/place-characteristics/place-characteristics.tsx';
import PlaceGallery from '../../components/main/place/place-gallery/place-gallery.tsx';
import ReviewsForm from '../../components/main/reviews/reviews-form/reviews-form.tsx';
import ReviewsHeader from '../../components/main/reviews/reviews-header/reviews-header.tsx';
import ReviewsList from '../../components/main/reviews/reviews-list/reviews-list.tsx';

type Offer = {
  countOffersMainPage: number;
  user: AuthorizedUser;
  favoritesCount: number;
  offers: ListOffers[];
}

function Offer({ countOffersMainPage, offers, user, favoritesCount }: Offer): JSX.Element {
  const listOffers = [...offers].slice(0, countOffersMainPage).map((offer) => <PlaceCard key={offer.id} data={offer} classNameCard={'near-places__card'} classNameImageWrapper={'near-places__image-wrapper'} />
  );

  return (
    <div className="page">
      <Header user={user} favoritesCount={favoritesCount} isVisibleNavigation />

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
              {listOffers}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
