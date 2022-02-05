import "../index.css";
import "../App.css";
import Header from "./Header/Header";
import MainCabinetTraider from "./MainCabinet/MainCabinetTraider";
import Footer from "./Footer/Footer";
import EditLot from "./EditLot/EditLot";
import AboutLot from "./AboutLot/AboutLot";

function EditTrader() {
  return (
    <div className="Background-wrapper">
      <Header />
      <div className="wrapper">
        <div className="marginTop70">
         <MainCabinetTraider />      
        </div>
        <div className="marginTop70">
        <EditLot />
        </div>
        <div className="marginTop70">
        <AboutLot />
        </div>

        <div className="MarginTop80"></div>
      </div>
      <Footer />
    </div>
  );
}

export default EditTrader;
