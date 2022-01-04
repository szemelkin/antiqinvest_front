import "./MainCabinet.css";
import CabinetHeadline from "../CabinetHeadline/CabinetHeadline";
import Products from "../Products/Products";
import Report from "../Report/Report";

function MainCabinet() {
  return (
    <div className="MainCabinet">
      <div className="MainCabinet__wrapper">
        <CabinetHeadline />

        <div className="MainCabinet__block MarginTop30">
          <Products />
          <div className="MarginBottom20">
          <Report />
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default MainCabinet;