type OfferLocation = {
  'latitude': number,
  'longitude': number,
  'zoom': number
};

type OfferCity = {
  'name': string,
  'location': OfferLocation[]
};

type ListOffers = {
  'id': string,
  'title': string,
  'type': string,
  'price': number,
  'previewImage': string,
  'city': OfferCity[],
  'location': OfferLocation[],
  'isFavorite': boolean,
  'isPremium': boolean,
  'rating': number
};

type OfferCharacteristicGoods = string[];

type OfferCharacteristicHost = {
  'name': string,
  'avatarUrl': string,
  'isPro': boolean
}

type OfferCharacteristicImages = string[];

type OfferCharacteristics = {
  'description': string,
  'bedrooms': number,
  'goods': OfferCharacteristicGoods[],
  'host': OfferCharacteristicHost[],
  'images': OfferCharacteristicImages[],
  'maxAdults': number
}

type Offer = ListOffers | OfferCharacteristics;

type User = {
  'name': string,
  'avatarUrl': string,
  'isPro': boolean,
};

type Authorization = {
  'email': string,
  'token': string
};

type AuthorizedUser = Authorization | User;

type Comments = {
  'id': string,
  'date': string,
  'user': User[],
  'comment': string,
  'rating': number
};
