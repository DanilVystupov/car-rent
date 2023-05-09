import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Адам", job: "Продавец" },
    { img: Person2, name: "Майкл", job: "Владелец бизнеса" },
    { img: Person3, name: "Дарья", job: "Фотограф" },
    { img: Person4, name: "Надежда", job: "Мастер по ремонту автомобилей" },
    { img: Person5, name: "Роберт", job: "Механик" },
    { img: Person6, name: "Екатерина", job: "Менеджер" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
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

export default Team;
