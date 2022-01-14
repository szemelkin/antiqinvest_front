import "./EventsCard.css";
import "../../index.css";


function EventsCard({img, lot, product, status, capital, payment, profit}) {
  return (
 
<>
      <div className="Events__list">
        <img src={img} alt="clock" />

        <div className="Events__lot width-big">
          <h6>Лот 1</h6>
          <h3>{lot}</h3>
        </div>

        <h5>{product}</h5>

        <div className="Events__lot width">
          <h6>Статус</h6>
          <h3>{status}</h3>
        </div>

        <div className="Events__lot width">
          <h6>Инвестиции</h6>
          <h3>{capital} ₽</h3>
        </div>

        <div className="Events__lot width">
          <h6>Внесено</h6>
          <h3>{payment} ₽</h3>
        </div>

        <div className="Events__lot width">
          <h6>Доход</h6>
          <h3>{profit} ₽</h3>
        </div>
      </div>
      <hr></hr>
     </>
  );
}

export default EventsCard;
