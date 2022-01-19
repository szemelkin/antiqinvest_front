import "../index.css";
import "../App.css";

import HeaderMain from "./HeaderMain/Headermain";
import Headline from "./Headline/Headline";
import Investment from "./Investment/Investment";
import Transaction from "./Transaction/Transaction";
import Calm from "./Сlaim/Calm";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}

export default Home;
