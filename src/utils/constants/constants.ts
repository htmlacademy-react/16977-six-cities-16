const CITY_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const countOffersMainPage = 5 as const;

const galleryImages = [
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/apartment-01.jpg'
] as const;

const placesOptions = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

const MAX_RATING = 5 as const;

export { CITY_NAMES, countOffersMainPage, galleryImages, placesOptions, MAX_RATING };
