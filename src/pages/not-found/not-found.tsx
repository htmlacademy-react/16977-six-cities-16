import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './not-found.css';

function NotFound(): JSX.Element {
  const path = window.location.pathname;

  return (
    <div className="page-not-found">
      <Helmet>
        <title>6 cities | Страница не найдена</title>
      </Helmet>

      <div className="page-not-found__container">
        <div>
          <img className="page-not-found__img" src="img/404.gif" alt="и так сойдёт!" />
        </div>
        <div className="message-box">
          <h1>404</h1>
          <p>Page <strong className="f-w-700">&ldquo;{path}&ldquo;</strong> not found</p>
          <div className="buttons-con">
            <div className="action-link-wrap">
              <Link to="/" className="link-button">
                Go to Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
