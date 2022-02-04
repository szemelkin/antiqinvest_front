import "./App.css";
import { free, use, event, investmentCard, lots, productData, productCard } from "./Api";

import Footer from "./components/Footer/Footer";
import HeaderMain from "./components/HeaderMain/Headermain";
import Headline from "./components/Headline/Headline";
import Investment from "./components/Investment/Investment";
import Transaction from "./components/Transaction/Transaction";
import Calm from "./components/Сlaim/Calm";
import Products from "./components/Products/Products";

import Header from "./components/Header/Header";
import MainCabinet from "./components/MainCabinet/MainCabinet";
import CabinetHeadline from "./components/CabinetHeadline/CabinetHeadline";
import Profile from "./components/Profile/Profile";
import Lots from "./components/Lots/Lots";
import Report from "./components/Report/Report";
import BringMoney from "./components/Modal/BringMoney";
import BringAmount from "./components/Modal/BringAmount";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cabinet from "./components/Cabinet";
import CabinetTraider from "./components/CabinetTraider";
import Home from "./components/Home";
import EditTrader from "./components/EditTrader"
import Context from "./Context";

function App() {
  const value = { free, use, event, investmentCard, lots, productData, productCard};

 

  return (
    <div className="App">
      {/*главная страница*/}
      <Context.Provider value={value}>
        <Router>
          <Link to="/"></Link>
          <Link to="/cabinet"></Link>
          <Link to="/cabinet/lots"></Link>
          <Link to="/cabinet/briefcase"></Link>
         {/* пользователь
         <Route exact path="/" component={Home} />
          <Route exact path="/cabinet" component={Cabinet} />
          <Route exact path="/cabinet/lots" component={Cabinet} />
          <Route exact path="/cabinet/briefcase" component={Cabinet} />*/}
      {/*трейдер*/}
          <Route exact path="/" component={Home} />
          <Route exact path="/cabinet" component={CabinetTraider} />
          <Route exact path="/cabinet/lots" component={CabinetTraider} />
          <Route exact path="/cabinet/briefcase" component={CabinetTraider} />
          <Route exact path="/cabinet/cabinet/lots/edit" component={EditTrader} />
        </Router>
      </Context.Provider>

      {/*страница кабинет

      <Cabinet />*/}
      {/* <div className="Background-wrapper">
        <Header />
        <div className="wrapper">
          <div className="marginTop70">
            <MainCabinet />
          </div>
          <div className="MarginTop80">
            <Footer />
          </div>
        </div>
      </div>*/}

      {/*профиль
      <div className="Background-wrapper">
        <Header />
        <div className="wrapper">
          <div className="marginTop70">
            <CabinetHeadline />
          </div>
          <div className="marginTop63">
            <Profile />
          </div>
        </div>
        <div className="marginTop500">
          <Footer />
        </div>
      </div>*/}

      {/*портфель

      <div className="Background-wrapper">
        <Header />
        <div className="wrapper">
          <div className="marginTop70">
            <CabinetHeadline />
          </div>

          <div className="MainCabinet__block MarginTop30">
            <Products />
            <div className="MarginBottom20">
              <Report />
            </div>
          </div>

          <Lots />
        </div>
        <div className="MarginTop90">
          <Footer />
        </div>
      </div>*/}

      {/*модальное окно внести сумму 

        <BringMoney />*/}

      {/*модальное окно внесение денег 

        <BringAmount />*/}
    </div>
  );
}

export default App;
