import "./Card.css";
import computer from "../../../assets/images/comp.png";

function Card() {
  return (
    <div className="Cards">
      <div className="Card">
        <img src={computer} />
        <h4>Онлайн</h4>
        <span>
          Работа полностью онлайн. Зачисление и вывод денег онлайн. Срок вывода
          денег 5 дней
        </span>
      </div>

      <div className="Card">
        <img src={computer} />
        <h4>Инвестирование с высокой доходностью</h4>
        <span>
        Несколько продуктов позволяют учесть ваш аппетит к риску и доходности. Наши клиенты получают доходность от 2% до 40% в месяц в рублях
        </span>
      </div>

      <div className="Card">
        <img src={computer} />
        <h4>Систематизация уникальных знаний для роста доходности</h4>
        <span>
        Мы постоянно наращиваем экспертизу оценки с помощью ИТ-технологий, экспертов антикварного рынка и нашего опыта.
        </span>
      </div>
      
      <div className="Card">
        <img src={computer} />
        <h4>Гарантии</h4>
        <span>
        Личные гарантии учредителей фонда возврата инвестированных средств
        </span>
      </div>
    </div>
  );
}

export default Card;
