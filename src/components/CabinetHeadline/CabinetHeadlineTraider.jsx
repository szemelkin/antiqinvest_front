import "./CabinetHeadline.css";
import "./../MainCabinet/MainCabinet.css";
import "../../index.css";
import "../../App.css";
import people from "../../assets/images/people.png";
import info from "../../assets/images/info.png";
import briefcase from "../../assets/images/briefcase.png";
import Products from "../Products/Products";
import Report from "../Report/Report";
import Events from "../Events/Events";
import Profile from "../Profile/Profile";
import LotsTraider from "../Lots/LotsTraider";

import { Switch, Route, NavLink } from "react-router-dom";
import Search from "../Lots/Search";

function CabinetHeadlineTraider() {
  return (
    <>
      <ul className="Cabinet">
        <li className="Cabinet__block">
          <img src={people} />
          <NavLink exact to="/cabinetraider">
            Кабинет
          </NavLink>
        </li>

        <li className="Cabinet__block">
          <img src={info} />
          <NavLink exact to="/cabinetraider/briefcase">
            Портфель
          </NavLink>
        </li>

        <li className="Cabinet__block">
          <img src={briefcase} />
          <NavLink exact to="/cabinetraider/lots">
            Все лоты
          </NavLink>
        </li>
      </ul>
      <div>
        <Route
          path="/cabinetraider"
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
          path="/cabinetraider/briefcase"
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
          path="/cabinetraider/lots"
          exact
          render={() => (
            <>
              <div className="marginTop63">
                <Search />
              </div>

              <div className="MainCabinet__block MarginTop30">
                <div className="MarginBottom20">
                  <LotsTraider />
                </div>
              </div>
            </>
          )}
        />
      </div>
    </>
  );
}

export default CabinetHeadlineTraider;
