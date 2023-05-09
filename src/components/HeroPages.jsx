import { Link } from "react-router-dom";

function HeroPages({ name }) {

  const str = '<--';

  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            <h3>{name}</h3>
            <p>
              <Link to="/"> <span>{str}</span> Вернуться на главную</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;
