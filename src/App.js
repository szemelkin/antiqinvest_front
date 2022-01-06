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

function App() {
  return (
    <div className="App">
      {/*главная страница
      <div className="image">
        <HeaderMain />
        <Headline />
      </div>
      <Investment />
      <Transaction />
      <Calm />
      <Footer />*/}

      {/*страница кабинет*/}
      <div className="Profiles">
        <Header />
        <MainCabinet />
        <div className="MarginTop80">
          <Footer />
        </div>
      </div>

      {/*профиль
      <div className="Profiles">
        <Header /> 
        <div className="Profiles__wrapper">
          <CabinetHeadline />
          <Profile />
        </div>
        <Footer />
      </div>*/}

      {/*портфель

      <div className="Profiles">
        <Header />
        <div className="MainCabinet__wrapper">
          <CabinetHeadline />
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
    </div>
  );
}

export default App;
