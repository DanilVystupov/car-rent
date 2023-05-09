import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Почему выбирают нас?</h4>
                <h2>Самые выгодные предложения, которые вы когда-либо найдете</h2>
                <p>
                  Откройте для себя лучшие предложения, которые вы когда-либо найдете
                  благодаря нашим непревзойденным предложениями. Мы стремимся предоставить вам
                  лучшее соотношение цены и качества за ваши деньги, чтобы вы могли наслаждаться
                  высококачественными услугами и чтобы вы могли наслаждаться высококачественными
                  услугами и продуктами. Наши предложения разработаны для того,
                  чтобы вы получили максимальное удовольствие от аренды,
                  поэтому не упустите свой шанс сэкономить.
                </p>
                <a href="#home">
                  Узнать подробнее &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Поездка по пересеченной местности</h4>
                    <p>
                      Поднимите свой опыт вождения на новый уровень с нашими первоклассными
                      автомобилями для ваших приключений по пересеченной местности.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Всё включено</h4>
                    <p>
                      Получите все, что вам нужно, по удобной и прозрачной
                      ценовой политике "Всё включено".
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Никаких скрытых платежей</h4>
                    <p>
                      Наслаждайтесь душевным спокойствием благодаря нашей политике
                      отсутствия скрытых платежей. Мы верим в прозрачное и честное ценообразование.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
