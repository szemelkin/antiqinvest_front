import "../index.css";
import "../App.css";
import Header from "./Header/Header";
import MainCabinet from "./MainCabinet/MainCabinet";
import Footer from "./Footer/Footer";

function Cabinet() {
  return (
    <div className="Background-wrapper">
      <Header />
      <div className="wrapper">
        <div className="marginTop70">
          <MainCabinet />
        </div>
        <div className="MarginTop80"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Cabinet;
