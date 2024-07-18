import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/constants/constants.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  page: string;
};

function PrivateRoute({ authorizationStatus, children, page }: PrivateRouteProps): JSX.Element {
  switch (page) {
    case AppRoute.Favorites:
      return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
    case AppRoute.Login:
      return authorizationStatus === AuthorizationStatus.Auth ? <Navigate to={AppRoute.Main} /> : children;
    default:
      return children;
  }
}

export default PrivateRoute;
