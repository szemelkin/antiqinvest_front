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
import LotsAdmin from "../Lots/LotsAdmin";
import LotsAdminBriefCase from "../Lots/LostAdminBriefcase";
import LotsCardAdmin from "../Lots/LostCardAdmin";
import LostCardAdminAllusers from "../Lots/LostCardAdminAllusers";
import ProductsAdmin from "../Products/ProductsAdmin";

function CabinetHeadlineAdmin() {
  return (
    <>
      <ul className="Cabinet cabinetAdmin">
        <li className="Cabinet__block AdminCabinet__block">
          <img src={people} />
          <NavLink exact to="/cabinetadmin/alllots">
            Все лоты
          </NavLink>
        </li>

        <li className="Cabinet__block AdminCabinet__block">
          <img src={info} />
          <NavLink exact to="/cabinetadmin/allusers">
            Все пользователи
          </NavLink>
        </li>

        <li className="Cabinet__block AdminCabinet__block">
          <img src={briefcase} />
          <NavLink exact to="/cabinetadmin/allbriefcase">
            Все портфели
          </NavLink>
        </li>

        <li className="Cabinet__block AdminCabinet__block">
          <img src={briefcase} />
          <NavLink exact to="/cabinetadmin/allpropducts">
            Все продукты
          </NavLink>
        </li>
      </ul>
      <div>
        <Route
          path="/cabinetadmin/alllots"
          exact
          render={() => (
            <>
              <div className="marginTop63">
                <Search />
                <div className="marginTop63">
                  <LotsTraider />
                </div>
              </div>
            </>
          )}
        />
        <Route
          path="/cabinetadmin/allusers"
          exact
          render={() => (
            <>
              <div className="marginTop63">
                <Search />
                <div className="marginTop63"></div>
                <LotsAdminBriefCase />
              </div>
            </>
          )}
        />
        <Route
          path="/cabinetadmin/allbriefcase"
          exact
          render={() => (
            <>
              <div className="marginTop63">
                <Search />
                <div className="marginTop63"></div>
                <LostCardAdminAllusers />
              </div>
            </>
          )}
        />

        <Route
          path="/cabinetadmin/allpropducts"
          exact
          render={() => (
            <>
              <div className="marginTop63">
                <Search />
                <div className="marginTop63"></div>
                <ProductsAdmin />
              </div>
            </>
          )}
        />
      </div>
    </>
  );
}

export default CabinetHeadlineAdmin;
