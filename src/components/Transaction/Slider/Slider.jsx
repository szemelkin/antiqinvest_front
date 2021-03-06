import "./Slider.css";
import SliderCard from "./SliderCard";
import buttonRight from "../../../assets/images/button-right.png";
import buttonLeft from "../../../assets/images/button-left.png";

function Slider() {
  return (
    <div className="botton-wrapper">
      <div className="Slider slider-margin">
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </div>
      <div className="buttons">
        <button>
          <img src={buttonLeft} />
        </button>
        <button>
          <img src={buttonRight} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
