import "./MainCabinet.css";
import "../../index.css"
import CabinetHeadlineTraider from "../CabinetHeadline/CabinetHeadlineTraider";

function MainCabinetTraider() {
  return (
    <div className="MainCabinet">
      <div className="MainCabinet__wrapper">
        <CabinetHeadlineTraider  />
      </div>
    </div>
  );
}

export default MainCabinetTraider;
