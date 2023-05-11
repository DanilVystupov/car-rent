import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";
import { ABOUT, CONTACT, HOME, MODELS, TEAM, TESTIMONIALS } from "../utils/consts";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to={HOME}>
                Главная
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to={ABOUT}>
                О нас
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to={MODELS}>
                Модели
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to={TESTIMONIALS}>
                Отзывы
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to={TEAM}>
                Наша команда
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to={CONTACT}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Главная
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                О нас
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Модели автомобилей
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
                Отзывы
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/team">
                Наша команда
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Контакты
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Войти
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Зарегистрироваться
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
