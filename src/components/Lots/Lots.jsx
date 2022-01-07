import "./Lots.css";
import "../../index.css"
import clock from "../../assets/images/clock.png";

function Lots() {
  return (
    <div className="Lots">
      <h3>Проинвестированные лоты</h3>

      <div className="Lots__block">
        <div className="Lots__list">
          <img src={clock} alt="clock" />

          <div className="Lots__lot width-big">
            <h6>Лот 1</h6>
            <h3>Антикварные часы</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Статус</h6>
            <h3>Завершен</h3>
          </div>

          <div className="Lots__lot width">
            <h6>В работе</h6>
            <h3>75 000 ₽</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Свободные</h6>
            <h3>75 000 ₽</h3>
          </div>
        </div>

        <div className="Products__left-card-buttonsBlock">
          <button>Вывести</button>
          <button>Внести</button>
        </div>
      </div>
      <hr />

      <div className="Lots__block">
        <div className="Lots__list">
          <img src={clock} alt="clock" />

          <div className="Lots__lot width-big">
            <h6>Лот 1</h6>
            <h3>Антикварные часы</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Статус</h6>
            <h3>Завершен</h3>
          </div>

          <div className="Lots__lot width">
            <h6>В работе</h6>
            <h3>75 000 ₽</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Свободные</h6>
            <h3>75 000 ₽</h3>
          </div>
        </div>

        <div className="Products__left-card-buttonsBlock">
          <button>Вывести</button>
          <button>Внести</button>
        </div>
      </div>
      <hr />
      <div className="Lots__block">
        <div className="Lots__list">
          <img src={clock} alt="clock" />

          <div className="Lots__lot width-big">
            <h6>Лот 1</h6>
            <h3>Антикварные часы</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Статус</h6>
            <h3>Завершен</h3>
          </div>

          <div className="Lots__lot width">
            <h6>В работе</h6>
            <h3>75 000 ₽</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Свободные</h6>
            <h3>75 000 ₽</h3>
          </div>
        </div>

        <div className="Products__left-card-buttonsBlock">
          <button>Вывести</button>
          <button>Внести</button>
        </div>
      </div>
      <hr />

      <div className="Lots__block">
        <div className="Lots__list">
          <img src={clock} alt="clock" />

          <div className="Lots__lot width-big">
            <h6>Лот 1</h6>
            <h3>Антикварные часы</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Статус</h6>
            <h3>Завершен</h3>
          </div>

          <div className="Lots__lot width">
            <h6>В работе</h6>
            <h3>75 000 ₽</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Свободные</h6>
            <h3>75 000 ₽</h3>
          </div>
        </div>

        <div className="Products__left-card-buttonsBlock">
          <button>Вывести</button>
          <button>Внести</button>
        </div>
      </div>
    </div>
  );
}

export default Lots;
