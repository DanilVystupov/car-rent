import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Нужна дополнительная информация?</h2>
              <p>
                Профессионал, специализирующийся в различных областях исследований,
                разработок, а также специалист по обучению. Опыт работы более 15 лет.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (888) 888-888
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                carrental@carmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Москва
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Имя <b>*</b>
                </label>
                <input type="text" placeholder='Например: "Олег"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Расскажите нам об этом <b>*</b>
                </label>
                <textarea placeholder="Ваше сообщение.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp;
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Забронируйте автомобиль вместе с нами</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(888) 888-888</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
