import "./CabinetHeadline.css";
import "./../MainCabinet/MainCabinet.css";
import "../../index.css";
import people from "../../assets/images/people.png";
import info from "../../assets/images/info.png";
import briefcase from "../../assets/images/briefcase.png";
import Products from "../Products/Products";
import Report from "../Report/Report";
import Events from "../Events/Events";
import Profile from "../Profile/Profile";
import Lots from "../Lots/Lots";

import { Switch, Route, NavLink } from "react-router-dom";

function CabinetHeadline() {
  return (
    <>
      <ul className="Cabinet">
        <li className="Cabinet__block">
          <img src={people} />
          <NavLink exact to="/cabinet">
            Кабинет
          </NavLink>
        </li>

        <li className="Cabinet__block">
          <img src={info} />
          <NavLink exact to="/cabinet/briefcase">
            Портфель
          </NavLink>
        </li>

        <li className="Cabinet__block">
          <img src={briefcase} />
          <NavLink exact to="/cabinet/lots">
            Все лоты
          </NavLink>
        </li>
      </ul>
      <div>
        <Route
          path="/cabinet"
          exact
          render={() => (
            <>
              <div className="marginTop63">
                <Profile />
                <div className="marginTop500"></div>
              </div>
            </>
          )}
        />
        <Route
          path="/cabinet/briefcase"
          exact
          render={() => (
            <>
              <div className="MainCabinet__block MarginTop30">
                <Products />
                <div className="MarginBottom20">
                  <Report />
                </div>
              </div>
              <div className="MarginBottom20">
                <Events />
              </div>
            </>
          )}
        />
        <Route
          path="/cabinet/lots"
          exact
          render={() => (
            <>
              <div className="MainCabinet__block MarginTop30">
                <div className="MarginBottom20">
                  <Lots />
                </div>
              </div>
            </>
          )}
        />
      </div>
    </>
  );
}

export default CabinetHeadline;
