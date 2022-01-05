import "./CabinetHeadline.css";
import people from "../../assets/images/people.png";
import info from "../../assets/images/info.png";
import briefcase from "../../assets/images/briefcase.png";

function CabinetHeadline() {
  return (
    <div className="Cabinet__headline marginTop">
      <div className="Cabinet__headline-block">
        <img src={people} />
        <a>Кабинет</a>
      </div>

      <div className="Cabinet__headline-block">
        <img src={info} />
        <a>Профиль</a>
      </div>

      <div className="Cabinet__headline-block">
        <img src={briefcase} />
        <a>Портфель</a>
      </div>
    </div>
  );
}

export default CabinetHeadline;
