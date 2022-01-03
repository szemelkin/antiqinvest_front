import "./Transaction.css";
import "../../App.css";
import Slider from "./Slider/Slider";

function Transaction() {
  return (
    <div className="Transaction">
      <div className="Transaction__headline">
        <h3>Пример сделок</h3>
        <div className="Transaction__hr">
          <hr></hr>

        <div className="Transaction__hr-small">
            <hr></hr>
        </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Transaction;
