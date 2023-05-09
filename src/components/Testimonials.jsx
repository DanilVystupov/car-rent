import Img2 from "../images/testimonials/user_review1.jpg";
import Img3 from "../images/testimonials/user_review2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Проверено людьми</h4>
              <h2>Отзывы клиентов</h2>
              <p>
                Наши клиенты убедились на себе в высоком качестве наших услуг
                и они готовы поделиться с вами.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Мы арендовали автомобиль на этом сайте и получили потрясающий
                  опыт! Бронирование было легким, а цены на аренду были
                  очень доступными.
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Гигачад</h4>
                      <p>Москва</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Автомобиль был в отличном состоянии и сделал нашу поездку еще лучше.
                  Очень рекомендую этот сайт по аренде автомобилей!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Венгр Андраш Арато</h4>
                      <p>Воронеж</p>
                    </span>
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

export default Testimonials;
