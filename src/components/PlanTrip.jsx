import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Спланируйте свою поездку прямо сейчас</h3>
              <h2>Быстрая и простая аренда</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Выберите автомобиль</h3>
                <p>
                  Мы предлагаем большой выбор автомобилей для всех ваших потребностей.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Связь с операторы</h3>
                <p>
                  Наши знающие операторы всегда готовы помочь
                  в решении любых вопросов и проблем
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Поехали</h3>
                <p>
                  Если вы отправляетесь в путешествие, мы позаботимся о вас,
                  предоставив широкий выбор автомобилей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
