import "./App.css";
import {
  free,
  use,
  event,
  investmentCard,
  lots,
  productData,
  productCard,
  allusers,
} from "./Api";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cabinet from "./components/Cabinet";
import CabinetTraider from "./components/CabinetTraider";
import AdminCabinet from "./components/AdminCabinet";
import Home from "./components/Home";
import EditTrader from "./components/EditTrader";
import EditAdmin from "./components/EditAdmin";
import Auth from "./components/Auth";
import Context from "./Context";
import EditBriefCase from "./components/EditLot/EditBriefCase";
import EditAdminBriefcase from "./components/EditAdminBriefcase";
import EditAdminAllProducts from "./components/EditAdminAllProducts";

function App() {
  const value = {
    free,
    use,
    event,
    investmentCard,
    lots,
    productData,
    productCard,
    allusers,
  };

  return (
    <div className="App">
      {/*главная страница*/}
      <Context.Provider value={value}>
        <Router>
          <Link to="/"></Link>
          <Link to="/auth"></Link>
          <Link to="/cabinet"></Link>
          <Link to="/cabinet/lots"></Link>
          <Link to="/cabinet/briefcase"></Link>
          <Link to="/cabinetraider"></Link>
          <Link to="/cabinetadmin"></Link>
          <Link to="/cabinetadmin/alllots"></Link>
          <link to="/cabinetadmin/allproducts"></link>

          <Route exact path="/auth" component={Auth} />
          {/* пользователь*/}
          <Route exact path="/" component={Home} />
          <Route exact path="/cabinet" component={Cabinet} />
          <Route exact path="/cabinet/lots" component={Cabinet} />
          <Route exact path="/cabinet/briefcase" component={Cabinet} />
          {/*трейдер*/}
          <Route exact path="/" component={Home} />
          <Route exact path="/cabinetraider" component={CabinetTraider} />
          <Route exact path="/cabinetraider/lots" component={CabinetTraider} />
          <Route
            exact
            path="/cabinetraider/briefcase"
            component={CabinetTraider}
          />
          <Route exact path="/cabinetraider/lots/edit" component={EditTrader} />

          {/*админка*/}
          <Route exact path="/" component={Home} />
          <Route exact path="/cabinetadmin" component={AdminCabinet} />
          <Route exact path="/cabinetadmin/alllots" component={AdminCabinet} />
          <Route exact path="/cabinetadmin/allusers" component={AdminCabinet} />
          <Route
            exact
            path="/cabinetadmin/allbriefcase"
            component={AdminCabinet}
          />
          <Route
            exact
            path="/cabinetadmin/allproducts"
            component={AdminCabinet}
          />
          <Route
            exact
            path="/cabinetadmin/allbriefcase/edit"
            component={EditAdmin}
          />
          <Route
            exact
            path="/cabinetadmin/allbriefcase/editbrief"
            component={EditAdminBriefcase}
          />
          <Route
            exact
            path="/cabinetadmin/allpropducts/editproducts"
            component={EditAdminAllProducts}
          />
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
