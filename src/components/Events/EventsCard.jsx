import "./EventsCard.css";
import "../../index.css";
import clock from "../../assets/images/clock.png";

function EventsCard() {
  return (
 

      <div className="Events__list">
        <img src={clock} alt="clock" />

        <div className="Events__lot width-big">
          <h6>Лот 1</h6>
          <h3>Антикварные часы</h3>
        </div>

        <h5>Классический</h5>

        <div className="Events__lot width">
          <h6>Статус</h6>
          <h3>Завершен</h3>
        </div>

        <div className="Events__lot width">
          <h6>Инвестиции</h6>
          <h3>75 000 ₽</h3>
        </div>

        <div className="Events__lot width">
          <h6>Внесено</h6>
          <h3>75 000 ₽</h3>
        </div>

        <div className="Events__lot width">
          <h6>Доход</h6>
          <h3>10 000 ₽</h3>
        </div>
      </div>
     
  );
}

export default EventsCard;
