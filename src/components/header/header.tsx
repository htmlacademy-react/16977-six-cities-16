import { AuthorizationStatus } from '../../utils/constants/constants.ts';

import { AuthorizedUser } from '../../types/authorized-user.ts';

import HeaderLogo from './header-logo/header-logo.tsx';
import HeaderNavigation from './header-navigation/header-navigation.tsx';

type Header = {
  authorizationStatus: AuthorizationStatus;
  isVisibleNavigation?: boolean;
  user: AuthorizedUser;
  favoritesCount: number;
  isActive?: boolean;
}

function Header({
  authorizationStatus,
  isVisibleNavigation = true,
  user,
  favoritesCount,
  isActive = false
}: Header): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo isActive={isActive} />

          {isVisibleNavigation && (
            <HeaderNavigation
              authorizationStatus={authorizationStatus}
              user={user}
              favoritesCount={favoritesCount}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
