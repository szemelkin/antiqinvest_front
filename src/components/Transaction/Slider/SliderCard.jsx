import "./SliderCard.css";
import img from "../../../assets/images/slider-image1920.png";

function SliderCard() {
  return (
    <>
      <div className="Slider__card">
        <img src={img} />
        <div className="Slider__card-main">
          <h3>Антикварные часы</h3>
          <div className="Slider__card-block">
            <div className="Slider__card-main-text">
              <h3>Инвестиции</h3>
              <h4>75 000 ₽</h4>
            </div>
            <div className="Slider__card-main-text">
              <h3>Доходность</h3>
              <h4>10 000 ₽</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
