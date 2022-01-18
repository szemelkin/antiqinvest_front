import "./SliderCard.css";

function SliderCard({img, lot, capital, profit}) {
  return (
    <>
      <div className="slider__wraper">
        <div className="slider">
          <img src={img} />
          <div className="Slider__card-main">
            <h3>{lot}</h3>
            <div className="Slider__card-block">
              <div className="Slider__card-main-text">
                <h3>Инвестиции</h3>
                <h4>{capital} ₽</h4>
              </div>
              <div className="Slider__card-main-text">
                <h3>Доходность</h3>
                <h4>{profit} ₽</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
