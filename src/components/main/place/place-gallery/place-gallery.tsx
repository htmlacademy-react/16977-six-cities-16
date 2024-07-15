import { galleryImages } from '../../../../utils/constants/constants.ts';

type PlaceGalleryImage = {
  image: string;
}

function PlaceGalleryImage({ image }: PlaceGalleryImage): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Photo studio" />
    </div>
  );
}

function PlaceGallery(): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {galleryImages.map((image) => (
          <PlaceGalleryImage key={image} image={image} />
        ))}
      </div>
    </div>
  );
}

export default PlaceGallery;
