import HeaderLogo from './header-logo/header-logo.tsx';
import HeaderNavigation from './header-navigation/header-navigation.tsx';

type Header = {
  isVisibleNavigation: boolean;
}

function Header({ isVisibleNavigation = true }: Header): JSX.Element {
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
