import "./App.css";
import Footer from "./components/Footer/Footer";
import HeaderMain from "./components/HeaderMain/Headermain";
import Headline from "./components/Headline/Headline";
import Investment from "./components/Investment/Investment";
import Transaction from "./components/Transaction/Transaction";
import Calm from "./components/Сlaim/Calm";

import Header from "./components/Header/Header";
import MainCabinet from "./components/MainCabinet/MainCabinet";
import CabinetHeadline from "./components/CabinetHeadline/CabinetHeadline";
import Profile from "./components/Profile/Profile";

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

      {/*страница кабинет
      <div className="Cabinet">
        <Header />
        <MainCabinet />
        <div className="MarginFooter">
          <Footer />
        </div>
      </div>*/}

      {/*профиль*/}
      <div className="Profiles">
        <Header />
        <div className="Profiles__wrapper">
        <CabinetHeadline />
        <Profile />

        </div>

      
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
