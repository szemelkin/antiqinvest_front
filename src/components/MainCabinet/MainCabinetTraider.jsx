import "./MainCabinet.css";
import "../../index.css"
import CabinetHeadlineTraider from "../CabinetHeadline/CabinetHeadlineTraider";
import EditLot from "../EditLot/EditLot";

function MainCabinetTraider() {
  return (
    <div className="MainCabinet">
      <div className="MainCabinet__wrapper">
        <CabinetHeadlineTraider  />
        <EditLot />
      </div>

    </div>
  );
}

export default MainCabinetTraider;
