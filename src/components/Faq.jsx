import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">

              <h2>Часто задаваемые вопросы</h2>
              <p>
                Ответы на распространенные вопросы и рекомендации:
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. Что особенного в сравнении предложений по аренде автомобилей?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Сравнение предложений по аренде автомобилей очень важно, так как это
                  помогает найти наилучшую сделку, которая соответствует вашему бюджету и
                  требованиям, гарантируя, что вы получить максимальную выгоду за свои деньги.
                  Сравнивая различные вариантов, вы можете найти предложения, предлагающие более
                  низкие цены, дополнительные услуги или лучшие модели автомобилей.
                  Вы можете найти предложения по аренде автомобилей, изучив информацию
                  в интернете и сравнить цены.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Как найти предложения по аренде автомобилей?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Вы можете найти предложения по аренде автомобилей,
                  проведя исследование в интернете и сравнивая цены
                  от различных прокатных компаний. Есть сайты которые, позволяют сравнить
                  цены и просмотреть доступные варианты аренды. Также
                  рекомендуется подписаться на рассылку новостей по электронной почте и
                  следить за компаниями по прокату автомобилей в социальных сетях,
                  чтобы быть в курсе любых специальных предложениях или акциях.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Как мне найти такие низкие цены на аренду автомобилей?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Бронируйте заранее: Заблаговременное бронирование аренды автомобиля может
                  часто приводит к снижению цен. Сравните цены в нескольких
                  компаний, чтобы сравнить цены от нескольких компаний по прокату автомобилей.
                  Ищите промокоды и купоны, которые можно использовать для снижения цены аренды.
                  Аренда за пределами аэропорта может иногда приводить к более низким цены.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
