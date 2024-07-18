import { Link } from 'react-router-dom';

import { AuthorizationStatus } from '../../../utils/constants/constants.ts';

import { AuthorizedUser } from '../../../types/authorized-user.ts';

type HeaderNavigation = {
  authorizationStatus: AuthorizationStatus;
  user: AuthorizedUser;
  favoritesCount: number;
};

function HeaderNavigation({
  authorizationStatus,
  user,
  favoritesCount
}: HeaderNavigation): JSX.Element {
  const { email } = user;

  const isUser = (authorizationStatus === AuthorizationStatus.Auth);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isUser && (
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">{email}</span>
            </a>

            <Link to="/favorites">
              <span className="header__favorite-count">{favoritesCount}</span>
            </Link>
          </li>
        )}

        <li className="header__nav-item">
          <Link className="header__nav-link" to={isUser ? '#' : '/login'}>
            <span className="header__signout">{isUser ? 'Sign out' : 'Sign in'}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
