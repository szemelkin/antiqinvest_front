import "./Card.css";
import "../../../index.css"
import computer from "../../../assets/images/comp.png";

function Card() {
  return (
    <>
      <div className="Card">
        <img src={computer} />
        <h4>Онлайн</h4>
        <span>
          Работа полностью онлайн. Зачисление и вывод денег онлайн. Срок вывода
          денег 5 дней
        </span>
      </div>
    </>
  );
}

export default Card;
