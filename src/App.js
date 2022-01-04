import "./App.css";
import Footer from "./components/Footer/Footer";
import HeaderMain from "./components/HeaderMain/Headermain";
import Headline from "./components/Headline/Headline";
import Investment from "./components/Investment/Investment";
import Transaction from "./components/Transaction/Transaction";
import Calm from "./components/Сlaim/Calm";

import Header from "./components/Header/Header";
import MainCabinet from "./components/MainCabinet/MainCabinet";


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
      <Header />
      <MainCabinet />
      <Footer />
     
    </div>
  );
}

export default App;
