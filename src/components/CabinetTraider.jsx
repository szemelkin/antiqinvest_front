import "../index.css";
import "../App.css";
import Header from "./Header/Header";
import MainCabinetTraider from "./MainCabinet/MainCabinetTraider";
import Footer from "./Footer/Footer";

function CabinetTraider() {
  return (
    <div className="Background-wrapper">
      <Header />
      <div className="wrapper">
        <div className="marginTop70">
         <MainCabinetTraider />
        </div>
        <div className="MarginTop80"></div>
      </div>
      <Footer />
    </div>
  );
}

export default CabinetTraider;
