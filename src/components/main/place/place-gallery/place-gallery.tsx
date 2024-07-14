const galleryImages = [
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/apartment-01.jpg'
];

function PlaceGalleryImage({ image }: { image: string }): JSX.Element {
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
