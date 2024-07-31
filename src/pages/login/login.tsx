import { Helmet } from 'react-helmet-async';

import { AuthorizationStatus } from '../../utils/constants/constants.ts';

import { AuthorizedUser } from '../../types/authorized-user.ts';

import Header from '../../components/header/header.tsx';
import LoginForm from '../../components/main/login-form/login-form.tsx';

type Login = {
  user: AuthorizedUser;
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
}

function Login({ user, authorizationStatus, favoritesCount }: Login): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities | Авторизация</title>
      </Helmet>

      <Header authorizationStatus={authorizationStatus} user={user} favoritesCount={favoritesCount} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginForm />
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
