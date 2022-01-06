import "./Slider.css";
import img from "../../../assets/images/slider-image1920.png";
import SliderCard from './SliderCard'


function Slider() {
  return (
    <div className="Slider slider-margin">
        <SliderCard />
        <SliderCard />
        <SliderCard />

    </div>
  );
}

export default Slider;
