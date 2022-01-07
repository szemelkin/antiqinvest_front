import "./App.css";
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

function App() {
  return (
    <div className="App">
      {/*главная страница
      <div className="image">
        <HeaderMain />
        <Headline />
      </div>
      <div className="Background-wrapper">
        <div className="PaddingTop150">
        <Investment />
        </div>
        
        <Transaction />
        <Calm />
      </div>
      <Footer />*/}

      {/*страница кабинет

      <div className="Background-wrapper">
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

      {/*модальное окно внести сумму */}

        <BringMoney />

    </div>
  );
}

export default App;
