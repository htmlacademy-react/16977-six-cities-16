import { Helmet } from 'react-helmet-async';
import { AuthorizationStatus } from '../../utils/constants/constants.ts';

import { AuthorizedUser } from '../../types/authorized-user.ts';
import { OfferExtended } from '../../types/offer-extended.ts';
import { OfferDefault } from '../../types/offer-default.ts';
import { Comments } from '../../types/comments.ts';

import Header from '../../components/header/header.tsx';
import CommonMap from '../../components/main/common-map/common-map.tsx';
import PlaceCard from '../../components/main/place/place-card/place-card.tsx';
import PlaceCharacteristics from '../../components/main/place/place-characteristics/place-characteristics.tsx';
import PlaceGallery from '../../components/main/place/place-gallery/place-gallery.tsx';
import ReviewsForm from '../../components/main/reviews/reviews-form/reviews-form.tsx';
import ReviewsHeader from '../../components/main/reviews/reviews-header/reviews-header.tsx';
import ReviewsList from '../../components/main/reviews/reviews-list/reviews-list.tsx';

type Offer = {
  user: AuthorizedUser;
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
  offer: OfferExtended;
  comments: Comments[];
  offers: OfferDefault[];
  countOffersOfferPage: number;
}

function Offer({
  countOffersOfferPage,
  authorizationStatus,
  offers,
  offer,
  user,
  favoritesCount,
  comments
}: Offer): JSX.Element {
  const listOffers = [...offers].slice(0, countOffersOfferPage).map((offersItem) => <PlaceCard key={offersItem.id} data={offersItem} classNameCard={'near-places__card'} classNameImageWrapper={'near-places__image-wrapper'} />
  );

  const commentsLength = comments.length;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities | {offer.title}</title>
      </Helmet>

      <Header authorizationStatus={authorizationStatus} user={user} favoritesCount={favoritesCount} isVisibleNavigation isActive={false} />

      <main className="page__main page__main--offer">
        <section className="offer">
          <PlaceGallery />

          <div className="offer__container container">
            <div className="offer__wrapper">
              <PlaceCharacteristics offer={offer} />

              <section className="offer__reviews reviews">
                <ReviewsHeader commentsLength={commentsLength} />

                <ReviewsList comments={comments} />

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
