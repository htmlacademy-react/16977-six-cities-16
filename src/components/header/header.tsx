import Logo from './logo/logo.tsx';
import Navigation from './navigation/navigation.tsx';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
