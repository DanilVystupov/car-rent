function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>СAR</span> Rental
              </li>
              <li>
                Мы предлагаем большой выбор автомобилей для всех ваших потребностей.
              </li>
              <li>
                <a href="tel:888888888">
                  <i className="fa-solid fa-phone"></i> &nbsp; (888)-888-888
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                avto-rent.ru@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; avto-rent.ru@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>О нас</li>
              <li>
                <a href="#home">Карьера</a>
              </li>
              <li>
                <a href="#home">Блог</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Рабочие часы</li>
              <li>Пн - Пт: 9:00 - 21:00</li>
              <li>Суббота: 9:00 - 19:00</li>
              <li>Воскресенье: Выходной</li>
            </ul>

            <ul className="footer-content__2">
              <li>Подписаться</li>
              <li>
                <p>
                  Подключите свой адрес электронной почты,
                  чтобы получать последние новости и обновления.
                </p>
              </li>
              <li>
                <input type="email" placeholder="Введите ваш email"></input>
              </li>
              <li>
                <button className="submit-email">Отправить</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
