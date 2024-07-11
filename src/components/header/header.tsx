import HeaderLogo from './header-logo/header-logo.tsx';
import HeaderNavigation from './header-navigation/header-navigation.tsx';

function Header({ isVisibleNavigation = false }: { isVisibleNavigation: boolean }): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <HeaderNavigation isVisibleNavigation={isVisibleNavigation} />
        </div>
      </div>
    </header>
  );
}

export default Header;
