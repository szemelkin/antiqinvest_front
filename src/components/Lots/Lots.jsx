import "./Lots.css";
import "../../index.css";
import clock from "../../assets/images/clock.png";
import LotsCard from "./LotsCard";

function Lots() {
  return (
    <div className="Lots">
      <h3>Проинвестированные лоты</h3>
      <LotsCard />
      <hr />
      <LotsCard />
      <hr />
      <LotsCard />
      <hr />
      <LotsCard />
      <hr />

      <LotsCard />
    </div>
  );
}

export default Lots;
