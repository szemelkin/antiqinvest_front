import "./Transaction.css";
import "../../App.css";
import Slider from "./Slider/Slider";
import SimpleSlider from "./Slider/Slider2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Transaction() {
  return (
    <>
      <div className="Transaction">
        <div className="Transaction__headline">
          <h3>Пример сделок</h3>
          <div className="Transaction__hr">
            <hr></hr>
          </div>
        </div>
        {/* <Slider />*/}
        <SimpleSlider />
        <div className="Transaction__hr-small">
          <hr></hr>
        </div>
      </div>
    </>
  );
}

export default Transaction;
