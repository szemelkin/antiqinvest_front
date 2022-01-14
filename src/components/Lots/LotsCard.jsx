import "./LotsCard.css";
import "../../index.css";


function LotsCard({setModalActive, img, lot, status, capital, payment }) {

  
  return (
    <>
      <div className="Lots__block">
        <div className="Lots__list">
          <img src={img} alt="clock" />

          <div className="Lots__lot width-big">
            <h6>Лот 1</h6>
            <h3>{lot}</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Статус</h6>
            <h3>{status}</h3>
          </div>

          <div className="Lots__lot width">
            <h6>В работе</h6>
            <h3>{capital} ₽</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Свободные</h6>
            <h3>{payment} ₽</h3>
          </div>
        </div>

        <div className="Lots-card-buttonsBlock">
          <button>Вывести</button>
          <button onClick={() => setModalActive(true)}>Внести</button>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default LotsCard;
