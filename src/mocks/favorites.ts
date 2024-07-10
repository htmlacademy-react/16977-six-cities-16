const favorite = [
  {
    "id": "6af6f711-c28d-4121-82cd-e0b462a27f00",
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment",
    "price": 120,
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      }
    },
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "isFavorite": true,
    "isPremium": true,
    "rating": 4,
    "previewImage": "https://url-to-image/image.png"
  },
  {
    "id": "d287e093-bc57-4428-b765-d8dc6f20d88c",
    "title": "Tile House",
    "type": "room",
    "price": 204,
    "city": {
      "name": "Dusseldorf",
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 51.225402,
      "longitude": 6.784314,
      "zoom": 16
    },
    "isFavorite": true,
    "isPremium": true,
    "rating": 3.8,
    "previewImage": "https://16.design.htmlacademy.pro/static/hotel/19.jpg"
  }
] as const;

export default favorite;
