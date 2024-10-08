import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/constants/constants';

function HeaderLogo({ isActive = true }: { isActive: boolean }): JSX.Element {
  return (
    <div className="header__left">
      <Link className={isActive ? 'header__logo-link header__logo-link--active' : 'header__logo-link'} to={AppRoute.Main}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
