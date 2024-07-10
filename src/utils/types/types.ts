type OfferLocation = {
  'latitude': number,
  'longitude': number,
  'zoom': number
};

type OfferCity = {
  'name': string,
  'location': OfferLocation[]
};

type Offer = {
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
