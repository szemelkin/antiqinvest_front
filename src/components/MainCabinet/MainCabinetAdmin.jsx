import "./MainCabinet.css";
import "../../index.css";
import CabinetHeadlineAdmin from "../CabinetHeadline/CabinetHeadlineAdmin";

function MainCabinetAdmin() {
  return (
    <div className="MainCabinet">
      <div className="MainCabinet__wrapper">
        <CabinetHeadlineAdmin />
      </div>
    </div>
  );
}

export default MainCabinetAdmin;
