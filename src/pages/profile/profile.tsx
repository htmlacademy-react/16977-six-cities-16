import { Helmet } from 'react-helmet-async';
import { AuthorizedUser } from '../../types/authorized-user.ts';
import { AuthorizationStatus } from '../../utils/constants/constants.ts';
import Header from '../../components/header/header.tsx';

import './profile.style.css';


type Profile = {
  user: AuthorizedUser;
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
}

function Profile({ user, authorizationStatus, favoritesCount }: Profile): JSX.Element {
  const { name, avatarUrl, isPro, email } = user;

  return (
    <div className="page page--gray page--profile">
      <Helmet>
        <title>6 cities | {name}</title>
      </Helmet>

      <Header authorizationStatus={authorizationStatus} user={user} favoritesCount={favoritesCount} isVisibleNavigation isActive />

      <main className="page__main page__main--profile">
        <h1 className="visually-hidden">Profile</h1>

        <section className="profile">
          <div className="profile__container">
            <div className="profile__left">
              <div className="profile__user-avatar">
                <img className="profile__user-avatar-img" src={avatarUrl} alt={name} />
              </div>

              {isPro && <p className='profile__user-status'>Premium</p>}
            </div>

            <div className="profile__right">
              <p className="profile__user-name"><strong>username:</strong> {name}</p>
              <p className="profile__user-email"><strong>email:</strong> {email}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
