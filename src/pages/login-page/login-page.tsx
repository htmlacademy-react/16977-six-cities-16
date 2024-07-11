import Header from '../../components/header/header.tsx';
import LoginForm from '../../components/main/login-form/login-form.tsx';

function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header isVisibleNavigation={false} />

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

export default LoginPage;
