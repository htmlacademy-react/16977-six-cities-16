import { AuthorizedUser } from '../../types/authorized-user.ts';

import HeaderLogo from './header-logo/header-logo.tsx';
import HeaderNavigation from './header-navigation/header-navigation.tsx';

type Header = {
  isVisibleNavigation: boolean;
  user: AuthorizedUser;
  favoritesCount: number;
}

function Header({
  isVisibleNavigation = true,
  user,
  favoritesCount
}: Header): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          {isVisibleNavigation && (
            <HeaderNavigation
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
