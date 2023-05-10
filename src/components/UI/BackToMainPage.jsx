import { Link } from "react-router-dom";
import { HOME } from '../../utils/consts';

function BackToMainPage() {

  const str = '<-';

  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            <p>
              <Link to={HOME}> <span>{str}</span> Вернуться на главную</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BackToMainPage;
