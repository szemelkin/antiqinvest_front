import "./AboutLot.css";
//import "../../App.css";
//import "../../index.css";
import clock from "../../assets/images/slider-image1920.png";
import add from "../../assets/images/image-add.png";
import btn from "../../assets/images/button-yellow.png";
import pencel from "../../assets/images/pencel.png";
import profile from "../../assets/images/profile.png";
import LotTable from "./LotTable";
import tick from "../../assets/images/tick.png";
import SliderTraider from "../Transaction/SliderTraider/SliderTraider";
import SimpleSliderTraider from "../Transaction/SliderTraider/SimpleSliderTraider";

function AboutLot() {
  return (
    <>
      <div className="AboutLot">
        <div className="AboutLot__headline">
          <h3 className="Headline">О лоте</h3>
          <h5>Изображения</h5>
        </div>
        <div style={{marginTop: "17px"}}>
            <SimpleSliderTraider />
        </div>
      

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
                Некоторые особенности внутренней политики указаны как
                претенденты на роль ключевых факторов. С учётом сложившейся
                международной обстановки, убеждённость некоторых оппонентов
                представляет собой интересный эксперимент проверки
                своевременного выполнения сверхзадачи.
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

      <div className="AboutLot__capital">
        <div className="AboutLot__capital-block">
          <h3 className="Headline">Об инвестициях</h3>
          <button>Привлечь инвестиции</button>
        </div>
        <div className="wrapperBlock">
          <div className="AboutLot__capital-about">
            <div className="block-about">
              <h4>Тип инвестпродукта</h4>
              <h3>21.02.2021</h3>
              <hr className="about-hr" />
            </div>
            <div className="block-about">
              <h4>Дата сбора инвестиций</h4>
              <h3>21.02.2021</h3>
              <hr className="about-hr" />
            </div>
            <div className="block-about">
              <h4>Ожидаемый срок продажи</h4>
              <h3>21.02.2021</h3>
              <hr className="about-hr" />
            </div>
            <div className="block-about">
              <h4>Ожидаемая цена продажи</h4>
              <h3>180 000 ₽</h3>
              <hr className="about-hr" />
            </div>
          </div>
          <h3>Инвесторы</h3>

          <LotTable />
        </div>
      </div>

      <div className="AboutLot__sale">
        <h3 className="Headline">О продаже лота</h3>
        <div className="wrapperBlock AboutLot__sale-blocks">
          <div className="AboutLot__sale-left">
            <div className="AboutLot__sale-block">
              <div className="block-about">
                <h4>Дата покупки</h4>
                <h3>21.02.2021</h3>
                <hr className="about-hr" />
              </div>

              <div className="block-about">
                <h4>Цена продажи</h4>
                <h3>180 000 ₽</h3>
                <hr className="about-hr" />
              </div>
            </div>
            <div className="block-about-bottom">
              <h4>Место продажи</h4>
              <h3>119049 г. Москва, Проспект вернадского, 43</h3>
              <hr className="about-hr" />
            </div>
          </div>

          <div className="AboutLot__sale-right">
            <div className="block-about">
              <h4>Статус лота</h4>
              <h3>
                Собрал инвестиции{" "}
                <a href="#">
                  <span>
                    <img src={tick} />
                  </span>
                </a>
              </h3>
            </div>

            <div className="block-about-bottom">
              <h4>Информация о покупателе</h4>
              <h3>Орехов Виталий Александрович</h3>
              <hr className="about-hr" />
            </div>
          </div>
        </div>

        <h3 className="Headline">Распределение прибыли</h3>
        <div className="wrapperBlock">
          <LotTable />
        </div>
      </div>
    </>
  );
}

export default AboutLot;
