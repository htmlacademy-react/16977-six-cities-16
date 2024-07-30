import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import user from './mocks/user.ts';
import favorites from './mocks/favorites.ts';
import listOffers from './mocks/list-offers.ts';
import offer from './mocks/offer.ts';
import comments from './mocks/comments.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      user={user}
      favorites={favorites}
      listOffers={listOffers}
      offer={offer}
      comments={comments}
    />
  </React.StrictMode>
);
