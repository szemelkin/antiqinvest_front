import "./AboutLot.css";
//import "../../App.css";
//import "../../index.css";
import clock from "../../assets/images/slider-image1920.png";
import add from "../../assets/images/image-add.png";
import btn from "../../assets/images/button-yellow.png";
import pencel from "../../assets/images/pencel.png";

function AboutLot() {
  return (
    <div className="AboutLot">
      <div className="AboutLot__headline">
        <h3>О лоте</h3>
        <h5>Изображения</h5>
      </div>
{/*
      <div className="AboutLot__slider">
        <img src={clock} />
        <img src={clock} />
        <img src={clock} />
        <div>
          <img src={add} />
          <h5>
            Добавить
            <br />
            изображение
          </h5>
        </div>
        <button className="btn1">
          <img src={btn} />
        </button>
        <button className="btn2">
          <img src={btn} />
        </button>
</div>*/}

      <div className="AboutLot__description">
        <div className="AboutLot__description-left">
          <div className="description-block">
            <div className="block-about">
              <h4>Название</h4>
              <h3>Антикварные часы</h3>
              <hr className="about-hr" />
            </div>
            <div className="block-about">
              <h4>ID лота</h4>
              <h3>id_8985421</h3>
              <hr className="about-hr" />
            </div>
          </div>
          <div className="left-block-description">
            <div className="block-description-block">
              <h4>Описание</h4>
              <img src={pencel} />
            </div>
            <h6>
              Некоторые особенности внутренней политики указаны как претенденты
              на роль ключевых факторов. С учётом сложившейся международной
              обстановки, убеждённость некоторых оппонентов представляет собой
              интересный эксперимент проверки своевременного выполнения
              сверхзадачи.
            </h6>
          </div>
        </div>

        <div className="AboutLot__description-right">
          <div className="description-block">
            <div className="block-about">
              <h4>Дата покупки</h4>
              <h3>21.02.2021</h3>
              <hr className="about-hr" />
            </div>
            <div className="block-about">
              <h4>Цена покупки</h4>
              <h3>75 000 ₽</h3>
              <hr className="about-hr" />
            </div>
          </div>
          <div className="left-block-description">
          <div className="right-block-about">
              <h4>Место покупки</h4>
              <h3>119049 г. Москва, Проспект вернадского, 431</h3>
              <hr className="about-hr" />
            </div>

            <div className="right-block-about">
              <h4>Информация о продавце</h4>
              <h3>Орехов Виталий Александрович</h3>
              <hr className="about-hr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLot;
